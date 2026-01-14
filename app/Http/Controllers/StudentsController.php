<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function index()
    {
        $students = Student::with(['class_room', 'guardian', 'user'])->get();
        return Inertia::render('Students', [
            'students' => $students
        ]);
    }
}