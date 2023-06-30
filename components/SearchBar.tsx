"use client";

import SearchAuthor from "./SearchAuthor";
import { useState} from 'react';

const SearchBar = () => {
  const [ author, setAuthor ] = useState('')
  
  // const handleSearch = () => {};



  return (
    <form className='searchbar'
    // onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        <SearchAuthor 
          author={author}
          setAuthor={setAuthor}
        />
      </div>
    </form>
  )
}

export default SearchBar