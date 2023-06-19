import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { GetError } from '@/Utilities/Error';
import MainLayout from '@/Layout/Main.Layout'
import UseAuthStore from '@/Store/AuthStore';

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, Orders: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
    }
}

function OrderHistory() {
    const { UserProfile } = UseAuthStore()
    const [{ Loading, Error, Orders }, dispatch] = useReducer(reducer, { Loading: true, Orders: [], Error: '', });
    const router = useRouter();

    useEffect(() => {
        if (!UserProfile) {
            router.push('/')
        }
        const FetchOrder = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get('/api/Orders/History', {
                    params: {
                        UserID: UserProfile._id
                    }
                })
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: GetError(err) });
            }
        }
        FetchOrder()
    }, [router, UserProfile])

    const PositiveBtn = 'rounded-full font-extrabold bg-[#90EE90] py-[2px] px-[8px] text-[10px] text-[#013220]'
    const NegativeBtn = 'rounded-full font-extrabold bg-[#FFCCCB] py-[2px] px-[8px] text-[10px] text-[#8B0000]'

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
                        {Orders &&
                            Orders.map((item) => (
                                <tr key={item?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className=" px-2 sm:px-6 py-8">{item?._id}</td>
                                    <td className=" px-2 sm:px-6 py-8">{item?.CreatedAt}</td>
                                    <td className=" px-2 sm:px-6 py-8">₦{item?.TotalCost}</td>
                                    <td className=" px-2 sm:px-6 py-8">
                                        <span className={item?.IsPaid ? PositiveBtn : NegativeBtn}>
                                            {item?.IsPaid ? `Paid at ${item?.PaidAt}` : 'Not Paid'}
                                        </span>
                                    </td>
                                    <td className=" px-2 sm:px-6 py-8">
                                        <Link
                                            href={`Order/${item?._id}`}>
                                            <span
                                                className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                                                Details
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    )
}

export default dynamic(() => Promise.resolve(OrderHistory), { ssr: false });