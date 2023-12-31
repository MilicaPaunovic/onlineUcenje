<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
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
        $this->call([
            
            CourseSeeder::class,
            LessonSeeder::class,
            QuizzSeeder::class,
        ]);
    }
}
