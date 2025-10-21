<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin =User::create([
            'name' => 'admin montoon',
            'email' => 'adminMonton@gmail.com',
            'password' => bcrypt('password'),
        ]);
        // mengassign role admin
        $admin->assignRole('admin');

        $user = User::create([
            'name' => 'user montoon',
            'email'=> 'user@gmail.com',
            'password' => bcrypt('password'),
        ]);
        // mengassign role user
        $user->assignRole('user');
    }
}
