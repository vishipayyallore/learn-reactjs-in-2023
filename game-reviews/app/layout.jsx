import React from "react";

const RootLayout = ({ children }) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>Indie Gamer - Reviews</title>
        </head>
        <body suppressHydrationWarning={true}>
            <header>
                [header]
            </header>
            <main>
                {children}
            </main>
            <footer>
                [footer]
            </footer>
        </body>
    </html>
);

export default RootLayout;
