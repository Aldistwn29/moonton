<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// route login
Route::redirect('/', '/prototype/login');

// route prototype
Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login', function() {
        return inertia::render('prototype/login');
    })->name('login');
    Route::get('/register', function() {
        return inertia::render('prototype/register');
    })->name('register');
    
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
