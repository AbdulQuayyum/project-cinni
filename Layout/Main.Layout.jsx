import React from 'react';
import Head from 'next/head';

import { BackToTop, Footer, Navbar, Sidebar } from "@/Components/Index"

const MainLayout = ({ children, Title }) => {
    return (
        <div className="layout">
            <Head>
                <title>{Title ? `Project Cinni || ${Title}` : 'Project Cinni'}</title>
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
            <div className="flex gap-6">
                <div className="h-[90vh] overflow-hidden lg:hover:overflow-auto">
                    <Sidebar />
                </div>
                <main className="overflow-auto h-[88vh] flex-1 main-container">
                    {children}
                </main>
            </div>
            <footer>
                <Footer />
                <BackToTop />
            </footer>
        </div>
    )
}

export default MainLayout