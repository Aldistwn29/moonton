import Authenticated from "@/Layouts/Authenticated/Index";
import Button from '@/Components/DangerButton';
import FlashMessage from "@/Components/FlashMessage";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();
    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Admin Monnton Dashboard" />
                <Link href={route('admin.dashboard.movie.create')}>
                    <Button
                        type="button" className="px-6 mb-8"
                        fullwidth={false}>
                        New Movie
                    </Button>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <img src={`/storage/${movie.thumbnail}`} alt="" className="rounded-md w-32" />
                                </td>
                                <td>
                                    {movie.name}
                                </td>
                                <td>
                                    {movie.category}
                                </td>
                                <td>
                                    {movie.rating.toFixed(1)}
                                </td>
                                <td>
                                    <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                        <Button type="button" variant="primary">Edit</Button>
                                    </Link>
                                </td>
                                <td>
                                    <div onClick={() => {
                                        movie.deleted_at ? put(route('admin.dashboard.movie.restore', movie.id)) :
                                            destroy(route('admin.dashboard.movie.destroy', movie.id));
                                    }}>
                                        <Button type="button" variant="danger">{movie.deleted_at ? 'Restore' : 'Delete'}</Button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </Authenticated>
        </>
    );
}