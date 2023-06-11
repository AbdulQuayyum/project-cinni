import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi'

export default function Address(props) {
    const [fullName, setFullName] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhoneNumber] = useState()
    const [landmark, setLandmark] = useState()

    const { nextStep } = props;
    const HandleNext = () => { nextStep() }

    const HandleSubmit = () => { }

    return (
        <form onSubmit={HandleSubmit}>
            <div className='flex flex-col items-center'>
                <div className='my-6 flex flex-col gap-y-4'>
                    <label className='price' htmlFor="">Full Name</label>
                    <input
                        type="text"
                        // value={firstAmount}
                        // onChange={e => setFirstAmount(e.target.value)}
                        placeholder="Your Full Name"
                        className="p-2 text-lg w-[250px] md:w-[700px] lg:w-[450px]  rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='my-6 flex flex-col gap-y-4'>
                    <label className='price' htmlFor="">Address</label>
                    <input
                        type="text"
                        // value={firstAmount}
                        // onChange={e => setFirstAmount(e.target.value)}
                        placeholder="Your Full Address or Hostel Name and Room Number"
                        className="p-2 text-lg w-[250px] md:w-[700px] lg:w-[450px]  rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='my-6 flex flex-col gap-y-4'>
                    <label className='price' htmlFor="">Phone Number</label>
                    <input
                        type="tel"
                        maxLength={11}
                        minLength="11"
                        // value={firstAmount}
                        // onChange={e => setFirstAmount(e.target.value)}
                        placeholder="Your Contact Number"
                        className="p-2 text-lg w-[250px] md:w-[700px] lg:w-[450px]  rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>

            </div>
            <div className='flex justify-center'>
                <Link
                    onClick={HandleNext}
                    href="/"
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Continue
                </Link>
            </div>
        </form>
    )
}
