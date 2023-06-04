import React from 'react';
import Head from 'next/head';

import { Footer, Navbar } from "../Components/Index"

const MainLayout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Project Cinni</title>
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