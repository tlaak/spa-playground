import { rest } from 'msw'
import { BEER_API_URL } from '../services/beerService'
import beers from '../fixtures/beers.json'
export const handlers = [
  rest.get(BEER_API_URL, (_req, res, ctx) => {
    return res(ctx.json(beers))
  }),
]
