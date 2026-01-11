<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AssignmentsController extends Controller
{
    public function index()
    {
        $assignmentsData = [
            'user' => [
                'name' => 'Ahmad Rizki',
                'role' => 'siswa',
                'class' => 'XII IPA 1',
                'academicYear' => '2023/2024',
                'semester' => 'Genap',
                'homeroomTeacher' => 'Bu Sari, S.Pd.'
            ]
        ];

        return inertia('Assignments', $assignmentsData);
    }
}
