<?php

namespace App\Http\Controllers;

use App\Models\ClassSchedule;
use App\Models\Subject;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user->role !== 'student' && $user->student->status !== 'active') {
            abort(403, 'Hanya siswa yang bisa mengakses jadwal');
        }

        $student = $user->student;
        $schedules = ClassSchedule::with(['subject', 'teacher', 'academic_year'])
        ->where('class_room_id', $student->class_room_id)
        ->get();

        return Inertia::render('Schedule', [
            'schedules' => $schedules
        ]);
    }
}
