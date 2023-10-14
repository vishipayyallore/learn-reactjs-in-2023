'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {

    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const isRegisterButtonDisabled = () => {
        return !user.username || !user.email || !user.password;
    };

    const onRegister = async () => {

        try {
            console.log('Registering user...', user);

            setLoading(true);

            const response = await axios.post('api/users/register', user);

            console.log('User registration response:', response.data, response.status);

            if (response.status === 200) {
                console.log('User registered successfully.');
                toast.success('User registered successfully.');
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
                    Register
                </h1>
                <hr></hr>

                <div className='flex flex-col'>
                    <label htmlFor='username' className='text-sm'>Username</label>
                    <input type='text' id='username' name='username' value={user.username}
                        onChange={(e) => { setUser({ ...user, username: e.target.value }); }} />
                </div>

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

                <button onClick={onRegister} className={`bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ${isRegisterButtonDisabled() ? 'btn-disabled' : ''}`}>
                    {loading ? "Registering ...." : "Register"}
                </button>

                <Link href='/login'>
                    Already have an account? Login
                </Link>

            </div>
        </div>
    );
};

export default Register;
