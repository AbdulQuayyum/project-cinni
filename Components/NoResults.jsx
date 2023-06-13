import React from 'react'
import { TbError404 } from 'react-icons/tb'

const NoResults = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-8xl">
                <TbError404 />
            </p>
            <p className="text-2xl text-center">{text}</p>
        </div>
    )
}

export default NoResults
