import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi'

import UseAuthStore from '@/Store/AuthStore';
import UseInfoStore from '@/Store/InfoStore';

export default function Information(props) {
    const [fullName, setFullName] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhoneNumber] = useState()
    const [landmark, setLandmark] = useState()
    const [User, setUser] = useState()
    const { UserProfile } = UseAuthStore()
    const { AddUserAddress, AddUserFullName, AddUserLandmark, AddUserPhone } = UseInfoStore()

    useEffect(() => {
        setUser(UserProfile.UserName)
    }, [])

    useEffect(() => {
        AddUserFullName(User ? User : fullName)
        AddUserAddress(address)
        AddUserLandmark(landmark)
        AddUserPhone(phone)
    }, [address, landmark, phone, fullName])

    const { nextStep } = props;
    const HandleNext = () => { nextStep() }

    const HandleSubmit = () => { }

    return (
        <form onSubmit={HandleSubmit}>
            <div className='flex flex-col items-center'>
                <div className='mt-6  flex flex-col gap-y-4'>
                    <label className='price' htmlFor="fullName">Full Name</label>
                    <input
                        name='fullName'
                        type="text"
                        value={User}
                        onChange={e => setUser(e.target.value)}
                        placeholder="Your Full Name"
                        className="p-2 text-lg w-[250px] md:w-[700px] lg:w-[450px]  rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='mt-6  flex flex-col gap-y-4'>
                    <label className='price' htmlFor="address">Address</label>
                    <input
                        name='address'
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder="Your Full Address or Hostel Name and Room Number"
                        className="p-2 text-lg w-[250px] md:w-[700px] lg:w-[450px]  rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='mt-6  flex flex-col gap-y-4'>
                    <label className='price' htmlFor="landmark">Landmark</label>
                    <input
                        name='landmark'
                        type="text"
                        value={landmark}
                        onChange={e => setLandmark(e.target.value)}
                        placeholder="A landmark near your location"
                        className="p-2 text-lg w-[250px] md:w-[700px] lg:w-[450px]  rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='mt-6  flex flex-col gap-y-4'>
                    <label className='price' htmlFor="phoneNumber">Phone Number</label>
                    <input
                        name='phoneNumber'
                        type="tel"
                        maxLength={11}
                        minLength="11"
                        value={phone}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="Your Contact Number"
                        className="p-2 text-lg w-[250px] md:w-[700px] lg:w-[450px]  rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>

            </div>
            <div className='flex mt-10 justify-center'>
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
