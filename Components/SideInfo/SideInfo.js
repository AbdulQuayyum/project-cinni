import React from "react";
import Link from 'next/link';
import Slider from "./Slider";
import { GoPrimitiveDot } from "react-icons/go"
const SideInfo = () => {

    return (
        <div className="flex flex-col lg:px-10 md:px-10 xl:px-20 justify-between">
            <div className="flex flex-col text-left">
                <div className="flex pb-20 pl-2">
                    <Link href="/">
                        <span className='price'>Project Cinni</span>
                    </Link>
                </div>
                <div>
                    <Slider />
                </div>
            </div>
            <ul className='flex flex-row justify-center pb-10 mt-10 gap-x-8'>
                <li className="flex items-center text-sm text-[#aaa]"><GoPrimitiveDot className="mr-1" /> Privacy Policy </li>
                <li className="flex items-center text-sm text-[#aaa]"><GoPrimitiveDot className="mr-1" /> Terms & Conditions</li>
            </ul>
        </div>
    );
};

export default SideInfo;
