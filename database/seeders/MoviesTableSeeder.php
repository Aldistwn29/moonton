<?php

namespace Database\Seeders;

use App\Models\Movies;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Avengers: Endgame',
                'slug' => 'avengers-endgame',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=hA6hldpSTF8',
                'thumbnail' => '/assets/images/featured-1.png',
                'rating' => 4.5,
                'is_featured' => true
            ],
            [
                'name' => 'Avengers: Infinity War',
                'slug' => 'avengers-infinity-war',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
                'thumbnail' => '/assets/images/featured-2.png',
                'rating' => 4.5,
                'is_featured' => false
            ],
            [
                'name' => 'Avengers: Age of Ultron',
                'slug' => 'avengers-age-of-ultron',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=tmeOjFno6Do',
                'thumbnail' => '/assets/images/featured-3.png',
                'rating' => 4.5,
                'is_featured' => false
            ]
        ];


        // menambahkan data ke Database
        Movies::insert($movies);
    }
}
