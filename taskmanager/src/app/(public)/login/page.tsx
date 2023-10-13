'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const isLoginButtonDisabled = () => {
        return !user.email || !user.password;
    };

    const onLogin = async () => {

        console.log('Logining user...', user);

        // const response = await fetch('http://localhost:3000/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user),
        // });

        // const data = await response.json();

        // if (data.status === 'ok') {
        //     console.log('User Logined successfully.');
        // } else {
        //     console.log('User registration failed.');
        // }
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
                    Login
                </button>

                <Link href='/register'>
                    Do not have an account? Register
                </Link>

            </div>
        </div>
    );
};

export default Login;
