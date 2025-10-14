import Authenticated from "@/Layouts/Authenticated/Index"
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
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
        <Authenticated>
            <Head>
                <title>Dashboard</title>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={ficityOptions}>
                    {[1, 2, 3, 4].map(i => (
                        <FeaturedMovie
                            key={i}
                            slug="the-batman-in-love"
                            thumbnail="/assets/images/featured-1.png"
                            name={`The Batman in Love ${i}`}
                            category="Action"
                            rating={i + 1} />
                    ))}
                </Flickity>
            </div>
            {/* Star: Browser */}
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                {/* Movies 1 */}
                <Flickity Flickity className="gap-[30px]" options={ficityOptions}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <MovieCard
                            key={i}
                            slug="the-golden-meong"
                            thumbnail="/assets/images/browse-2.png"
                            name="The Golden Meaong"
                            category="Humor" />
                    ))}
                </Flickity>
            </div>
            {/* End: Browser */}
        </Authenticated >
    );
}