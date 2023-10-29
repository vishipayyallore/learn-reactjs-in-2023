import React from "react";

const RootLayout = ({ children }) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>React SSR</title>
        </head>
        <body>
            <div>
                <div className="container">
                    {children}
                </div>
            </div>
        </body>
    </html>
);

export default RootLayout;
