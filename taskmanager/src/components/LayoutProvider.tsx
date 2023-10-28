'use client';

import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '@/redux/usersSlice';
import toast from 'react-hot-toast';
import Spinner from './Spinner';
import { setLoading } from '@/redux/loadersSlice';
import { useRouter } from 'next/navigation';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {

    const { currentUser } = useSelector((state: any) => state.users);
    const { isLoading } = useSelector((state: any) => state.loaders);

    const pathname = usePathname();
    const router = useRouter();
    const isPublicRoutes = pathname === '/login' || pathname === '/register';
    const dispatch = useDispatch();

    const fetchUser = async () => {
        try {
            dispatch(setLoading(true));

            const { data } = await axios.get('/api/users/currentuser');
            // console.log('fetchUser : ', data.data);

            dispatch(setCurrentUser(data.data));
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    const onLogout = async () => {
        try {
            dispatch(setLoading(true));

            const { data } = await axios.post('/api/users/logout');
            console.log('onLogout : ', data.data);

            dispatch(setCurrentUser(null));

            router.push('/login');
            toast.success('Logout successfully');
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (!isPublicRoutes) {
            fetchUser();
        }
    }, [pathname]);

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                {
                    isLoading &&
                    (
                        <Spinner />
                    )
                }

                <Toaster position='top-center' reverseOrder={false} />

                {
                    !isPublicRoutes ?
                        (
                            <>
                                <div className="bg-primary text-white p-3 flex items-center justify-between rounded-b">
                                    <h1 className='text-xl font-semibold hover:text-green-200 cursor-pointer' onClick={() => router.push('/')}>Task Manager</h1>

                                    <div className="flex gap-4 items-center">
                                        <h1 className='underline cursor-pointer'>{currentUser?.username}</h1>
                                        <i className="ri-logout-box-r-line p-2 cursor-pointer text-white" onClick={onLogout}></i>
                                    </div>
                                </div>
                                <div className='flex p-4 mx-10 border border-primary rounded-sm mt-4 mb-4'>
                                    {children}
                                </div>
                            </>
                        )
                        :
                        (
                            <div>
                                {children}
                            </div>
                        )
                }
            </body>
        </html>
    );
}

export default LayoutProvider;

