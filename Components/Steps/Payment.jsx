import React, { useState, useEffect } from 'react'

export default function Payment(props) {
    const [value, setValue] = useState('')
    const { nextStep } = props;

    const options = [
        { label: "Online Payment", value: "online" },
        { label: "Cash Payment", value: "cash" }
    ]

    const HandleSelect = (e) => {
        const newValue = e.target.value
        e.preventDefault()
        setValue(newValue)
    }

    const HandleNext = (e) => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div className='pt-8 sm:pt-20 flex flex-col items-center w-full'>
            <div className="my-4 flex justify-start max-w-xl w-full">
                <span className='price'>Choose a payment method.</span>
            </div>
            <ul className='flex items-start flex-col max-w-xl w-full gap-y-4 my-6'>
                {options.map((option) => (
                    <li key={option.value} className="flex cursor-pointer">
                        <input
                            type="radio"
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) => HandleSelect(e)}
                            name="payment-method"
                            className="w-6 h-6 cursor-pointer bg-white accent-black border-gray-300 outline-none" />
                        <label
                            htmlFor="payment-method"
                            className="ml-2 text-base sm:text-lg cursor-pointer font-medium text-[#aaa] dark:text-gray-300">
                            {option.label}
                        </label>
                    </li>
                ))}
            </ul>
            <div className='flex max-w-xl w-full justify-end'>
                <button
                    onClick={HandleNext}
                    className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                    Continue
                </button>
            </div>
        </div>
    )
}
