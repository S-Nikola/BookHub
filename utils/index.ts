require('dotenv').config();

export async function fetchCars() {
  const headers: HeadersInit = {
		'X-RapidAPI-Key': process.env.API_KEY || '',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers as HeadersInit,
  });

  const results = await response.json();
  return results;
}