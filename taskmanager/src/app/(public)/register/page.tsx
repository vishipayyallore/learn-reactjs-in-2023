'use client';

import React, { useState } from 'react';

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    return (
        <div className='bg-primary flex flex-col justify-center items-center h-screen'>
            <div className="flex flex-col gap-5 bg-white p-5 w-[500px] shadow-sm rounded-sm text-blue-800">
                <h1 className='text-2xl font-bold p-5 uppercase'>
                    Register
                </h1>
                <hr></hr>

                <div className='flex flex-col'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' value={user.username}
                        onChange={(e) => { setUser({ ...user, username: e.target.value }); }} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }); }} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }); }} />
                </div>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Register
                </button>

            </div>
        </div>
    );
};

export default Register;
