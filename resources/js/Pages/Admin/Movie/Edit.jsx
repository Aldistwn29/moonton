import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index";
import Button from '@/Components/DangerButton';
import Checkbox from "@/Components/Checkbox";
import { Head, router, useForm } from "@inertiajs/react";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file" ? event.target.files[0] : event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        // remove thumbnail if not change
        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }
        router.post(route('admin.dashboard.movie.update', movie.id),{
            _method:'PUT',
            ...data,
        });
    }

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl font-poppins">Update a movie {movie.name}</h1>
            <hr className="mb-4" />
            <form onSubmit={submit} className="w-[600px]">
                <div className="flex flex-col gap-6">
                    <div className="mt-4">
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            defaultValue={movie.name}
                            variant="primary-outline"
                            onChange={onHandleChange}
                            placeholder="Enter your name movie"
                        />
                        <InputError message={errors.name} className="mt-4" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="category" value="Category" />
                        <TextInput
                            type="text"
                            name="category"
                            defaultValue={movie.category}
                            variant="primary-outline"
                            isFocused={true}
                            onChange={onHandleChange}
                            placeholder="Enter your category"
                        />
                        <InputError message={errors.category} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="video_url" value="Vidio_url" />
                        <TextInput
                            type="url"
                            name="video_url"
                            defaultValue={movie.video_url}
                            variant="primary-outline"
                            isFocused={true}
                            onChange={onHandleChange}
                            placeholder="Enter your video_url"
                        />
                        <InputError message={errors.video_url} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="thumbnail" value="Thumbnail" />
                        <img src={`/storage/${movie.thumbnail}`} alt="" className="w-60" />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            isFocused={true}
                            onChange={onHandleChange}
                            placeholder="Insert your thumbnail"
                        />
                        <InputError message={errors.thumbnail} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="rating" value="Rating" />
                        <TextInput
                            type="number"
                            name="rating"
                            defaultValue={movie.rating}
                            variant="primary-outline"
                            isFocused={true}
                            onChange={onHandleChange}
                            placeholder="Insert your rating"
                        />
                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        <InputLabel
                            htmlFor="is_featured"
                            value="Is Featured"
                            className="mt-1 mr-3"
                        />
                        <Checkbox
                            name="is_featured"
                            checked={movie.is_featured}
                            onChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                        />
                    </div>
                    <Button type="submit" className="mt-4" processing={processing}>Save</Button>
                </div>
            </form>
        </Authenticated>
    );
}