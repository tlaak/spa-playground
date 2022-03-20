import { useParams } from 'react-router-dom'
import { getSingleBeer } from '../services/beerService'
import { useQuery } from 'react-query'
import '../components/GetBeer.css'
export const Beer = () => {
  const { beerId } = useParams()

  const { isLoading, data: beer } = useQuery(
    'getSingleBeer',
    () => getSingleBeer(beerId),
    {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  )

  return (
    <div className="get-beer">
      {isLoading && (
        <div className="get-beer__spinner">
          <p>Fetching beer... be patient!</p>
        </div>
      )}
      <div className="get-beer__beers">{beer?.name}</div>
      <div>{beer?.tagline}</div>
      <div>{beer?.description}</div>
    </div>
  )
}
