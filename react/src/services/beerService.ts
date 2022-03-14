import axios, { AxiosPromise } from 'axios'

export const getBeer = (): AxiosPromise<Beer[]> => {
  const beerApiEndpoint = 'https://api.punkapi.com/v2/beers'
  return axios.get(beerApiEndpoint).then(response => response.data)
}
