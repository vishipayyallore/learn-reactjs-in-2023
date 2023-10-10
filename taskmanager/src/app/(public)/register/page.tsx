import React from 'react';

const Register = () => {
    return (
        <div className='bg-primary flex flex-col justify-center items-center h-screen'>
            <div className="flex flex-col gap-5 bg-white p-5 w-[500px] shadow-sm rounded-sm">
                <h1 className='text-2xl font-bold p-5 uppercase'>
                    Register
                </h1>
                <hr></hr>

                <div className='flex flex-col'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' />
                </div>
            </div>
        </div>
    );
};

export default Register;
