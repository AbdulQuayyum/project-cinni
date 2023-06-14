import React, { useState, useEffect } from 'react'

// import UseAuthStore from '@/Store/AuthStore';
// import UseInfoStore from '@/Store/InfoStore';

export default function Information(props) {
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [landmark, setLandmark] = useState()

    useEffect(() => {
        // Fetch cart data from the server-side
        fetch('/api/Information')
            .then((response) => response.json())
            .then((data) => {
                const { UserAddress } = data;
                setAddress(UserAddress?.address)
                setPhone(UserAddress?.phone);
                setLandmark(UserAddress?.landmark);
            })
            .catch((error) => {
                console.error('Failed to fetch user data', error);
            });
    }, []);

    const UpdateInfoData = () => {
        const UserAddressData = {
            UserAddress: { address, phone, landmark }
        }

        console.log(UserAddressData)

        fetch('/api/Information', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UserAddressData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
            })
            .catch((error) => {
                console.error('Failed to save user data', error);
            });
    }

    useEffect(() => {
        UpdateInfoData()
    }, [address, phone, landmark])

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
                        onChange={e => setPhone(e.target.value)}
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
