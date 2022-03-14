import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'app/../environments/environment';

@Injectable()
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeer() {
    const beerApiEndpoint = `${environment.apiEndpoint}/beers`;
    return this.http.get(beerApiEndpoint);
  }
}
