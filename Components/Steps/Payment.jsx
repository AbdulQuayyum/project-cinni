import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Select from 'react-select'

import UseAuthStore from '@/Store/AuthStore';

function Payment(props) {
    const { UserProfile } = UseAuthStore()
    const [value, setValue] = useState('')
    const [formValid, setFormValid] = useState(false);
    const { nextStep } = props;

    const options = [
        { label: "Online Payment", value: "online" },
        { label: "Cash Payment", value: "cash" }
    ]

    useEffect(() => {
        if (!UserProfile) {
            router.push('/')
        }
        // Fetch cart data from the server-side
        fetch('/api/Payment')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.UserPaymentMethod);
                setValue(data?.UserPaymentMethod?.value)
            })
            .catch((error) => {
                console.error('Failed to fetch user data', error);
            });
    }, []);

    const UpdateInfoData = () => {
        const UserPaymentMethodData = {
            UserPaymentMethod: { value }
        }

        fetch('/api/Payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UserPaymentMethodData),
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
        if (value && value.trim() !== '') {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };

    useEffect(() => {
        checkFormValidity()
        UpdateInfoData()
    }, [value])

    const HandleSelect = (value) => {
        setValue(value?.value || '')
    }

    const HandleNext = (e) => {
        e.preventDefault()
        nextStep()
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            width: '100%',
            background: 'transparent',
            borderColor: "#aaa",
            borderRadius: "12px",
            minHeight: '48px',
            padding: "0px 10px"
        })
    };

    return (
        <div className='pt-8 sm:pt-20 flex flex-col items-center w-full'>
            <div className="my-4 flex justify-start max-w-xl w-full">
                <span className='price'>Choose a payment method.</span>
            </div>
            <div className='flex items-start flex-col max-w-xl w-full gap-y-4 my-6'>
                <Select
                    value={options.find((option) => option.value === value)}
                    // value={value}
                    options={options}
                    styles={customStyles}
                    onChange={HandleSelect}
                    className='w-full focus:bg-[#aaa]'
                    placeholder="Slect a payment method"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: '#D3D3D3',
                            primary: '#aaa',
                        },
                    })}

                // getOptionLabel={(options) => options.label}
                // getOptionValue={(options) => options.value}
                />
            </div>
            <div className='flex max-w-xl mt-10 w-full justify-end'>
                <button
                    disabled={!formValid}
                    onClick={HandleNext}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Payment), { ssr: false });