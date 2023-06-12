import React, { useState, useEffect } from 'react'

export default function Payment(props) {
    const [value, setValue] = useState('')
    const { nextStep } = props;

    const HandleSelect = (e) => {
        const newValue = e.target.value
        e.preventDefault()
        setValue(newValue)
    }

    const HandleNext = (e) => {
        e.preventDefault()
        nextStep()
    }

    const options = [
        { label: "Online Payment", value: "online" },
        { label: "Cash Payment", value: "cash" }
    ]

    return (
        <div className='flex flex-col w-full text-start items-center'>
            <div className="my-4">
                <span className='price'>Choose a payment method.</span>
            </div>
            <ul className='flex items-start flex-col w-full gap-y-4 my-6'>
                {options.map((option) => (
                    <li key={option.value} className="flex cursor-pointer">
                        <input
                            // id="online"
                            type="radio"
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) => HandleSelect(e)}
                            name="payment-method"
                            className="w-6 h-6 cursor-pointer bg-white accent-black border-gray-300 outline-none" />
                        <label
                            htmlFor="payment-method"
                            className="ml-2 text-base sm:text-lg cursor-pointer font-medium text-black dark:text-gray-300">
                            {option.label}
                        </label>
                    </li>
                ))}
            </ul>
            <div className='flex mt-10 justify-center sm:justify-end'>
                <button
                    onClick={HandleNext}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Continue
                </button>
            </div>
        </div>
    )
}
