import { useState } from 'react'
import { getBeer } from '../services/beerService'
import type { Beer } from '../types/beer'
import './GetBeer.css'

export const GetBeer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [beers, setBeers] = useState<Beer[]>([])

  const fetchBeer = async () => {
    setIsLoading(true)
    const result = await getBeer()
    setBeers(result)
    setIsLoading(false)
  }

  return (
    <div className="get-beer">
      <button onClick={fetchBeer} type="button" className="get-beer__button">
        Show me the beers!
      </button>
      {isLoading && (
        <div className="get-beer__spinner">
          <p>Fetching beer... be patient!</p>
        </div>
      )}
      <div className="get-beer__beers">
        <ol className="get-beer__beers-list">
          {beers.map((beer) => (
            <li className="get-beer__beers-list-item" key={beer.id}>
              <div className="get-beer__beers-list-item--beer-name">
                {beer.name}
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
