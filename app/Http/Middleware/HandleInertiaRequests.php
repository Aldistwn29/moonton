<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    private function activePlan()
    {
        //pastikan user aktif
        if(!Auth::check()){
            return null;
            }
        $user = Auth::user();
        // load relasi dengan eger loading
        $activePlan = $user->LastUserSubscription;

        // cek apakah $activePlan null
        if(!$activePlan){
            return null;
        }

        // Load realsi jika belum
        if(!$activePlan->relationLoaded('subscriptionPlans')) {
            $activePlan->load('subscriptionPlans');
        }

        // cek apakah subscriprtionPlans ada
        if(!$activePlan->subscriptionPlans) {
            return null;
        }

        // parse tanggal
        $startedDate = Carbon::parse($activePlan->created_at);
        $now = Carbon::now()->startOfDay();
        $expirdDate = Carbon::parse($activePlan->expired_date)->startOfDay();

        // hitung tanggal expored
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlans->active_periode_in_months);
        // Hitung total hari aktif
        $activDays = Carbon::parse($activePlan->updated_at)->startOfDay()->diffInDays($lastDay->copy()->startOfDay());
        // hitung sisa hari aktif
        $remainingActiveDays = $now->lessThan($expirdDate) ? $now->diffInDays($expirdDate) : 0;
        
        return[
            'name' => $activePlan->subscriptionPlans->name,
            'remainingActiveDays' => $remainingActiveDays,
            'activeDays' => $activDays,
            'isPremium' => $activePlan->subscriptionPlans->name === 'premium',
        ];
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type'),
            ]
        ];
    }
}
