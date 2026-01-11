<?php

namespace Database\Seeders;

use App\Models\ClassRoom;
use App\Models\Guardian;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::where('role', 'student')->get();
        $classRooms = ClassRoom::all();
        $guardians = Guardian::all();

        foreach ($users as $user) {
            Student::factory()->create([
                'user_id' => $user->id,
                'class_room_id' => $classRooms->random()->id,
                'guardian_id' => $guardians->random()->id,
            ]);
        }
    }
}
