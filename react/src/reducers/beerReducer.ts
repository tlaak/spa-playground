export const GOT_BEER = 'GOT_BEER'
export const GET_BEER = 'GET_BEER'
export const GET_BEER_FAILED = 'GET_BEER_FAILED'

const beerState: BeerState = {
  isLoading: false,
  beers: [],
  failed: false,
}

const beerReducer = (
  state: BeerState = beerState,
  action: ActionWithPayload<Beer[]>
) => {
  switch (action.type) {
    case GET_BEER:
      return { ...state, isLoading: true, failed: false }
    case GOT_BEER:
      return {
        ...state,
        isLoading: false,
        beers: action.payload,
        failed: false,
      }
    case GET_BEER_FAILED:
      return { ...state, isLoading: false, failed: true }
    default:
      return state
  }
}

export default beerReducer
