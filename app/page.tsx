import { BookCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fetchBooks } from '@/utils';
import Image from 'next/image';


export default async function Home() {
  const allBooks = await fetchBooks();

  const isDataEmpty = !Array.isArray(allBooks) || allBooks.length <1 || !allBooks;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 p-x p-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Book catalogue</h1>
          <p>Exlpore the books you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="genre" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__books-wrapper'>
              {allBooks?.map((book) => (
                <BookCard book={book}/>
              ))}
            </div>
          </section>
        ): (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allBooks?.message}</p>
          </div>
        )}


      </div>
    </main>
  )
}
