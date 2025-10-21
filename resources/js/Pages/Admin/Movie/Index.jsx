import Authenticated from "@/Layouts/Authenticated/Index";
import Button from '@/Components/DangerButton';
import { Link } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <>
            <Authenticated auth={auth}>
                <Link href={route('admin.dashboard.movie.create')}>
                    <Button
                    className="w-32 py-10 px-15 h-30 "
                    type="button">
                        New Movie
                    </Button>
                </Link>
            </Authenticated>
        </>
    )
}