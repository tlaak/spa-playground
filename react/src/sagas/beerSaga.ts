import { call, put, takeEvery } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { getBeer } from 'services/beerService'
import { GET_BEER, GET_BEER_FAILED, GOT_BEER } from 'reducers/beerReducer'

function* getBeerGenerator(): SagaIterator {
  try {
    const beers: Beer[] = yield call(getBeer)
    yield put({ type: GOT_BEER, payload: beers })
  } catch {
    yield put({ type: GET_BEER_FAILED })
  }
}

function* beerSaga(): SagaIterator {
  yield takeEvery(GET_BEER, getBeerGenerator)
}

export default beerSaga
