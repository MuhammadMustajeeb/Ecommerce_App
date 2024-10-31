import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {

    return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <div className='flex mb-2'><img src={assets.logo} className='h-[40px] w-[43px]' alt='' /><p className='font-abril text-[35px] text-black tracking-wide pt-4'>FASDEEM</p></div>
            <p className='w-full md:w-2/3 text-gray-600'>Uncover a curated collection of fashion crafted to reflect your unique style. Whether you seek the latest trends or timeless classics, we provide the pinnacle of design, quality, and personalized touches. Transform your wardrobe with ease and confidence today.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+92-3326242678</li>
                <li>contact@fasdeem.com</li>
            </ul>
        </div>

        <div>
            <hr />
            <p className='lg:flex items-center py-5 text-sm text-center'>Copyright 2024@ fasdeem.com - All Right Reserved.</p>
        </div>
    </div>

)
}

export default Footer
