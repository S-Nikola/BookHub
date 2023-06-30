"use client"

import Image from 'next/image';
import { CustomButton } from '@/components';

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, borrow or buy a book - quickly and easily!
          </h1>

          <p className='hero__subtitle'>
            Streamline your book procurement experience effortlessly.
          </p>

          <CustomButton 
            title="Explore Books"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero-books.png" alt="hero-books" fill className='object-contain'/>
        </div>
        <div className='hero__image-overlay'></div>
        
      </div>
    </div>
  )
}

export default Hero