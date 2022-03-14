import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GetBeerComponent } from './components/get-beer/get-beer.component';
import { environment } from '../environments/environment';
import { beerReducer } from './reducers/beer.reducer';
import { BeerService } from 'app/services/beer.service';
import { BeerEffects } from 'app/effects/beer.effects';

@NgModule({
  declarations: [AppComponent, GetBeerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([BeerEffects]),
    StoreModule.forRoot({ beers: beerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50, // Retains last 50 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
