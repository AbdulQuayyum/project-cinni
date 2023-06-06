import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineShoppingCart } from 'react-icons/hi'

import { Cart } from "./Index"

const Navbar = () => {
    const [showCart, setShowCart] = useState()
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Project Cinni</Link>
            </p>

            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                <HiOutlineShoppingCart size={32} />
                <span className="cart-item-qty">1</span>
            </button>
        </div>
    )
}

export default Navbar