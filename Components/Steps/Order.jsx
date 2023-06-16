import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

import { useStateContext } from '@/Context/StateContext'
import { UrlFor } from '@/Utilities/Client'

export default function Order(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const { Charges, TotalPrice, TotalQuantities, CartItems } = useStateContext()

    const UserAddress = getCookie('123456', { maxAge: 60 * 60 * 24 * 7 });
    const UserPaymentMethod = getCookie('7890', { maxAge: 60 * 60 * 24 * 7 });

    const NewAddress = UserAddress ? JSON.parse(UserAddress) : null;
    const NewPayment = UserPaymentMethod ? JSON.parse(UserPaymentMethod) : null;
    // console.log(NewPayment)

    const HandleOrder = async () => {
        try {
            setLoading(true);
        } catch (error) {
            setLoading(false);
            toast.error(error)
        }
    }

    useEffect(() => {
        if (NewAddress === "") {
            props.goToStep(1)
        } if (NewPayment === "") {
            props.goToStep(2)
        }
    }, [])

    return (
        <div className='pt-8 sm:pt-20 flex flex-col items-center w-full'>
            <div className="my-4 gap-y-6 flex flex-col w-full max-w-xl">
                <span className='price'>Confirm your order.</span>
                <div className='flex flex-col gap-y-2 w-auto sm:w-full mx-2 py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                    <span className='text-[#aaa] font-bold text-lg'>Your Address:</span>
                    <span className=' capitalize'>{NewAddress?.address || ""}</span>
                    <span className='text-[#aaa] font-bold text-lg'>Major Landmark near your address:</span>
                    <span className=' capitalize'>{NewAddress?.landmark || ""}</span>
                    <span className='text-[#aaa] font-bold text-lg'>Your Contact Number:</span>
                    <span className=' capitalize'>{NewAddress?.phone || ""}</span>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => props.goToStep(1)}
                            className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            edit
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 w-auto sm:w-full mx-2 py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                    <span className='text-[#aaa] font-bold text-lg'>Your preferred payment method</span>
                    <span className=' capitalize'>{NewPayment?.value || ""}</span>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => props.goToStep(2)}
                            className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            edit
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 w-auto sm:w-full mx-2'>
                    <span className='text-[#aaa] font-bold text-lg'>Your Order</span>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className=" px-2 sm:px-6 py-4">Image</th>
                                <th scope="col" className=" px-2 sm:px-6 py-4">Name</th>
                                <th scope="col" className=" px-2 sm:px-6 py-4">Quantity</th>
                                <th scope="col" className=" px-2 sm:px-6 py-4">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CartItems.length >= 1 && CartItems.map((item) => (
                                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className=" px-2 sm:px-6 py-4">
                                        <img src={UrlFor(item?.Image[0])} className=" h-16 w-16 rounded-lg" />
                                    </td>
                                    <td className=" px-2 sm:px-6 py-4">{item?.Name}</td>
                                    <td className=" px-2 sm:px-6 py-4">{item?.Quantity}</td>
                                    <td className=" px-2 sm:px-6 py-4">₦{item?.Price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col gap-y-2 w-auto sm:w-full mx-2 py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                    <span className='font-bold text-lg'>Order summary</span>
                    <div className='flex justify-between'>
                        <span>Order Quantity:</span>
                        <span className="">{TotalQuantities || ""}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Order cost:</span>
                        <span className="">₦{TotalPrice || ""}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Additional charges:</span>
                        <span className="">₦{Charges || ""}</span>
                    </div>
                </div>
            </div>
            <div className='flex my-10 flex-col max-w-xl w-full'>
                <button
                    onClick={HandleOrder}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Place Order
                </button>
            </div>
        </div>
    )
}
