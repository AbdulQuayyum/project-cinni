import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import UseAuthStore from '@/Store/AuthStore';

function Information(props) {
    const router = useRouter();
    const { UserProfile } = UseAuthStore()
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [landmark, setLandmark] = useState('')
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (!UserProfile) {
            router.push('/')
        }
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

        // console.log(UserAddressData)

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

    const checkFormValidity = () => {
        if (address && landmark && phone && address.trim() !== '' && landmark.trim() !== '' && phone.trim() !== '') {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };

    useEffect(() => {
        checkFormValidity()
        UpdateInfoData()
    }, [address, phone, landmark])

    const { nextStep } = props;
    const HandleNext = (e) => {
        e.preventDefault()
        nextStep();
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <form className='pt-8 px-4 sm:pt-20 flex flex-col items-center w-full' onSubmit={HandleSubmit}>
            <div className="my-4 flex justify-start max-w-xl w-full">
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
                        className="p-2 w-full text-base rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none focus:bg-none bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
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
                        className="p-2 w-full text-base rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none focus:bg-none bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
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
                        className="p-2 w-full text-base rounded-xl transition-all duration-500 border-2 border-gray-200 outline-none focus:bg-none bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>

            </div>
            <div className='flex mt-10 max-w-xl w-full justify-end'>
                <button
                    disabled={!formValid}
                    onClick={HandleNext}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'>
                    Continue
                </button>
            </div>
        </form>
    )
}

export default dynamic(() => Promise.resolve(Information), { ssr: false });