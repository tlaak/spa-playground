import axios from 'axios'
import type { Beer } from '../types/beer'

export const getBeer = () => {
  const beerApiEndpoint = 'https://api.punkapi.com/v2/beers'
  return axios.get<Beer[]>(beerApiEndpoint).then((response) => response.data)
}
