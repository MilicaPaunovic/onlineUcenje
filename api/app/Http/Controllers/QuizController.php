<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizResource;
use App\Models\Quizz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        $quizzes = Quizz::all();

        return QuizResource::collection($quizzes);
    }
}
