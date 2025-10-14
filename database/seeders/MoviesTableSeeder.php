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
                'video_url' => 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNl5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
                'rating' => 4.5,
            ],
            [
                'name' => 'Avengers: Infinity War',
                'slug' => 'avengers-infinity-war',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMjM0NTgyNjAxMV5BMl5BanBnXkFtZTgwNzU1NzU2NTM@._V1_.jpg',
                'rating' => 4.5,
            ],
            [
                'name' => 'Avengers: Age of Ultron',
                'slug' => 'avengers-age-of-ultron',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=tmeOjFno6Do',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTgwMjQ4OTM4NjE@._V1_.jpg',
                'rating' => 4.5,
            ]
        ];

        // menambahkan data ke Database
        Movies::insert($movies);
    }
}
