import React, { useState, useEffect } from 'react'

// import UseAuthStore from '@/Store/AuthStore';
import UseInfoStore from '@/Store/InfoStore';

export default function Information(props) {
    const { AddInfo } = UseInfoStore()
    const [address, setAddress] = useState(AddInfo ? AddInfo?.Address : "")
    const [phone, setPhoneNumber] = useState(AddInfo ? AddInfo?.Phone : "")
    const [landmark, setLandmark] = useState(AddInfo ? AddInfo?.Landmark : "")
    // const [User, setUser] = useState()
    // const { UserProfile } = UseAuthStore()

    // useEffect(() => {
    //     setUser(UserProfile.UserName)
    // }, [])


    useEffect(() => {
        const CartInfo = {
            Address: address,
            Landmark: landmark,
            Phone: phone,
        }

        AddInfo(CartInfo)
    }, [address, landmark, phone])

    const { nextStep } = props;
    const HandleNext = (e) => {
        e.preventDefault()
        nextStep()
    }

    const HandleSubmit = () => { }

    return (
        <form className='pt-8 sm:pt-20 flex flex-col items-center w-full' onSubmit={HandleSubmit}>
            <div className="my-4">
                <span className='price'>Fill your information.</span>
            </div>
            <div className='flex flex-col items-center max-w-xl w-full gap-y-6'>
                <div className='flex flex-col gap-y-2 w-full'>
                    <label className='text-[#aaa] font-bold text-lg' htmlFor="address">Address</label>
                    <input
                        name='address'
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder="Your Full Address or Hostel Name and Room Number"
                        className="p-2 w-full text-lg rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                    <label className='text-[#aaa] font-bold text-lg' htmlFor="landmark">Landmark</label>
                    <input
                        name='landmark'
                        type="text"
                        value={landmark}
                        onChange={e => setLandmark(e.target.value)}
                        placeholder="A landmark near your location"
                        className="p-2 w-full text-lg rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                    <label className='text-[#aaa] font-bold text-lg' htmlFor="phoneNumber">Phone Number</label>
                    <input
                        name='phoneNumber'
                        type="tel"
                        maxLength={11}
                        minLength="11"
                        value={phone}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="Your Contact Number"
                        className="p-2 w-full text-lg rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>

            </div>
            <div className='flex mt-10 justify-center max-w-xl w-full sm:justify-end'>
                <button
                    onClick={HandleNext}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Continue
                </button>
            </div>
        </form>
    )
}
