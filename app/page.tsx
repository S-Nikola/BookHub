import { Hero } from '@/components';
import Image from 'next/image';


export default async function Home() {
   return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 p-x p-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Book catalogue</h1>
          <p>Exlpore the books you might like</p>
        </div>
      </div>
    </main>
  )
}
