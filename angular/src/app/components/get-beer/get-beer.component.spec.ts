import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GetBeerComponent } from './get-beer.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import { beerReducer } from 'app/reducers/beer.reducer';

describe('GetBeerComponent', () => {
  let component: GetBeerComponent;
  let fixture: ComponentFixture<GetBeerComponent>;

  beforeEach(waitForAsync(() => {
    /**
     * This component is subscribing to the @ngrx store. You need to use the
     * StoreModule and define the name for the store in TestBed configuration
     */
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          beers: combineReducers(beerReducer),
        }),
      ],
      declarations: [GetBeerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a subscription to beer reducer', () => {
    const beerSub = component['beerSub'];
    expect(beerSub).toBeDefined();
    expect(beerSub.closed).toBeFalsy();
  });

  it('should have no subscriptions when component has been destroyed', () => {
    component.ngOnDestroy();

    const beerSub = component['beerSub'];
    expect(beerSub.closed).toBeTruthy();
  });
});
