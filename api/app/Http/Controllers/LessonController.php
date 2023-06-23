<?php

namespace App\Http\Controllers;

use App\Http\Resources\LessonResource;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    
     
    public function index()
    {
        $lessons = Lesson::all();

        return LessonResource::collection($lessons);
    }

    public function show($id)
    {
        $lesson = Lesson::findOrFail($id);

        return new LessonResource($lesson);
    }

    public function store(Request $request)
    {
        $lesson = Lesson::create($request->all());

        return new LessonResource($lesson);
    }

    public function update(Request $request, $id)
    {
        $lesson = Lesson::findOrFail($id);
        $lesson->update($request->all());

        return new LessonResource($lesson);
    }

    public function destroy($id)
    {
        $lesson = Lesson::findOrFail($id);
        $lesson->delete();

        return response()->json(null, 204);
    }
}
