<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Inertia\Inertia;

class TeachersController extends Controller
{
    public function index()
    {
        $teachers = Teacher::with('user')->get();
        return Inertia::render('Teachers', [
            'teachers' => $teachers
        ]);
    }
}