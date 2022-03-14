import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import beerReducer from './reducers/beerReducer'
import beerSaga from './sagas/beerSaga'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  beerReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(beerSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
