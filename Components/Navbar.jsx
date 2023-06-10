import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

import { Cart } from "./Index"
import { useStateContext } from '@/Context/StateContext';
import UseAuthStore from '@/Store/AuthStore';

const Navbar = () => {
    const { ShowCart, setShowCart, TotalQuantities } = useStateContext()
    const [searchValue, setSearchValue] = useState('')
    const { UserProfile, AddUser, RemoveUser } = UseAuthStore()

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
            <div>
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