<?php

namespace Database\Factories;

use App\Models\ClassRoom;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ClassRoom>
 */
class ClassRoomFactory extends Factory
{
    protected $model = ClassRoom::class;

    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['A', 'B', 'C']),
            'grade_level' => fake()->randomElement(['X', 'XI', 'XII']),
            'major' => fake()->randomElement(['IPA', 'IPS', 'RPL', 'TKJ']),
            'homeroom_teacher_id' => null,
        ];
    }
}
