<?php

namespace Database\Factories;

use App\Models\ClassSchedule;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ClassSchedule>
 */
class ClassScheduleFactory extends Factory
{
    protected $model = ClassSchedule::class;

    public function definition(): array
    {
        $timeSlots = [
            ['07:00', '09:00'],
            ['08:00', '10:00'],
            ['10:00', '12:00'],
            ['13:00', '16:00'],
        ];

        [$start, $end] = fake()->randomElement($timeSlots);

        return [
            'class_room_id' => null,
            'subject_id' => null,
            'teacher_id' => null,
            'academic_year_id' => null,

            'day_of_week' => fake()->randomElement([
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
            ]),

            'start_time' => $start,
            'end_time' => $end,
        ];
    }
}
