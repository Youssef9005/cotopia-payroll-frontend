"use client";

import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import axios from 'axios';
import { setToken } from '@/src/lib/set-token';
import { Eye, EyeClosed } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LoginFormValues {
    username: string;
    password: string;
}

function LoginForm() {
    const router = useRouter();
    const passwordInput = useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const initialValues: LoginFormValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    async function handleSubmit(values: LoginFormValues) {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                username: values.username,
                password: values.password,
            });
            const data = response.data;

            console.log(`Login Successfully:`, data);
            toast.success("Login successful! Welcome to Cotopia Payroll.");

            setToken(data.data.token);

            const userData = JSON.stringify({
                name: data.data.name,
                userName: data.data.username,
                userEmail: data.data.email,
                startWork: data.data.workspace["created_at"],
                userProfile: data.data.avatar.url,
            })

            localStorage.setItem("user-data", userData);
            await router.push('/dashboard');

        } catch (err) {
            console.error(`Login Failed:`, err);
            toast.error("Login failed. Please check your username and password.");
        }
    }

    function handleShowPassword() {
        setShowPassword(prevState => !prevState);
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md w-1/2">
                <h1 className="text-2xl font-bold mb-4 text-center text-white">Login</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>

                            <div className="mb-4">
                                <label className="block text-gray-300" htmlFor="username">Username:</label>
                                <Field
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="outline-none mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white transition duration-200 ease-in-out hover:border-blue-400 hover:bg-gray-600"
                                />
                                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                            </div>


                            <div className="mb-4">
                                <label className="block text-gray-300" htmlFor="password">Password:</label>
                                <div className='flex items-center w-full gap-x-3'>
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        ref={passwordInput}
                                        className="outline-none mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white transition duration-200 ease-in-out hover:border-blue-400 hover:bg-gray-600"
                                    />
                                    <div onClick={handleShowPassword}>
                                        {showPassword ? <Eye color='white' /> : <EyeClosed color='white' />}
                                    </div>
                                </div>
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            </div>

                            <button type="submit" className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700">Login</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default LoginForm;
