'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function ReduxProvider({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Provider store={store}>
                    {children}
                </Provider>
            </body>
        </html>
    )
}