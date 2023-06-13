import React from 'react'

export default function Order() {
    const HandleOrder = () => { }

    return (
        <div className='pt-8 sm:pt-20 flex items-center w-full'>
            <div className="my-4">
                <span className='price'>Confirm your order.</span>
                <div className='flex flex-col gap-y-2 w-full'>
                    <span>Your Address</span>
                    <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                    <span>Your preferred payment method</span>
                    <span> Lorem ipsum</span>
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                    <span>Your Order</span>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-4">Image</th>
                                <th scope="col" className="px-6 py-4">Name</th>
                                <th scope="col" className="px-6 py-4">Quantity</th>
                                <th scope="col" className="px-6 py-4">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='flex mt-10 justify-center max-w-xl w-full sm:justify-end'>
                <span>Order summary</span>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-4">Items:</th>
                            <th scope="col" className="px-6 py-4">Additional Charges:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={HandleOrder}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Continue
                </button>
            </div>
        </div>
    )
}
