import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { GetError } from '@/Utilities/Error';
import UseAuthStore from '@/Store/AuthStore';
import MainLayout from '@/Layout/Main.Layout'
import { UrlFor } from '@/Utilities/Client';

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, Order: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
    }
}

function OrderDetails({ params }) {
    const { id: OrderID } = params
    const { UserProfile } = UseAuthStore()
    const [{ Loading, Error, Order }, dispatch] = useReducer(reducer, { Loading: true, Order: {}, Error: '', });
    const router = useRouter();
    const {
        ShippingAddress,
        PaymentMethod,
        OrderItems,
        TotalPrice,
        TotalCost,
        Charges,
        IsPaid,
        PaidAt,
        IsDelivered,
        DeliveredAt,
    } = Order;

    useEffect(() => {
        if (!UserProfile) {
            return router.push('/')
        }
        const FetchOrder = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`/api/Orders/${OrderID}`)
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: GetError(err) });
            }
        }
        FetchOrder()
    }, [Order, OrderID, router, UserProfile])

    const PositiveBtn = 'rounded-full bolder bg-[#90EE90] py-[2px] px-[8px] text-[10px] text-[#013220]'
    const NegativeBtn = 'rounded-full bolder bg-[#FFCCCB] py-[2px] px-[8px] text-[10px] text-[#8B0000]'

    const HandlePay = () => { }

    return (
        <MainLayout>
            <span className='price flex justify-center text-center mx-4 !mt-10 mb-4'>Order {OrderID}</span>
            <div className='flex flex-col gap-x-8 md:flex-row justify-around items-center md:items-start w-full'>
                <div className="my-4 gap-y-6 flex flex-col w-full max-w-xl">
                    <div className='flex flex-col gap-y-2 w-full py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                        <span className='text-[#aaa] font-bold text-lg'>Your Address:</span>
                        <span>{ShippingAddress?.Address}</span>
                        <div className='items-center flex gap-x-1'>
                            <span>Status:</span>
                            <span className={IsDelivered ? PositiveBtn : NegativeBtn}>{IsDelivered ? `Delivered At ${DeliveredAt}` : 'Not Delivered'}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 w-full py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                        <span className='text-[#aaa] font-bold text-lg'>Your Preferred Payment Method</span>
                        <span className=' capitalize' >{PaymentMethod}</span>
                        <div className='items-center flex gap-x-1'>
                            <span>Status:</span>
                            <span className={IsPaid ? PositiveBtn : NegativeBtn}>{IsPaid ? `Paid at ${PaidAt}` : 'Not Paid'}</span>
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
                                {OrderItems &&
                                    OrderItems.map((item) => (
                                        <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className=" px-2 sm:px-6 py-4">
                                                <img src={UrlFor(item?.Image[0])} alt="..." className=" h-16 w-16 rounded-lg" />
                                            </td>
                                            <td className=" px-2 sm:px-6 py-4">
                                                <Link href={`/Product/${item?.Slug}`}>
                                                    {item?.Name}
                                                </Link>
                                            </td>
                                            <td className=" px-2 sm:px-6 py-4">{item?.Quantity}</td>
                                            <td className=" px-2 sm:px-6 py-4">₦{item?.Price}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex flex-col mt-4 justify-center max-w-none md:max-w-xs w-full sm:justify-end'>
                    <div className='flex flex-col gap-y-2 w-full py-2 sm:py-6 px-4 sm:px-6 border border-gray-200 rounded-lg'>
                        <span className='text-center font-bold'>Order summary</span>
                        <div className='flex justify-between'>
                            <span>Order cost:</span>
                            <span className="">₦{TotalPrice}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Additional charges:</span>
                            <span className="">₦{Charges}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Total Cost:</span>
                            <span className="">₦{TotalCost}</span>
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
export function getServerSideProps({ params }) {
    return { props: { params } };
}

export default dynamic(() => Promise.resolve(OrderDetails), { ssr: false });