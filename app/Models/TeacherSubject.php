<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeacherSubject extends Model
{
    protected $fillable = [
        'teacher_id',
        'subject_id',
        'class_room_id',
        'academic_year_id',
    ];
}
