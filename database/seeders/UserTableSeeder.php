<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // buat admin
        $admin =User::create([
            'name' => 'admin montoon',
            'email' => 'adminMonton@gmail.com',
            'password' => bcrypt('password'),
        ]);
        // mengassign role admin
        $admin->assignRole('admin');

        // buat user
        $user = User::create([
            'name' => 'user montoon',
            'email'=> 'user@gmail.com',
            'password' => bcrypt('password'),
        ]);
        // mengassign role user
        $user->assignRole('user');
    }
}
