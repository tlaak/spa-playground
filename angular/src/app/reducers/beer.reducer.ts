import { createAction, createReducer, on, props } from '@ngrx/store';
import type { Beer, BeerState } from '../../types/beer';

export const  getBeer = createAction('GET_BEER');
export const gotBeer = createAction('GOT_BEER', props<{ beers: Beer[] }>());

const beerState: BeerState = {
  isLoading: false,
  beers: [],
};

export const beerReducer = createReducer(
  beerState,
  on(getBeer, (state) => ({ ...state, isLoading: true })),
  on(gotBeer, (state, { beers }) => ({
    ...state,
    isLoading: false,
    beers,
  }))
);
