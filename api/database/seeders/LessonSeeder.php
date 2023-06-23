<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = Course::all();

        foreach ($courses as $course) {
            $lesson1 = Lesson::create([
                'course_id' => $course->id,
                'title' => 'Lekcija 1',
                'content' => 'Ovo je sadržaj lekcije 1 za kurs ' . $course->name . '.',
                'order' => 1,
            ]);

            $lesson2 = Lesson::create([
                'course_id' => $course->id,
                'title' => 'Lekcija 2',
                'content' => 'Ovo je sadržaj lekcije 2 za kurs ' . $course->name . '.',
                'order' => 2,
            ]);
        }
    }
}
