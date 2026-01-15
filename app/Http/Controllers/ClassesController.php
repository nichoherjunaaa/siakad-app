<?php

namespace App\Http\Controllers;

use App\Models\ClassSchedule;
use App\Models\Subject;
use Auth;
use Inertia\Inertia;

class ClassesController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $student = $user->student;
        $subject_class = ClassSchedule::with(['teacher', 'subject', 'class_room'])->where('class_room_id', $student->class_room_id)->get(['id', 'class_room_id', 'subject_id', 'teacher_id']);
        return Inertia::render('Classes', [
            'subject_class' => $subject_class
        ]);
    }
}