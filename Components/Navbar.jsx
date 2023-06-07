import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineShoppingCart } from 'react-icons/hi'

import { Cart } from "./Index"
import { useStateContext } from '@/Context/StateContext';

const Navbar = () => {
    const { ShowCart, setShowCart, TotalQuantities } = useStateContext()
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Project Cinni</Link>
            </p>

            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                <HiOutlineShoppingCart size={32} />
                <span className="cart-item-qty">{TotalQuantities}</span>
            </button>

            {ShowCart && <Cart />}
        </div>
    )
}

export default Navbar