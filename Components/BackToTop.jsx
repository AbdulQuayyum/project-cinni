import React from 'react'
import { TbArrowBigUpLines } from "react-icons/tb"

const BackToTop = () => {
    if (typeof window === "object") {
        //This code is executed in the browser
        window.addEventListener("scroll", function () {
            const backToTop = document.querySelector(".back-to-top")
            if (this.scrollY >= 560) backToTop.classList.add("show-back-to-top")
            else backToTop.classList.remove("show-back-to-top")
        })
    }
    return (
        <a href="#" className='back-to-top dark:bg-[#fff] dark:hover:bg-gray-200'>
            < TbArrowBigUpLines className='back-to-top-icon dark:text-[#354358] dark:hover:text-gray-500' />
        </a>
    )
}

export default BackToTop