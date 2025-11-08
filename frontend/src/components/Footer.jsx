import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
return (
    <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    <div>
                            <img className='mb-5 w-32' src={assets.logo} alt="" />
                            <p className='w-full md:w-2/3 text-gray-600'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                    </div>
                    <div>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivry</li>
                            <li>Privacy Policy</li>

                        </ul>
                    </div>
                    <div>
                        <p  className='text-xl font-medium mb-5'>Get In Touch</p>
                        <ul className='flex flex-col gap-1 text-gray-600' >
                            <li>+91202-304-2333</li>
                            <li>contact@foreverforyou@gmail.com</li>
                        </ul>

                    </div>
            </div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright2025 @forever.com - All RIGHT RESERVED.</p>
    </div>
)
}

export default Footer
