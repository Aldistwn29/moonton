<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use App\Models\Movies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movies::withTrashed()->orderBy('deleted_at')->get();
        return Inertia::render('Admin/Movie/Index', [
            'movies' => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        $movie = Movies::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with(
            [
                "message" => "Movie created successfully",
                "type" => "success"
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Movies $movies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movies $movie)
    {
        return inertia::render('Admin/Movie/Edit', [
            'movie' => $movie
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movies $movie)
    {
        $data = $request->validated();
        if($request->file('thumbnail')){
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
            Storage::disk('public')->delete($movie->thumbnail);
        }else {
            $data['thumbnail'] = $movie->thumbnail;
        }
        // menyimpan data ke database
        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Updated successfully',
            'type' => 'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movies $movie)
    {
        $movie->delete();
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Deleted successfully',
            'type' => 'success',
        ]);
    }

    public function restore($movie)
    {
        Movies::withTrashed()->find($movie)->restore();
        redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Restored successfully',
            'type' => 'success',
        ]);
    }
}
