import React from 'react'
import { BookProps } from '@/types';

interface BookDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  book: BookProps;
}

const BookDetails = ({ isOpen, closeModal, book }: BookDetailsProps) => {
  return (
    <div>{book.summary}</div>
  )
}

export default BookDetails