<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class StudentsController extends Controller
{
    public function index()
    {
        $studentsData = [
            'user' => [
                'name' => 'Bu Sari, S.Pd.',
                'role' => 'guru',
                'class' => 'XII IPA 1',
                'academicYear' => '2023/2024',
                'semester' => 'Genap'
            ]
        ];

        return Inertia::render('Students', $studentsData);
    }
}