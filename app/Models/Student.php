<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'user_id',
        'student_number',
        'national_student_id',
        'full_name',
        'class_room_id',
        'parent_id',
        'status'
    ];
}
