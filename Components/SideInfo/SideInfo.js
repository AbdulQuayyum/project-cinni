import React from "react";
import Slider from "./Slider";
import { GoPrimitiveDot } from "react-icons/go"
const SideInfo = () => {

    return (
        <div className="flex flex-col justify-between lg:px-10 md:px-10 xl:px-20">
            <div className="flex pt-40 pb-20 pl-2">
            <span className='price'>Project Cinni</span>
            </div>
            <div>
                <Slider />
            </div>
            <ul className='flex flex-row pb-10 mt-10 gap-x-8'>
                <li className="flex items-center text-sm text-white "><GoPrimitiveDot className="mr-1" /> Privacy Policy </li>
                <li className="flex items-center text-sm text-white "><GoPrimitiveDot className="mr-1" /> Terms & Conditions</li>
            </ul>
        </div>
    );
};

export default SideInfo;
