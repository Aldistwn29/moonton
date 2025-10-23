import Authenticated from "@/Layouts/Authenticated/Index";
import Button from '@/Components/DangerButton';
import FlashMessage from "@/Components/FlashMessage";
import { Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage }) {
    return (
        <>
            <Authenticated auth={auth}>
                <Link href={route('admin.dashboard.movie.create')}>
                    <Button
                    className="w-32 py-10 px-15 h-30"
                    type="button">
                        New Movie
                    </Button>
                </Link>
                    {flashMessage?.message && (
                        <FlashMessage  message={flashMessage.message}/>
                        )}
            </Authenticated>
        </>
    );
}