<?php

namespace Database\Seeders;

use App\Models\ClassRoom;
use App\Models\Guardian;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Teacher::factory(5)->create();
        Guardian::factory(10)->create();
        ClassRoom::factory(5)->create();
        Student::factory(50)->create();

    }
}
