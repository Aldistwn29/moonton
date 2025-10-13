import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/DangerButton";
import { Link, Head } from "@inertiajs/react";

export default function Login() {
    return (
        <>
        <Head title='Sign Up' />
        <div className="min-h-screen px-3 mx-auto text-white bg-black max-w-screen md:px-10">
            <div className="fixed top-[50px] hidden lg:block">
                <img
                    src="/assets/images/signup-image.png"
                    alt="image-signup"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[500px]"
                />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img
                        src="/assets/images/moonton-white.svg"
                        alt="logo-moonton"
                    />
                    <div className="my-[50px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]">
                        <div>
                            <InputLabel htmlFor="email" value="Email Address" />
                            <TextInput id="email" type="email" name="email" placholder="Enter your email address" />
                        </div>
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput id="password" type="password" name="password" placholder="Enter your password"/>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <Link href={route('prototype.dashboard')}>
                            <Button type="submit">
                                <span className="text-base text-white">
                                    Sign In
                                </span>
                            </Button>
                            </Link>
                            <Link href={route('prototype.register')}>
                                <Button type="button" variant="white-outline">
                                <span className="text-base text-white">
                                    Create New Account
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
