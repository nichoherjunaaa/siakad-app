<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = [
        'student_id',
        'subject_id',
        'teacher_id',
        'class_room_id',
        'academic_year_id',
        'assignment_score',
        'midterm_score',
        'final_exam_score',
        'final_score',
    ];
}
