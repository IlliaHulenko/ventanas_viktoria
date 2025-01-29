import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const links =[
    {href: 'https://www.facebook.com/', icon: <FaFacebook />},
    {href: 'https://www.twitter.com/', icon: <FaTwitter />},
    {href: 'https://www.instagram.com/', icon: <FaInstagram />}
]
const Footer = () => {
  return (
    <div id='footer' className='w-screen bg-gray-500 py-4 text-black'>
        <div 
            className='container mx-auto flex flex-col items-center justify-around gap-4 px-4 md:flex-row'
        >
            <p className='text-center text-sm md:text-left'>
                &copy; 2024 Ventana Viktoria. All rights reserved 
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='text-black transition-colors hover:text-white duration-500 ease-in-out'
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer