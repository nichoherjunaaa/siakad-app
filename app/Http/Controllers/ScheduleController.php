<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function index()
    {
        // You can pass schedule data here
        $scheduleData = [
            'academic_year' => '2023/2024',
            'semester' => 'Genap',
            'user' => [
                'name' => 'Ahmad Rizki',
                'role' => 'siswa',
                'class' => 'XII IPA 1'
            ]
        ];

        return inertia('Schedule', compact('scheduleData'));
    }
}
