<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;
    protected $fillable = [
        'subject_code',
        'name',
        'minimum_passing_grade',
    ];
    protected $casts = [
        'minimum_passing_grade' => 'integer',
    ];

    public function teachers()
    {
        return $this->hasMany(Teacher::class);
    }

}
