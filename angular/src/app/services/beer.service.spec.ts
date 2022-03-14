import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BeerService } from './beer.service';

describe('BeerService', () => {
  beforeEach(() => {
    /**
     * You have to import HttpClientModule and define it in the TestBed
     * configuration. It's a dependency of the service so without this step
     * you will get "No provider for HttpClient!" error.
     */
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BeerService],
    });
  });

  it('should be created', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));
});
