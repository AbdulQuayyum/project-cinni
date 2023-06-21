import React, { useState } from 'react'
import { BsWindowSidebar } from 'react-icons/bs'
import { FaArrowLeftLong } from 'react-icons/fa'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true)

    const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-blue-700 rounded'
    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded'

    return (
        <div>
            <div>
                sidebar
                {/* {showSidebar ? <FaArrowLeftLong /> : <BsWindowSidebar />} */}
            </div>
        </div>
    )
}

export default Sidebar