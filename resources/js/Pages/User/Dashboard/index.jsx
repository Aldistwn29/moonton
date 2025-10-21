import Authenticated from "@/Layouts/Authenticated/Index"
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";

export default function Dashboard({auth, feacturedMovies, movies}) {
    const ficityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Dashboard</title>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={ficityOptions}>
                    {feacturedMovies.map((feacturedMovie, index) => (
                        <FeaturedMovie
                            key={feacturedMovie.id}
                            slug={feacturedMovie.slug}
                            thumbnail={feacturedMovie.thumbnail}
                            name={feacturedMovie.name}
                            category={feacturedMovie.category}
                            rating={feacturedMovie.rating} 
                            />
                    ))}
                </Flickity>
            </div>
            {/* Star: Browser */}
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                {/* Movies 1 */}
                <Flickity Flickity className="gap-[30px]" options={ficityOptions}>
                    {movies.map((movie, index) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            thumbnail={movie.thumbnail}
                            name={movie.name}
                            category={movie.category} 
                        />
                    ))}
                </Flickity>
            </div>
            {/* End: Browser */}
        </Authenticated >
    );
}