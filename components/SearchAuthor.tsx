"use client"

import { SearchAuthorProps } from '@/types'
import React from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { authors } from '@/constants';

const SearchAuthor = ({ author, setAuthor }: SearchAuthorProps) => {
  const [query, setQuery] = useState('');

  const filteredAuthors = 
    query === "" 
      ? authors
      : authors.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
      ))

  return (
    <div className='search-author'>
      <Combobox
      value={author} onChange={setAuthor}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image 
              src="/author-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Author Logo"
              />
          </Combobox.Button>
          <Combobox.Input
            className="search-author__input"
            placeholder="Author's name"
            displayValue={(author: string) => author}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredAuthors.map((item) => (
                <Combobox.Option
                value={item}
                  key={item}
                  className={({ active }) => 
                    `relative search-author__option ${active ? 'bg-primary-blue text-white': 'text-gray-900'}`}
                >
                  {({ selected, active })=> (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium': 'font-normal'}`}>
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                        >
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchAuthor