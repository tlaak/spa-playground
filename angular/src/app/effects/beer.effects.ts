import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BeerService } from '../../app/services/beer.service';
import { getBeer, gotBeer } from '../reducers/beer.reducer';
import { Beer } from '../../types/beer';

@Injectable()
export class BeerEffects {
  constructor(private actions$: Actions, private beerService: BeerService) {}

  // Listen to the 'GET_BEER' action

  getBeer$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getBeer),
      mergeMap(() =>
        this.beerService.getBeer().pipe(
          map((beers) => gotBeer({ beers })),
          catchError(() => of({ type: 'FAILED_TO_GET_BEER' })) // TODO: Handle error
        )
      )
    )
  );
}
