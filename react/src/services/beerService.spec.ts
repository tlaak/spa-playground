import { getBeer } from './beerService'
import beers from '../fixtures/beers.json'

describe('beerService', () => {
  test('getBeer should return an array of beers', async () => {
    expect(await getBeer()).toEqual(beers)
  })
})
