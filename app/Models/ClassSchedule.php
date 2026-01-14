<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassSchedule extends Model
{
    use HasFactory;
    protected $fillable = [
        'class_room_id',
        'subject_id',
        'teacher_id',
        'day_of_week',
        'start_time',
        'end_time',
        'academic_year_id',
    ];

    public function class_room()
    {
        return $this->belongsTo(ClassRoom::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function academic_year()
    {
        return $this->belongsTo(AcademicYear::class);
    }
}
