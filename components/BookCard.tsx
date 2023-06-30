"use client";

import { useState } from 'react';
import Image from 'next/image';
import { BookProps } from '@/types';
import CustomButton from './CustomButton';
import BookDetails from './BookDetails';

interface BookCardProps {
  book: BookProps
}

const BookCard = ({ book }: BookCardProps) => {
  const { authors, title, language, book_type, copyright, summary, max_age } = book;

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='book-card group'>
      <div className='book-card__content'>
        <h2 className='book-card__content-title'>
          {title}
        </h2>
        <h4>by {authors}</h4>
      </div>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src="/hero-books.png" alt='Book Image' fill priority className='object-contain'></Image>
      </div>
      
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <span className='text-[14px] text-transform: capitalize'>Language: {language}</span>
          <span className='text-[14px]'>Published: {copyright}</span>
        </div>
        <div className='book-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <BookDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} book={book}/>

    </div>
  )
}

export default BookCard