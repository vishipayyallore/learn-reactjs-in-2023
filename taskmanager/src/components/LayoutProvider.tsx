'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Toaster position='top-center' reverseOrder={false} />
                {children}
            </body>
        </html>
    );
}

export default LayoutProvider;

