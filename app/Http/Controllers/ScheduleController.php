<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function index()
    {
        $user = auth()->user()->getAttributes();
        $scheduleData = [
            'academic_year' => '2023/2024',
            'semester' => 'Genap',
            'user' => $user,
        ];

        return inertia('Schedule', compact('scheduleData'));
    }
}
