import axios from 'axios'
import type { Beer } from '../types/beer'

export const BEER_API_URL = 'https://api.punkapi.com/v2/beers'

export const getAllBeers = () => {
  return axios.get<Beer[]>(BEER_API_URL).then((response) => response.data)
}
export const getSingleBeer = (beerId?: string) => {
  if (!beerId) {
    throw new Error('Cannot get beer without a beerId')
  }

  const URL = `${BEER_API_URL}/${beerId}`
  return axios.get<Beer>(URL).then((response) => response.data[0])
}
