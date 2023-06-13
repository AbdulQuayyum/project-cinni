import React from 'react'
import Link from 'next/link'

import MainLayout from '@/Layout/Main.Layout'

const OrderHistory = () => {
    return (
        <MainLayout>
            <div className='flex flex-col gap-y-2 px-4 sm:px-8 mt-10 w-full'>
                <span className='price'>Your Order History</span>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className=" px-2 sm:px-6 py-4">ID</th>
                            <th scope="col" className=" px-2 sm:px-6 py-4">Date</th>
                            <th scope="col" className=" px-2 sm:px-6 py-4">Total</th>
                            <th scope="col" className=" px-2 sm:px-6 py-4">Status</th>
                            <th scope="col" className=" px-2 sm:px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className=" px-2 sm:px-6 py-8">qwertyuiop</td>
                            <td className=" px-2 sm:px-6 py-8">	2023-06-13T01:58:56.766Z</td>
                            <td className=" px-2 sm:px-6 py-8">₦10</td>
                            <td className=" px-2 sm:px-6 py-8">Not Paid</td>
                            <td className=" px-2 sm:px-6 py-8">
                                <Link
                                    href={`Order/`}>
                                    <span
                                        className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                                        Details
                                    </span>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </MainLayout>
    )
}

export default OrderHistory