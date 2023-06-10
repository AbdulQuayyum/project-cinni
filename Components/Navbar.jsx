import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

import { Cart } from "./Index"
import { CreateOrGetUser } from '@/Utilities/CreateOrGetUser';
import { useStateContext } from '@/Context/StateContext';
import UseAuthStore from '@/Store/AuthStore';

const Navbar = () => {
    const [User, setUser] = useState()
    const { ShowCart, setShowCart, TotalQuantities } = useStateContext()
    const [searchValue, setSearchValue] = useState('')
    const { UserProfile, AddUser, RemoveUser } = UseAuthStore()

    useEffect(() => {
        setUser(UserProfile)
    }, [UserProfile])

    const HandleSearch = (e) => {
        e.preventDefault()

        if (searchValue) {
            router.push(`/Search/${searchValue}`)
        }
    }

    return (
        <div className="navbar-container">
            <div className='logo'>
                <Link className='price' href="/">Project Cinni</Link>
            </div>
            <div className="relative hidden md:block">
                <form
                    onSubmit={HandleSearch}
                    className="absolute bg-white md:static top-10 -left-20"
                >
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0"
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
            <div className='flex items-center gap-x-4'>
                <div>
                    {User ? (
                        <div className="flex items-center gap-5 md:gap-10">
                            {User.Image && (
                                // <Link href={`/Profile/${User._id}`}>
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
                                // </Link>
                            )}
                            {/* <button
                                type="button"
                                className="p-3 border-2 rounded-full shadow-md outline-none cursor-pointer "
                                onClick={() => {
                                    googleLogout()
                                    RemoveUser()
                                    localStorage.clear()
                                }}
                            >
                                <AiOutlineLogout color="red" fontSize={21} />
                            </button> */}
                        </div>
                    ) : (
                        <GoogleLogin
                            onSuccess={response => { CreateOrGetUser(response, AddUser) }}
                            onError={() => { toast.error('Try again') }}
                            shape="circle"
                            size="large"
                            text="continue_with"
                            theme="filled_black"
                        />
                    )}
                </div>
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                    <HiOutlineShoppingCart size={32} />
                    <span className="cart-item-qty">{TotalQuantities}</span>
                </button>

                {ShowCart && <Cart />}
            </div>
        </div>
    )
}

export default Navbar