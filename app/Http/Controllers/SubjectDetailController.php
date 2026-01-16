<?php

namespace App\Http\Controllers;

use App\Models\ClassSchedule;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectDetailController extends Controller
{
    public function show($id)
    {
        $subjectById = ClassSchedule::with(['teacher', 'subject', 'class_room'])->where('subject_id', $id)->get();
        return Inertia::render('SubjectDetail', [
            'subjectById' => $subjectById
        ]);
    }
}
