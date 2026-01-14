<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subject>
 */
class SubjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'subject_code' => strtoupper($this->faker->bothify('MP-###')),
            'name' => $this->faker->randomElement([
                'Matematika',
                'Biologi',
                'Bahasa Indonesia',
                'Bahasa Inggris',
                'Fisika',
                'Kimia',
                'Geografi',
                'Sejarah',
                'Informatika',
                'Pendidikan Agama',
                'PKn',
            ]),
            'minimum_passing_grade' => $this->faker->numberBetween(60, 75),
        ];
    }
}
