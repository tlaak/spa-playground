import axios from 'axios'
import type { Beer } from '../types/beer'

export const BEER_API_URL = 'https://api.punkapi.com/v2/beers'
export const getBeer = () => {
  return axios.get<Beer[]>(BEER_API_URL).then((response) => response.data)
}
