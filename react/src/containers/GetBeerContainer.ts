import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import GetBeer from 'components/GetBeer'
import { GET_BEER } from 'reducers/beerReducer'

const mapStateToProps = (state: BeerState) => {
  return {
    beers: state.beers,
    isLoading: state.isLoading,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getBeer: () => {
      dispatch({ type: GET_BEER })
    },
  }
}
const GetBeerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetBeer)
export default GetBeerContainer
