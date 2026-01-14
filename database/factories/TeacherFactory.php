<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => null,
            'subject_id' => null,
            'full_name' => fake()->name(),
            'employee_number' => fake()->unique()->numerify('EMP####'),
            'status' => fake()->randomElement(['active', 'onLeave', 'retired', 'resigned'])
        ];
    }
}
