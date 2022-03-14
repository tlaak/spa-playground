export interface Beer {
  tagline: string;
  name: string;
}

export interface BeerState {
  isLoading: boolean;
  beers: Beer[];
}
