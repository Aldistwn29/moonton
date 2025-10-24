<?php

use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubscriptionsPlansController;
use App\Http\Controllers\User\DashboarController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlansController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Redirect root to login page
Route::redirect('/', '/login');



// User Routes
Route::prefix('user')->name('user.dashboard.')->group(function() {
    Route::middleware(['auth', 'role:user'])->group(function() {
         // dashboard utama
    Route::get('/', [DashboarController::class, 'index'])->name('index');
    // movie routes
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');
    // subscription plans routes
    Route::get('subscription-plans', [SubscriptionPlansController::class, 'index'])->name('subscriptionPlans.index')->middleware('checkUserSubscription:false');
    Route::post('subscription-plan/{subscriptionPlan}/user-subscription', [SubscriptionPlansController::class, 'userSubscribe'])->name('subscriptionPlan.index')->middleware('checkUserSubscription:false');

    });
});

// Admin Route
Route::prefix('admin')->name('admin.dashboard.')->group(function() {
    Route::middleware(['auth', 'role:admin'])->group(function () {
        Route::put('movie/{movie}/restore', [AdminMovieController::class, 'restore'])->name('movie.restore');
        Route::resource('movie', AdminMovieController::class);
    });
});
// Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
//    });



// Prototype Routes
// Route::prefix('prototype')->name('prototype.')->group(function () {
//     // Guest Routes
//     Route::middleware('guest')->group(function () {
//         Route::get('/login', function () {
//             return Inertia::render('prototype/login');
//         })->name('login');

//         Route::get('/register', function () {
//             return Inertia::render('prototype/register');
//         })->name('register');
//     });

//     // Feature Routes
//     Route::middleware('auth')->group(function () {
//         Route::get('/dashboard', function () {
//             return Inertia::render('prototype/dashboard');
//         })->name('dashboard');

//         Route::get('/subscription', function () {
//             return Inertia::render('prototype/dubscription');
//         })->name('subscription');

//         Route::get('/movie/{slug}', function () {
//             return Inertia::render('prototype/movie/show');
//         })->name('movie.show');
//     });
// });



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
