<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscriptions extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'subscription_plan_id', 'price', 'expired_date', 'status_payment', 'snap_token'];
    
    // relasi ke table subscription_plans
    public function subscription_plans()
    {
        return $this->belongsTo(SubscriptionPlans::class, 'subscription_plan_id');
    }
}
