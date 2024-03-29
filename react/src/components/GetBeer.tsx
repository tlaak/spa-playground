import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getAllBeers } from '../services/beerService'
import './GetBeer.css'

export const GetBeer = () => {
  const { isLoading, data: beers } = useQuery(
    'getAllBeers',
    () => getAllBeers(),
    {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 30000,
    }
  )

  return (
    <div className="get-beer">
      {isLoading && (
        <div className="get-beer__spinner">
          <p>Fetching beer... be patient!</p>
        </div>
      )}
      <div className="get-beer__beers">
        <ol className="get-beer__beers-list">
          {beers?.map((beer) => (
            <li className="get-beer__beers-list-item" key={beer.id}>
              <div className="get-beer__beers-list-item--beer-name">
                <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
              </div>
              <div className="get-beer__beers-list-item--beer-tagline">
                {beer.tagline}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
