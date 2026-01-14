<?php

namespace Database\Seeders;

use App\Models\AcademicYear;
use App\Models\ClassRoom;
use App\Models\ClassSchedule;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClassScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $academicYear = AcademicYear::where('is_active', true)->first();

        if (!$academicYear) {
            $this->command->error('Academic year aktif tidak ditemukan.');
            return;
        }

        $classRooms = ClassRoom::all();
        $subjects = Subject::all();
        $teachers = Teacher::all();

        if ($classRooms->isEmpty() || $subjects->isEmpty() || $teachers->isEmpty()) {
            $this->command->error('Data ClassRoom / Subject / Teacher belum lengkap.');
            return;
        }

        foreach ($classRooms as $classRoom) {

            $days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

            $weeklySubjects = $subjects->shuffle()->take(count($days));

            $timeSlots = [
                ['07:00', '10:00'],
                ['10:00', '12:00'],
                ['12:00', '13:00'],
                ['13:00', '16:00'],
            ];

            foreach ($days as $index => $day) {
                [$start, $end] = $timeSlots[$index % count($timeSlots)];

                ClassSchedule::create([
                    'class_room_id' => $classRoom->id,
                    'subject_id' => $weeklySubjects[$index]->id,
                    'teacher_id' => $teachers->random()->id,
                    'academic_year_id' => $academicYear->id,
                    'day_of_week' => $day,
                    'start_time' => $start,
                    'end_time' => $end,
                ]);
            }


        }

    }
}
