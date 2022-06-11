import React, { useState } from 'react';
import Link from 'next/link';
// import ArrowIcon from '../../icons/LoginIcon';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN, SET_UID } from '../../store/auth/authSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const { email, password } = form;

    const handleOnChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            if (user) {
                dispatch(SET_LOGIN(true));
                dispatch(SET_UID(user?.uid));
                router.push('/');
                toast.success(
                    `Login Success, welcome ${auth?.currentUser?.displayName}`
                );
            }
        } catch (error) {
            console.log(error);
            toast.error('Login Failed');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="container flex flex-col bg-gray-300 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Login to your account
                </div>

                <div className="mt-10">
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-5">
                            <label
                                htmlFor="username"
                                className="mb-1 text-sx tracking-wide text-gray-700"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"></div>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Enter your email/username"
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label
                                htmlFor="password"
                                className="mb-1 text-sx tracking-wide text-gray-700"
                            >
                                password
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"></div>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Enter your password"
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button
                                type="sumbit"
                                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
                            >
                                <span className="mr-2 uppercase">sign in</span>

                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <div className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                    <span className="ml-2">
                        Dont have an account?
                        <Link
                            href="/register"
                            className="text-xs ml-2 text-blue-500 font-semibold"
                        >
                            Register now
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;