import React from 'react'

const StepsLayout = ({children}) => {
    return (
        <div className='z-40 flex col-span-2 transition-all duration-1000 bg-white onboard'>
            {children}
        </div>
    )
}

export default StepsLayout