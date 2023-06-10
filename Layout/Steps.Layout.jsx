import React from 'react'
import SideInfo from '@/Components/SideInfo/SideInfo'

const StepsLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-3 auth-layout">
            <div className='z-40 flex items-center bg-[#00626A] transition-all side-info duration-1000'>
                <SideInfo />
            </div>
            <div className='z-40 flex col-span-2 transition-all duration-1000 onboard'>
                {children}
            </div>
        </div>
    )
}

export default StepsLayout