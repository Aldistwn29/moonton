<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use App\Models\UserSubscriptions;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Midtrans;

class SubscriptionPlansController extends Controller
{

    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = env('MIDTRANS_IS_SANITIZED');
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = env('MIDTRANS_IS_3DS');
    }
    public function index()
    {
        $subscription = SubscriptionPlans::all();
        return Inertia::render('User/Dashboard/SubscriptionPlans/index', [
            'subscriptionPlans' => $subscription,
            'userSubscription' => null,
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlans $subscriptionPlan)
    {
        // ['user_id', 'subscription_plan_id', 'price', 'expired_date', 'status_payment', 'snap_token'];
        $data = [
            'user_id' => Auth::user()->id,
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            // 'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_periode_in_months),
            'status_payment' => 'pending',
        ];
        // menyimpan data ke tabel user_subscriptions
        $userSubscription = UserSubscriptions::create($data);

        // data yang di kirim ke midtrans
        $params = [
            'transaction_details' => [
                'order_id' => $userSubscription->id . '-' . Str::random(5),
                'gross_amount' => $userSubscription->price,
            ]
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        $userSubscription->update([
            'snap_token' => $snapToken
        ]);

        return Inertia::render('User/Dashboard/SubscriptionPlans/index', [
            'userSubscription' => $userSubscription,
        ]);
    }

    // public function midtransCallback(Request $request)
    // {
    //     $notif = new Midtrans\Notification();

    //     $transaction_status = $notif->transaction_status;
    //     $fraud = $notif->fraud_status;

    //     $transaction_id = explode('-', $notif->order_id)[0];
    //     $userSubscription = UserSubscriptions::find($transaction_id);

    //     if ($transaction_status == 'capture') {
    //         if ($fraud == 'challenge') {
    //             // TODO Set payment status in merchant's database to 'challenge'
    //             $userSubscription->payment_status = 'pending';
    //         } else if ($fraud == 'accept') {
    //             // TODO Set payment status in merchant's database to 'success'
    //             $userSubscription->status_payment = 'paid';
    //             $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_periode_in_months);
    //         }
    //     } else if ($transaction_status == 'cancel') {
    //         if ($fraud == 'challenge') {
    //             // TODO Set payment status in merchant's database to 'failure'
    //             $userSubscription->status_payment = 'failed';
    //         } else if ($fraud == 'accept') {
    //             // TODO Set payment status in merchant's database to 'failure'
    //             $userSubscription->status_payment = 'failed';
    //         }
    //     } else if ($transaction_status == 'deny') {
    //         // TODO Set payment status in merchant's database to 'failure'
    //         $userSubscription->status_payment = 'failed';
    //     } else if ($transaction_status == 'settlement') {
    //         // TODO set payment status in merchant's database to 'Settlement'
    //         $userSubscription->status_payment = 'paid';
    //         $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subscriptionPlan->active_periode_in_months);
    //     } else if ($transaction_status == 'pending') {
    //         // TODO set payment status in merchant's database to 'Pending'
    //         $userSubscription->status_payment = 'pending';
    //     } else if ($transaction_status == 'expire') {
    //         // TODO set payment status in merchant's database to 'expire'
    //         $userSubscription->status_payment = 'failed';
    //     }

    //     $userSubscription->save();
    //     return response()->json([
    //         'status' => 'success',
    //         'message' => 'Payment success'
    //     ]);
    // }

    public function midtransCallback(Request $request)
    {
        try {
            $notification = new \Midtrans\Notification();

        $transaction_status = $notification->transaction_status;
        $fraud = $notification->fraud_status;
        $transaction_id = explode('-', $notification->order_id)[0];

        Log::info("Midtrans callback", [
            'order_id' => $notification->order_id,
            'status' => $transaction_status,
            'fraud' => $fraud
        ]);

        $userSubscription = UserSubscriptions::find($transaction_id);

        if(!$userSubscription){
            return response()->json([
                'status' => 'error',
                'message' => 'Subscription not found'
            ], 404);
        }

        if ($transaction_status == 'capture') {
            if($fraud == 'challenge'){
                $userSubscription->status_payment = 'pending';
            } else if($fraud == 'accept'){
                $userSubscription->status_payment = 'paid';
                $userSubscription->expired_date = Carbon::now()->addMonths(
                    (int) $userSubscription->subscriptionPlans->active_periode_in_months
                );
            }
        } else if ($transaction_status == 'cancel'){
            $userSubscription->status_payment = 'failed';
        } else if($transaction_status == 'deny'){
            $userSubscription->status_payment = 'failed';
        } else if($transaction_status == 'settlement'){
            $userSubscription->status_payment = 'paid';
            $userSubscription->expired_date = Carbon::now()->addMonths(
                (int) $userSubscription->subscriptionPlans->active_periode_in_months
            );
        } else if($transaction_status == 'pending'){
            $userSubscription->status_payment = 'pending';
        } else if($transaction_status == 'expire'){
            $userSubscription->status_payment = 'failed';
        }

        // save data
        $userSubscription->save();

        // mengembalikan response
        return response()->json([
            'status' => 'success',
            'message' => 'Payment processed successfully'
        ]);
        } catch (\Throwable $e) {
            Log::error('Midtrans callback error' .$e->getMessage());
            return response()->json([
                'status' => 'error',
                'message' => 'Server Error' .$e->getMessage()
            ], 500);
        }
    } 
}
