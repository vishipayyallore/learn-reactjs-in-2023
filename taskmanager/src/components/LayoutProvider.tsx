'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname();
    const isPublicRoutes = pathname === '/login' || pathname === '/register';

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Toaster position='top-center' reverseOrder={false} />

                <div className="bg-primary text-white p-3 flex items-center justify-between rounded-b">
                    <h1 className='text-xl font-semibold'>Task Manager</h1>

                    <div className="flex gap-4 items-center">
                        <h1 className='underline cursor-pointer'>User Name</h1>
                        <i className="ri-logout-box-r-line p-2 cursor-pointer text-white"></i>
                    </div>
                </div>

                {
                    isPublicRoutes ?
                        (
                            <div>
                                {children}
                            </div>
                        )
                        :
                        (
                            <div className='h-[80vh] flex p-4 mx-10 border border-primary rounded-sm mt-4'>
                                {children}
                            </div>
                        )
                }
            </body>
        </html>
    );
}

export default LayoutProvider;

