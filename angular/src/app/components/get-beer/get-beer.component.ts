import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GET_BEER } from 'app/reducers/beer.reducer';

@Component({
  selector: 'app-get-beer',
  templateUrl: './get-beer.component.html',
  styleUrls: ['./get-beer.component.css'],
})
export class GetBeerComponent implements OnInit, OnDestroy {
  private beerSub: Subscription;

  public beers: Beer[];
  public isLoading: boolean;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.beerSub = this.store
      .select('beers')
      .subscribe((beerState: BeerState) => {
        this.beers = beerState.beers;
        this.isLoading = beerState.isLoading;
      });
  }

  ngOnDestroy() {
    this.beerSub.unsubscribe();
  }

  getBeer(event: Event) {
    event.preventDefault();
    this.store.dispatch({ type: GET_BEER });
  }
}
