import React from 'react'
import Head from 'next/head';

import SideInfo from '@/Components/SideInfo/SideInfo'

const StepsLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-3 auth-layout">
            <Head>
                <title>Project Cinni - Your Online Service Assistant</title>
                <meta
                    name="description"
                    content="Your Online Service Assistant"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/logo.png" />
            </Head>
            <div className='z-40 flex items-center transition-all side-info duration-1000'>
                <SideInfo />
            </div>
            <div className='z-40 flex text-[#aaa] col-span-2 transition-all duration-1000 onboard'>
                {children}
            </div>
        </div>
    )
}

export default StepsLayout