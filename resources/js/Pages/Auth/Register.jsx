import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from "@/Components/TextInput";
import Button from "@/Components/DangerButton";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        // post(route('register'));
        // console.log(data);
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    }
    return (
        <>
            <GuestLayout>
                <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your fullname..."
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange = {(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2"/>
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email Address" />
                                    <TextInput
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        type="email"
                                        placeholder="Your Email Address..."
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange = {(e) => setData('email', e.target.value)}
                                        required
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-2"/>
                                <div>
                                    <InputLabel htmlFor="Password" value="Password" />
                                    <TextInput
                                        id="password"
                                        name="password"
                                        value={data.password}
                                        type="password"
                                        placeholder="Your password..."
                                        autoComplete="new-password"
                                        isFocused={true}
                                        onChange = {(e) => setData('password', e.target.value)}
                                        required
                                    />
                                </div>
                                {/* <InputError errors={errors} /> */}
                                <InputError message={errors.password} className="mt-2"/>
                                 <div>
                                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                    <TextInput
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        type="password"
                                        placeholder="Your password..."
                                        autoComplete="new-password"
                                        isFocused={true}
                                        onChange = {(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                </div>
                                <InputError errors={errors}/>
                                <InputError message={errors.password_confirmation} className="mt-2"/>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                    <Button type='submit' disabled={processing}> 
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                    </Button>
                                <Link  href={route('login')}>
                                    <Button variant='light-outline' type="submit">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
            </GuestLayout>
        </>
    );
}
