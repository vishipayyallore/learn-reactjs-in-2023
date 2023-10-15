'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const isLoginButtonDisabled = () => {
        return !user.email || !user.password;
    };

    const onLogin = async () => {

        try {
            console.log('Logining user...', user);
            setLoading(true);

            const response = await axios.post('api/users/login', user);

            console.log('User Login response:', response.data, response.status);

            if (response.status === 200) {
                console.log('User Logged In successfully.');
                toast.success('User Logged In successfully.');

                router.push('/');
            }
        } catch (error: any) {
            console.log(error.response.data.message || error.message);
            toast.error(error.response.data.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-primary flex flex-col justify-center items-center h-screen'>
            <div className="flex flex-col gap-5 bg-white p-5 w-[500px] shadow-sm rounded-sm text-blue-800">
                <h1 className='text-2xl font-bold p-5 uppercase'>
                    Login
                </h1>
                <hr></hr>

                <div className='flex flex-col'>
                    <label htmlFor='email' className='text-sm'>Email</label>
                    <input type='email' id='email' name='email' value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }); }} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='password' className='text-sm'>Password</label>
                    <input type='password' id='password' name='password' value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }); }} />
                </div>

                <button onClick={onLogin} className={`bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ${isLoginButtonDisabled() ? 'btn-disabled' : ''}`}>
                    {loading ? 'Signing in ...' : 'Login'}
                </button>

                <Link href='/register'>
                    Do not have an account? Register
                </Link>

            </div>
        </div>
    );
};

export default Login;
