<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ClassesController extends Controller
{
    public function index()
    {
        $classesData = [
            'user' => [
                'name' => 'Ahmad Rizki',
                'role' => 'siswa',
                'class' => 'XII IPA 1',
                'academicYear' => '2023/2024',
                'semester' => 'Genap',
                'homeroomTeacher' => 'Bu Sari, S.Pd.'
            ]
        ];

        return Inertia::render('Classes', $classesData);
    }
}