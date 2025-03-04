import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router'
import { TbMinus, TbPlus, TbChevronLeft } from 'react-icons/tb'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdDeleteOutline } from 'react-icons/md'

import UseAuthStore from '@/Store/AuthStore';
import { useStateContext } from '@/Context/StateContext';
import { UrlFor } from '@/Utilities/Client';

const Cart = () => {
    const cartRef = useRef();
    const router = useRouter();
    const [User, setUser] = useState()
    const { UserProfile } = UseAuthStore()
    const { TotalPrice, TotalQuantities, CartItems, setShowCart, ToggleCartItemQuantity, OnRemove } = useStateContext();

    useEffect(() => {
        setUser(UserProfile)
    }, [UserProfile])

    const HandleCheckout = async () => {
        if (!User) {
            // console.log(CartItems)
            toast.error('Login before checkout');
        } else {
            setShowCart(false)
            router.push('/Steps')
        }
    }

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading"
                    onClick={() => setShowCart(false)}>
                    <TbChevronLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({TotalQuantities} items)</span>
                </button>

                {CartItems.length < 1 && (
                    <div className="empty-cart">
                        <HiOutlineShoppingCart size={150} />
                        <h3>Your Cart is empty</h3>
                        <Link href="/">
                            <button
                                type="button"
                                onClick={() => setShowCart(false)}
                                className="btn"
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className="product-container">
                    {CartItems.length >= 1 && CartItems.map((item) => (
                        <div className="product" key={item._id}>
                            <img src={UrlFor(item?.Image[0])} className="cart-product-image" />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item?.Name}</h5>
                                    <h4>₦{item?.Price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <div className="quantity-desc">
                                            <span className="minus" onClick={() => ToggleCartItemQuantity(item._id, 'decrease')}>
                                                <TbMinus />
                                            </span>
                                            <span className="num">{item?.Quantity}</span>
                                            <span className="plus" onClick={() => ToggleCartItemQuantity(item._id, 'increase')}><TbPlus /></span>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-item"
                                        onClick={() => OnRemove(item)}
                                    >
                                        <MdDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {CartItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal:</h3>
                            <h3>₦{TotalPrice}</h3>
                        </div>
                        <div className="btn-container">
                            <button type="button" className="btn" onClick={HandleCheckout}>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart