<?php

use App\Http\Controllers\AssignmentsController;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\GradesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MaterialsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\StudentsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('dashboard');
    Route::get('/schedule', [ScheduleController::class, 'index'])->name('schedule');
    Route::get('/materials', [MaterialsController::class, 'index'])->name('materials');
    Route::get('/grades', [GradesController::class, 'index'])->name('grades');
    Route::get('/assignments', [AssignmentsController::class, 'index'])->name('assignments');
    Route::get('/classes', [ClassesController::class, 'index'])->name('classes');
    Route::get('/students', [StudentsController::class, 'index'])->name('students');
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
