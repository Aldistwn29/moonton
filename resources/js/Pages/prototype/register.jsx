import InputLabel from '@/Components/InputLabel';
import TextInput from "@/Components/TextInput";
import Button from "@/Components/DangerButton";
import { Link, Head } from '@inertiajs/react';

export default function Register() {
    return (
        <>
            <Head title='Sign Up' />
            <div className="min-h-screen px-3 mx-auto text-white bg-black max-w-screen md:px-10">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/assets/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt="signup"
                    />
                </div>

                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/assets/images/moonton-white.svg" alt="logo" />

                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>

                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel htmlFor="fullname" value="Full Name" />
                                    <TextInput
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        defaultValue="Angga React"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email Address" />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        defaultValue="anggaforreact@fb.com"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="Password" value="Password" />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        defaultValue="password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Link href={route('prototype.dashboard')}>
                                    <Button>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                    </Button>
                                </Link>
                                <Link href={route('prototype.login')}>
                                    <Button variant='light-outline'>
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
