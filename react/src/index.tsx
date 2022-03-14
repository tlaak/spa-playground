import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import beerReducer from './reducers/beerReducer'
import beerSaga from './sagas/beerSaga'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
