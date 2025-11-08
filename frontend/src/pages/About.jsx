import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2x1 text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
  <div className='my-10 flex flex-col md:flex-row gap-16'>
    <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" /> 
    <div className='flex flex-col justify-center gap-6 md:w-2/4  text-gray-600'>
      <p>Welcome to <b>FORVER</b>, your number one source for the best Clothing. We're dedicated to giving you the very best of clothes, with a focus on high quality, exceptional customer service, and unique products. Founded in 2025 by <b>Sanni Singh</b>, Forever has come a long way from its beginnings in a Noida. When Sanni first started out, his passion for "helping busy parents find stylish kids' clothes" drove him to start an online store so that forever can offer you customize clothing. We now serve customers all over NCR, and are thrilled to be a part of the  fashion  wing of the e-commerce industry.</p>
      <p>For the brand Forever, the narrative is built around the idea of timelessness, endurance, and quality that defies fleeting trends. The clothes are designed to be staples, pieces you can rely on and incorporate into your wardrobe for the long run, rather than discarding after a single season. The collection focuses on high-quality materials and classic silhouettes, ensuring each garment is both durable and versatile.</p>
      <b className=' text-gray-800'>Our Mission</b>
      <p>The mission of Forever is to create lasting value through timeless design, exceptional quality, and responsible practices. The brand is committed to providing versatile and durable pieces that empower individuals to build a conscious wardrobe, celebrating personal style over fleeting trends. By focusing on thoughtful production and enduring craftsmanship, the brand aims to inspire a move away from disposable fashion and toward a more meaningful, sustainable approach to getting dressed.</p>
    </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>At Forever, our commitment to quality assurance is the cornerstone of our brand promise, ensuring that every garment is an investment in lasting style and comfort. This dedication begins at the initial design phase, where we meticulously select premium materials for their durability, feel, and ethical sourcing, rejecting anything that doesn't meet our strict criteria.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Convinence</b>
        <p className='text-gray-600'>For Forever, convenience is seamlessly woven into the experience of building a timeless wardrobe. This begins with the versatility of the pieces, which are designed to be effortlessly mixed and matched, minimizing the need for multiple, trend-driven purchases. Convenience also extends to the ease of online shopping, where a user-friendly digital platform provides clear, detailed product information and a secure, hassle-free checkout process.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Exceptional customer service</b>
        <p className='text-gray-600'>For Forever, exceptional customer service is a core brand value, not just a function. The goal is to build lasting relationships with customers by providing attentive, empathetic, and personalized support that reflects the brand's timeless quality. This commitment is evident across every touchpoint, from browsing to post-purchase, ensuring a seamless and satisfying experience</p>
      </div>

    </div>
    <NewsLetterBox/>
    </div>
  )
}

export default About
