import { getAllBeers, getSingleBeer } from './beerService'
import beers from '../fixtures/beers.json'

describe('beerService', () => {
  test('getAllBeers should return an array of beers', async () => {
    expect(await getAllBeers()).toEqual(beers)
  })

  test('getBeer should return a single beer', async () => {
    expect(await getSingleBeer('1')).toEqual(beers[0])
  })
})
