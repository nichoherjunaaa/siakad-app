<?php

namespace Database\Seeders;

use App\Models\ClassRoom;
use App\Models\Guardian;
use App\Models\Student;
use App\Models\Subject;
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
        // 1. Buat Subject dulu
        $subjects = Subject::factory(5)->create();

        // 2. Buat Teacher + assign Subject
        $teachers = User::factory(15)
            ->state(['role' => 'teacher'])
            ->create()
            ->map(fn($user) => Teacher::factory()->create([
                'user_id' => $user->id,
                'subject_id' => $subjects->random()->id, // assign random subject
            ]));

        // 3. Buat ClassRoom + assign homeroom_teacher_id
        $classRooms = ClassRoom::factory(10)
            ->create()
            ->each(function ($classRoom) use ($teachers) {
                $classRoom->homeroom_teacher_id = $teachers->random()->id;
                $classRoom->save();
            });

        // 4. Buat Guardian + User
        $guardians = User::factory(10)
            ->state(['role' => 'guardian'])
            ->create()
            ->map(fn($user) => Guardian::factory()->create([
                'user_id' => $user->id,
            ]));

        // 5. Buat Student + assign class_room_id, guardian_id, user_id
        User::factory(50)
            ->state(['role' => 'student'])
            ->create()
            ->each(function ($user) use ($classRooms, $guardians) {
                Student::factory()->create([
                    'user_id' => $user->id,
                    'class_room_id' => $classRooms->random()->id,
                    'guardian_id' => $guardians->random()->id,
                ]);
            });
    }
}
