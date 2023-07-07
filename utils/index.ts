require('dotenv').config();
import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters

  const headers: HeadersInit = {
		'X-RapidAPI-Key': process.env.API_KEY || '',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
    headers: headers as HeadersInit,
  });

  const results = await response.json();
  return results;
};
