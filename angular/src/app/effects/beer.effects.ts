import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BeerService } from 'app/services/beer.service';

@Injectable()
export class BeerEffects {
  constructor(private actions$: Actions, private beerService: BeerService) {}

  // Listen to the 'GET_BEER' action
  
  getBeer$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType('GET_BEER'),
    mergeMap(action =>
      this.beerService.getBeer().pipe(
        map(beer => ({ type: 'GOT_BEER', payload: beer })),
        catchError(() => of({ type: 'FAILED_TO_GET_BEER' }))
      )
    )
  ));
}
