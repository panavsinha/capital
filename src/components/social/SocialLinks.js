import React from 'react'

import { FaTelegram, FaLinkedin } from "react-icons/fa"


const SocialLinks = ({ tele, linkedin }) => {
    return (
        <div className="row social-links flex gap-4">
            <div className="fb text-xl border text-blue-600 border-blue-800 p-2 hover:text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer"><a href={`https://www.telegram.com/${tele}`} target='_blank'><FaTelegram /></a></div>
            <div className="linkedin text-xl border text-blue-800 border-blue-800 p-2 hover:text-white hover:bg-blue-800 transition-all duration-200 cursor-pointer"><a href={`https://www.linkedin.com/in/${linkedin}`} target='_blank'><FaLinkedin /></a></div>
        </div>
    )
}

export default SocialLinks