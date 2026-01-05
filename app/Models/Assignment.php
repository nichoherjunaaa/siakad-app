<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    protected $fillable = [
        'subject_id',
        'class_room_id',
        'teacher_id',
        'title',
        'description',
        'deadline',
    ];
}
