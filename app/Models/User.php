<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // relasi ke model user subscription
    public function LastUserSubscription()
    {
        return $this->hasOne(UserSubscriptions::class)->where('status_payment', 'paid')->latest();
    }

    // accessor untuk mengecek apakah user aktif
    public function getIsActiveAttribute()
    {
        if (!$this->LastUserSubscription) {
            return false;
        }
        $dateNow = Carbon::now();
        $dataExpired = Carbon::create($this->LastUserSubscription->expired_date);
        return $dateNow->lessThanOrEqualTo($dataExpired);
    }
}
