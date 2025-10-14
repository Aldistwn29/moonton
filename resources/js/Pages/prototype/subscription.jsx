import Authenticated from "@/Layouts/Authenticated/Index";
import SubpscriptionCard from "@/Components/Subsctiption";

export default function Subscription() {
    return <Authenticated>
        <div className="flex flex-col items-center py-20">
            <div className="text-black font-semibold text-[26px] mb-3">
                Pricing For Everyone
            </div>
            <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                Invest your little money to get a whole new exprience from movies.
            </p>
            {/* pricing card */}
            <div className="flex justify-center gap-10 mt-[70px]">
                {/* basic */}
                <SubpscriptionCard 
                    name="Besic"
                    price="300.000"
                    durationInMonth="3"
                    features={["Lorem Ifsum Sit Dolat Amet 1", "Lorem Ifsum Sit Dolat Amet 2", "Lorem Ifsum Sit Dolat Amet 3"]}
                    />
                {/* Premium */}
                <SubpscriptionCard 
                    isPremium
                    name="Premium"
                    price="800.000"
                    durationInMonth="3"
                    features={["Lorem ifsum sit dolar amet 1", "Lorem ifsum sit dolar amet 2", "Lorem ifsum sit dolar amet 3"]}/>
            </div>
            {/* END: For Greatest */}
        </div>
    </Authenticated>;
}