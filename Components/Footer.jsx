import React from 'react'
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs"

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <div className='footer-container'>
            <span className="footer-copy dark:text-[#fff]">{currentYear} &#169; Project Cinni, All rights reserved</span>
            <div className='icons'>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="home-social-icon dark:text-[#fff]">
                    <BsTwitter />
                </a>
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="home-social-icon dark:text-[#fff]">
                    <BsLinkedin />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="home-social-icon dark:text-[#fff]">
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default Footer