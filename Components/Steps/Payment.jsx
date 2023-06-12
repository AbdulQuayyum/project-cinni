import React, { useState, useEffect } from 'react'

export default function Payment(props) {
    const [online, setOnline] = useState()
    const [cash, setCash] = useState()

    const { nextStep } = props;
    const HandleNext = (e) => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div className='flex flex-col items-center'>
            <div className="flex items-center mb-4">
                <input
                    id="online"
                    type="radio"
                    value={online}
                    name="online"
                    className="w-6 h-6 cursor-pointer bg-white accent-black border-gray-300 outline-none" />
                <label
                    htmlFor="online"
                    className="ml-2 text-base sm:text-lg cursor-pointer font-medium text-black dark:text-gray-300">
                    Online Payment
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input
                    id="cash"
                    type="radio"
                    value={cash}
                    name="cash"
                    className="w-6 h-6 cursor-pointer bg-white accent-black border-gray-300 outline-none" />
                <label
                    htmlFor="cash"
                    className="ml-2 text-base sm:text-lg cursor-pointer font-medium text-black dark:text-gray-300">
                    Cash Payment
                </label>
            </div>
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
