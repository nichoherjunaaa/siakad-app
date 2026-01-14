<?php

namespace Database\Factories;

use App\Models\ClassRoom;
use App\Models\Guardian;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Student::class;

    public function definition(): array
    {
        return [
            'user_id' => null, // assign di seeder
            'student_number' => fake()->unique()->numerify('STD####'),
            'national_student_id' => fake()->unique()->numerify('##########'),
            'full_name' => fake()->name(),
            'class_room_id' => null, // assign di seeder
            'guardian_id' => null,  // assign di seeder
            'status' => fake()->randomElement([
                'active',
                'dropout',
                'graduated',
                'transferred'
            ]),
        ];
    }
}
