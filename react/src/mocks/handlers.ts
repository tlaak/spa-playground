import { rest } from 'msw'
import { BEER_API_URL } from '../services/beerService'
import beers from '../fixtures/beers.json'
export const handlers = [
  rest.get(`${BEER_API_URL}`, (req, res, ctx) => {
    return res(ctx.json(beers))
  }),
  rest.get(`${BEER_API_URL}/:beerId`, (req, res, ctx) => {
    const { beerId } = req.params

    const beer = beers.find((beer) => {
      return beer.id === parseInt(beerId as string, 10)
    })

    return res(ctx.json([beer]))
  }),
]
