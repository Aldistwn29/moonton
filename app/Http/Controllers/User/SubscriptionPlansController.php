<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlans;
use App\Models\UserSubscriptions;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SubscriptionPlansController extends Controller
{
    public function index()
    {
        $subscription = SubscriptionPlans::all();
        return Inertia::render('User/Dashboard/SubscriptionPlans/index', [
            'subscriptionPlans' => $subscription,
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlans $subscriptionPlan)
    {
        // ['user_id', 'subscription_plan_id', 'price', 'expired_date', 'status_payment', 'snap_token'];
        $data = [
            'user_id' => Auth::user()->id,
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_periode_in_months),
            'status_payment' => 'paid',
        ];
        // menyimpan data ke tabel user_subscriptions
        UserSubscriptions::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
