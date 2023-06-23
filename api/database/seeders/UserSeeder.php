<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Milica Paunovic',
            'email' => 'paunovic.milica999@gmail.com',
            'password' => bcrypt('milica'),
            'role' => 'student',
        ]);

        User::create([
            'name' => 'Anka Teofilovic',
            'email' => 'ankateofilovic26@gmail.com',
            'password' => bcrypt('anka'),
            'role' => 'student',
        ]);

        User::create([
            'name' => 'Marijana Nikacevic',
            'email' => 'marijana.nikacevic99@gmail.com',
            'password' => bcrypt('marijana'),
            'role' => 'admin',
        ]);
    }
}
