<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboarController extends Controller
{
    public function index()
    {
        $feacturedMovies = Movies::where('is_featured', '1')->get();
        $movie = Movies::all();

        // return [
        //     'feactured' => $feactured,
        //     'movies' => $movies,
        // ];

        return Inertia::render('User/Dashboard/index', [
            'feacturedMovies' => $feacturedMovies,
            'movies' => $movie
        ]);
    }
}
