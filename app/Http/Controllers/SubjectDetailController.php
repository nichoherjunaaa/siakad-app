<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectDetailController extends Controller
{
    public function show($id)
    {
        $subject = Subject::with('teachers')->find($id);
        return Inertia::render('SubjectDetail', [
            'subject' => $subject
        ]);
    }
}
