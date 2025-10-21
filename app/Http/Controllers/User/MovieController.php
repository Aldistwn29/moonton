<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function show(Movies $movie)
    {
        return Inertia::render('User/Dashboard/Movie/show', [
            'movies' => $movie
        ]);
    }
}
