import React from 'react';
import Head from 'next/head';

import { Footer, Navbar } from "../Components/Index"

const MainLayout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Project Cinni - Your Online Service Assistant</title>
                <meta
                    name="description"
                    content="Your Online Service Assistant"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/logo.png" />
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MainLayout