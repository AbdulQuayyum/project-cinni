import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast';
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

import { Cart } from "./Index"
import { CreateOrGetUser } from '@/Utilities/CreateOrGetUser';
import { useStateContext } from '@/Context/StateContext';
import UseAuthStore from '@/Store/AuthStore';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
    const router = useRouter();
    const [User, setUser] = useState()
    const [toggleMenu, setToggleMenu] = useState(false);
    const { ShowCart, setShowCart, TotalQuantities } = useStateContext()
    const [searchValue, setSearchValue] = useState('')
    const { UserProfile, AddUser, RemoveUser } = UseAuthStore()

    useEffect(() => {
        setUser(UserProfile)
    }, [UserProfile])

    const HandleSearch = (e) => {
        e.preventDefault()

        if (searchValue) {
            router.push(`/Search/?Query=${searchValue}`)
        }
    }

    return (
        <div className="flex-wrap items-center justify-between px-4 py-2 navbar-container">
            <div className='flex items-center logo gap-x-4 navbar-1'>
                <Link className='price' href="/">Project Cinni</Link>
                {/* {User ? (
                    <div className='flex gap-x-4'>
                        <Link className='price hover:text-[#000]' href="/Products">All Products</Link>
                        <Link className='price hover:text-[#000]' href="/OrderHistory">Order History</Link>
                    </div>
                ) : (<> </>)} */}
            </div>
            <div className='flex items-center justify-end gap-2 navbar-3 lg:order-2 gap-x-4'>
                <div>
                    {User ? (
                        <div className="flex items-center gap-2">
                            {User.Image && (
                                <div>
                                    <Image
                                        className="rounded-full cursor-pointer"
                                        src={User.Image}
                                        alt="User"
                                        width={40}
                                        height={40}
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            )}
                            <button
                                type="button"
                                className="p-3 border-2 rounded-full shadow-md outline-none cursor-pointer "
                                onClick={() => {
                                    googleLogout()
                                    RemoveUser()
                                    localStorage.clear()
                                    router.push('/')
                                }}
                            >
                                <AiOutlineLogout color="red" fontSize={20} />
                            </button>
                        </div>
                    ) : (
                        <GoogleLogin
                            onSuccess={response => { CreateOrGetUser(response, AddUser) }}
                            onError={() => { toast.error('Try again') }}
                            shape="circle"
                            size="large"
                            type= "icon"
                            text="continue_with"
                            theme="filled_black"
                        />
                    )}
                </div>
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                    <HiOutlineShoppingCart size={32} />
                    <span className="cart-item-qty">{TotalQuantities}</span>
                </button>
                {User ? (
                    <div className="">
                        {toggleMenu
                            ? <RiCloseLine className='cursor-pointer' color="#aaa" size={32} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line className='cursor-pointer' color="#aaa" size={32} onClick={() => setToggleMenu(true)} />}
                        {toggleMenu && (
                            <>
                                <div className='navbar-menu-container scale-up-center'>
                                    <Link className='text-[#aaa] font-extrabold text-base hover:text-[#000]' href="/Products">All Products</Link>
                                    <Link className='text-[#aaa] font-extrabold text-base hover:text-[#000]' href="/OrderHistory">Order History</Link>
                                </div>
                            </>
                        )}
                    </div>
                ) : (<> </>)}
                {ShowCart && <Cart />}
            </div>
            <div className="relative justify-center w-full mt-6 navbar-2 lg:mt-0 lg:order-1 lg:w-auto lg:py-0">
                <form
                    onSubmit={HandleSearch}
                    className="bg-transparent top-10 -left-20"
                >
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-full lg:w-[350px] rounded-full  md:top-0"
                        placeholder="Search for product"
                    />
                    <button
                        onClick={HandleSearch}
                        className="absolute pl-4 text-2xl text-gray-400 border-l-2 border-gray-300 md:right-5 right-6 top-4"
                    >
                        <BiSearch />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Navbar