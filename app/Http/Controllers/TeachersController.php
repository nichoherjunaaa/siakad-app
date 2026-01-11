<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TeachersController extends Controller
{
    public function index()
    {
        $teachersData = [
            'user' => [
                'name' => 'Admin Sekolah',
                'role' => 'admin',
                'department' => 'Administrasi',
                'academicYear' => '2023/2024'
            ]
        ];

        return Inertia::render('Teachers', $teachersData);
    }
}