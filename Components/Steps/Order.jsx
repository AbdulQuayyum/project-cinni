import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getCookie, deleteCookie } from 'cookies-next';

import { SendEmail } from '@/pages/api/Email';
import UseAuthStore from '@/Store/AuthStore';
import { useStateContext } from '@/Context/StateContext'
import { UrlFor } from '@/Utilities/Client'

function Order(props) {
    const { UserProfile } = UseAuthStore()
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const { Charges, TotalPrice, TotalCost, TotalQuantities, CartItems, ClearCart } = useStateContext()
    const { Name, Quantity, Image, Price } = CartItems

    const UserAddress = getCookie('123456', { maxAge: 60 * 60 * 24 * 7 });
    const UserPaymentMethod = getCookie('7890', { maxAge: 60 * 60 * 24 * 7 });

    const NewAddress = UserAddress ? JSON.parse(UserAddress) : null;
    const NewPayment = UserPaymentMethod ? JSON.parse(UserPaymentMethod) : null;

    const HandleOrder = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post(
                '/api/Orders', {
                Charges: Charges,
                TotalPrice: TotalPrice,
                TotalCost: TotalCost,
                PaymentMethod: NewPayment.value,
                ShippingAddress: {
                    Address: NewAddress.address,
                    Landmark: NewAddress.landmark,
                    Phone: NewAddress.phone,
                },
                OrderItems: CartItems,
                UserName: UserProfile?.UserName,
                User: {
                    _type: 'reference',
                    _ref: UserProfile._id,
                },
            }, {
                headers: {
                    Authorization: `Bearer ${UserProfile.token}`
                },
            }
            )
            const formattedCartItems = CartItems.map(item => {
                return {
                    Name: item.Name,
                    Quantity: item.Quantity,
                    Price: item.Price
                };
            });
            await SendEmail({
                Charges: Charges,
                TotalPrice: TotalPrice,
                TotalCost: TotalCost,
                PaymentMethod: NewPayment.value,
                Address: NewAddress.address,
                Landmark: NewAddress.landmark,
                Phone: NewAddress.phone,
                Order: JSON.stringify(formattedCartItems),
                UserName: UserProfile?.UserName,
                UserEmail: UserProfile?.Email,
            })
            setLoading(false)
            // ClearCart()
            // deleteCookie('123456', { maxAge: 60 * 60 * 24 * 7 });
            // deleteCookie('7890', { maxAge: 60 * 60 * 24 * 7 });
            // deleteCookie('QAZWSX', { maxAge: 60 * 60 * 24 * 7 });
            // deleteCookie('UJMIK', { maxAge: 60 * 60 * 24 * 7 });
            // deleteCookie('EDCRFV', { maxAge: 60 * 60 * 24 * 7 });
            // deleteCookie('TGBYHN', { maxAge: 60 * 60 * 24 * 7 });
            // deleteCookie('PLMOKN', { maxAge: 60 * 60 * 24 * 7 });
            // router.push(`/Order/${data?.OrderID}`)
            // setTimeout(() => {
            //     router.push(`/Order/${data}`)
            // }, 3000);
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An error occurred');
                console.log(error)
            }
        }
    }

    useEffect(() => {
        if (!UserProfile) {
            router.push('/')
        }
        if (NewAddress === "") {
            props.goToStep(1)
        } if (NewPayment === "") {
            props.goToStep(2)
        } if (!CartItems) {
            router.push('/')
        }
    }, [])

    return (
        <div className='flex flex-col items-center w-full px-4 pt-8 sm:pt-20'>
            <div className="flex flex-col w-full max-w-xl my-4 gap-y-6">
                <span className='price'>Confirm your order.</span>
                <div className='flex flex-col w-auto px-4 py-2 mx-2 border border-gray-200 rounded-lg gap-y-2 sm:w-full sm:py-6 sm:px-6'>
                    <span className='text-[#aaa] font-bold text-lg'>Your Address:</span>
                    <span className='capitalize '>{NewAddress?.address || ""}</span>
                    <span className='text-[#aaa] font-bold text-lg'>Major Landmark near your address:</span>
                    <span className='capitalize '>{NewAddress?.landmark || ""}</span>
                    <span className='text-[#aaa] font-bold text-lg'>Your Contact Number:</span>
                    <span className='capitalize '>{NewAddress?.phone || ""}</span>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => props.goToStep(1)}
                            className='px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            edit
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-auto px-4 py-2 mx-2 border border-gray-200 rounded-lg gap-y-2 sm:w-full sm:py-6 sm:px-6'>
                    <span className='text-[#aaa] font-bold text-lg'>Your preferred payment method</span>
                    <span className='capitalize '>{NewPayment?.value || ""}</span>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => props.goToStep(2)}
                            className='px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            edit
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-auto mx-2 gap-y-2 sm:w-full'>
                    <span className='text-[#aaa] font-bold text-lg'>Your Order</span>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-2 py-4 sm:px-6">Image</th>
                                <th scope="col" className="px-2 py-4 sm:px-6">Name</th>
                                <th scope="col" className="px-2 py-4 sm:px-6">Quantity</th>
                                <th scope="col" className="px-2 py-4 sm:px-6">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CartItems.length >= 1 && CartItems.map((item) => (
                                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-2 py-4 sm:px-6">
                                        <img src={UrlFor(item?.Image[0])} className="w-16 h-16 rounded-lg " />
                                    </td>
                                    <td className="px-2 py-4 sm:px-6">{item?.Name}</td>
                                    <td className="px-2 py-4 sm:px-6">{item?.Quantity}</td>
                                    <td className="px-2 py-4 sm:px-6">₦{item?.Price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col w-auto px-4 py-2 mx-2 border border-gray-200 rounded-lg gap-y-2 sm:w-full sm:py-6 sm:px-6'>
                    <span className='text-lg font-bold'>Order summary</span>
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
                    <div className='flex justify-between'>
                        <span>Total Cost:</span>
                        <span className="">₦{TotalCost || ""}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full max-w-xl my-10'>
                <button
                    onClick={HandleOrder}
                    className='px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Place Order
                </button>
            </div>
        </div>
    )
}
export default dynamic(() => Promise.resolve(Order), { ssr: false });