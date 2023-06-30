require('dotenv').config();

export async function fetchBooks() {
  const headers: HeadersInit = {
		'X-RapidAPI-Key': process.env.API_KEY || '',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}

  const response = await fetch('https://book-finder1.p.rapidapi.com/api/search', {
    headers: headers as HeadersInit,
  });

  const data = await response.json();
  return data.results;
}