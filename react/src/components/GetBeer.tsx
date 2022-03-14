import * as React from 'react'

import './GetBeer.css'

interface IProps {
  getBeer: () => void
  beers: any[]
  isLoading: boolean
}

const GetBeer = (props: IProps) => (
  <div className="get-beer">
    <button onClick={props.getBeer} type="button" className="get-beer__button">
      Show me the beers!
    </button>
    {props.isLoading && (
      <div className="get-beer__spinner">
        <p>Fetching beer... be patient!</p>
      </div>
    )}
    <div className="get-beer__beers">
      <ol className="get-beer__beers-list">
        {props.beers.map(beer => (
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

export default GetBeer
