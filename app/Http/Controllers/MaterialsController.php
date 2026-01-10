<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MaterialsController extends Controller
{
    public function index()
    {
        $materialsData = [
            'user' => [
                'name' => 'Ahmad Rizki',
                'role' => 'siswa',
                'class' => 'XII IPA 1',
                'totalMaterials' => 48,
                'downloaded' => 32
            ]
        ];

        return Inertia::render('Materials', $materialsData);
    }
}