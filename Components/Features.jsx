import React from 'react'
import { ImHeadphones } from 'react-icons/im'
import { BsPatchCheck } from 'react-icons/bs'
import { IoRocketOutline } from 'react-icons/io5'

const Features = () => {
    return (
        <div className='flex w-full justify-around flex-wrap gap-8 text-[#aaa] mt-8'>
            <div className='flex border border-[#aaa] py-4 px-8 rounded-xl gap-x-6 items-center'>
                <div>
                    <IoRocketOutline size={40} />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <span className='font-bold'>Fast Delivery</span>
                    <span className='font-lighter'>Fast Delivery on all orders</span>
                </div>
            </div>
            <div className='flex border border-[#aaa] py-4 px-8 rounded-xl gap-x-6 items-center'>
                <div>
                    <BsPatchCheck size={40} />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <span className='font-bold'>100% Trust</span>
                    <span className='font-lighter'>Business & Customer Trust</span>
                </div>
            </div>
            <div className='flex border border-[#aaa] py-4 px-8 rounded-xl gap-x-6 items-center'>
                <div>
                    <ImHeadphones size={40} />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <span className='font-bold'>Customer Support</span>
                    <span className='font-lighter'>24/7 Customer services</span>
                </div>
            </div>
        </div>
    )
}

export default Features