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
            'user_id' => User::factory(),

            'full_name' => fake()->name(),

            'employee_number' => fake()->unique()->numerify('EMP####'),

            'primary_subject' => fake()->randomElement([
                'Matematika',
                'Bahasa Indonesia',
                'Bahasa Inggris',
                'Fisika',
                'Kimia',
                'Biologi',
                'Informatika',
                'Sejarah',
                'Geografi',
                'Ekonomi',
            ]),
            'status' => fake()->randomElement(['active', 'onLeave', 'retired', 'resigned'])
        ];
    }
}
