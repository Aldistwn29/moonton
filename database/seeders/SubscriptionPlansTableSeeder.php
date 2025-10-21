<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlans;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // menambahkan data dummy untuk subscription plans
        $subscriptionPlans = [
            [
                'name' => 'besic',
                'price' => 300000,
                'active_periode_in_months' => 1,
                'featured' => json_encode([
                    'Lorem ipsum dolor sit amet 1',
                    'Lorem ipsum dolor sit amet 2',
                    'Lorem ipsum dolor sit amet 3'
                ]),
        ],
            [
                'name' => 'premium',
                'price' => 800000,
                'active_periode_in_months' => 3,
                'featured' => json_encode([
                    'Lorem ipsum dolor sit amet 1',
                    'Lorem ipsum dolor sit amet 2',
                    'Lorem ipsum dolor sit amet 3',
                    'Lorem ipsum dolor sit amet 4',
                    'Lorem ipsum dolor sit amet 5',
                    'Lorem ipsum dolor sit amet 6',
                ]),
            ]
        ];

        // menambahkan ke dalam database
        SubscriptionPlans::insert($subscriptionPlans);
    }
}
