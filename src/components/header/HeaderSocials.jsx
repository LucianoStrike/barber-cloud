import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="htpps://linkedin.com" target="_blank"> <BsLinkedin /> </a>
            <a href="htpps://github.com" target="_blank"> <FaGithub /> </a>
            <a href="htpps://facebook.com" target="_blank"> <FiFacebook /> </a>
        </div>
    )
}

export default HeaderSocials
