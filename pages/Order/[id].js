import React from 'react'

import MainLayout from '@/Layout/Main.Layout'

const OrderDetails = () => {

    const HandlePay = () => { }

    return (
        <MainLayout>
            <span className='price flex justify-center !mt-10 mb-4'>Order qwertyuiop</span>
            <div className='flex flex-col md:flex-row justify-around items-center md:items-start w-full'>
                <div className="my-4 gap-y-6 flex flex-col w-full max-w-xl">
                    <div className='flex flex-col gap-y-2 w-full py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                        <span className='text-[#aaa] font-bold text-lg'>Your Address:</span>
                        <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        <div className='flex'>
                            <span>Status:</span>
                            <span>Not Delivered</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                        <span className='text-[#aaa] font-bold text-lg'>Your preferred payment method</span>
                        <span> Lorem ipsum</span>
                        <div className='flex'>
                            <span>Status:</span>
                            <span>Not Paid</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full'>
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
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className=" px-2 sm:px-6 py-4">
                                        <img src={''} alt="..." className=" h-16 w-16 rounded-lg" />
                                    </td>
                                    <td className=" px-2 sm:px-6 py-4">lorem</td>
                                    <td className=" px-2 sm:px-6 py-4">1</td>
                                    <td className=" px-2 sm:px-6 py-4">₦10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex flex-col mt-4 justify-center max-w-xs w-full sm:justify-end'>
                    <div className='flex flex-col gap-y-2 w-full py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                        <span className='text-center font-bold'>Order summary</span>
                        <div className='flex justify-between'>
                            <span>Order cost:</span>
                            <span className="">₦10</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Additional charges:</span>
                            <span className="">₦1</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Total Cost:</span>
                            <span className="">₦1</span>
                        </div>
                        <button
                            onClick={HandlePay}
                            className='rounded-full border mt-10 border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            Pay now
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default OrderDetails