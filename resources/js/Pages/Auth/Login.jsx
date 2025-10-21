import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/DangerButton";
import { Link, Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password')
        });
    }
    return (
        <>
            <GuestLayout>
                <Head title="Log In" />
                <form className="w-[370px]" onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            placholder="Enter your email address"
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="password"
                            value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            placholder="Enter your password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        <Button type="submit" processing={processing}>
                            <span className="text-base text-white">
                                Sign In
                            </span>
                        </Button>
                        <Link href={route('register')}>
                            <Button type="button" variant="white-outline">
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                            </Button>
                        </Link>
                        <div>
                            {canResetPassword && (
                                <Link href={route('password.request')}
                                    className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <Button type="submit" processing={processing} variant="white-outline">
                                        <span className="text-base text-white">
                                            Forget Your Password
                                        </span>
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </form>
            </GuestLayout>
        </>
    );
}
