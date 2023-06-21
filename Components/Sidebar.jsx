import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RxDashboard } from 'react-icons/rx'
import { BsWindowSidebar } from 'react-icons/bs'
import { TbChevronsLeft } from 'react-icons/tb'
import { LuLayoutList } from 'react-icons/lu'

const Sidebar = () => {
    const { pathname } = useRouter()
    const [showSidebar, setShowSidebar] = useState(true)

    const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#aaa] rounded'
    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded'

    return (
        <div className='h-full'>
            <div
                className="block m-2 ml-4 mt-3 text-xl"
                onClick={() => setShowSidebar(!showSidebar)}>
                {showSidebar ? <TbChevronsLeft /> : <BsWindowSidebar />}
            </div>
            {showSidebar && (
                <div className="lg:w-52 w-12 flex flex-col h-full justify-between mb-0 sm:mb-10 p-3 ">
                    <div className='flex flex-col items-start'>
                        <Link href="/">
                            <div className={pathname === '/' ? activeLink : normalLink}>
                                <p className="text-2xl">
                                    <RxDashboard />
                                </p>
                                <span className="capitalize text-xl hidden lg:block">
                                    Home
                                </span>
                            </div>
                        </Link>
                        <Link href="/OrderHistory">
                            <div className={pathname === '/' ? activeLink : normalLink}>
                                <p className="text-2xl">
                                    <LuLayoutList />
                                </p>
                                <span className="capitalize text-xl hidden lg:block">
                                    Transactions
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar