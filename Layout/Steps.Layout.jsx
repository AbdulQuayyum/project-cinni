import React from 'react'
import Head from 'next/head';

import SideInfo from '@/Components/SideInfo/SideInfo'
import BackToTop from '@/Components/BackToTop';

const StepsLayout = ({ children, Title }) => {
    return (
        <>
            <Head>
                <title>{Title ? `Project Cinni || ${Title}` : 'Project Cinni'}</title>
                <meta
                    name="description"
                    content="Your Online Service Assistant"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/logo.png" />
            </Head>
            <div className="grid grid-cols-3 m-auto overflow-hidden h-[100vh] auth-layout">
                <div className='z-40 h-[100vh] overflow-hidden xl:hover:overflow-auto flex pt-40 transition-all side-info duration-1000'>
                    <SideInfo />
                </div>
                <div className='z-40 mt-4 flex text-[#aaa] flex-col gap-10 overflow-auto h-[88vh] col-span-2 transition-all duration-1000 onboard flex-1'>
                    {children}
                </div>
                <BackToTop />
            </div>
        </>
    )
}

export default StepsLayout