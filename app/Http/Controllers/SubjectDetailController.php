<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectDetailController extends Controller
{
    public function show($subject)
    {
        $subjectData = [
            'id' => $subject,
            'name' => 'Matematika',
            'code' => 'MAT-XII-001',
            'description' => 'Mata pelajaran Matematika untuk kelas XII IPA...',
            // ... other subject data
        ];

        return Inertia::render('SubjectDetail', [
            'subject' => $subjectData,
            'user' => [
                'name' => 'Ahmad Rizki',
                'role' => 'siswa',
                'class' => 'XII IPA 1',
                'academicYear' => '2023/2024',
                'semester' => 'Genap'
            ]
        ]);
    }
}
