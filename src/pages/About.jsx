import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          
          <b className='text-gray-800'>Our Mission</b>
          <p>We confidently empower self-expression through sustainable fashion that not only celebrates individuality but also drives meaningful change for our planet.</p>
          <p>At our core, we’re all about bringing you delightful, well-made pieces that reflect the latest trends while also fitting your unique style. We truly care about ethical sourcing and sustainable practices, and we’re excited to create designs that make you look great and feel even better!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Qualtiy Assurance:</b>
          <p className='text-gray-600'>We understand how important it is for you to feel confident in your style and choices. That’s why our dedicated quality assurance team takes the time to carefully inspect each piece, ensuring it meets our high standards of craftsmanship and durability. We want you to express your individuality with confidence, knowing that what you wear not only looks wonderful but also feels great. Join us in celebrating fashion that reflects your uniqueness and is made to last.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We understand that in today’s fast-paced world, finding the perfect balance between convenience and personal style can be challenging. That’s why our curated collection of contemporary fashion is designed with you in mind. We believe everyone deserves to look and feel their best, allowing you to express your unique style with confidence, no matter what life brings your way. Discover how we can help make looking good a little easier for you.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We understand that finding the right pieces to express your unique fashion sense can be a journey. That's why our dedicated team is here to support you every step of the way, ensuring that your shopping experience is both seamless and personalized. We're committed to helping you discover the perfect items that truly resonate with your style.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
