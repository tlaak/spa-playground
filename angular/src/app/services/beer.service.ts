import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import type { Beer } from '../../types/beer';

@Injectable()
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeer() {
    const beerApiEndpoint = `${environment.apiEndpoint}/beers`;
    return this.http.get<Beer[]>(beerApiEndpoint);
  }
}
