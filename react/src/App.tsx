import * as React from 'react'
import './App.css'

import GetBeerContainer from 'containers/GetBeerContainer'

const App = () => (
  <main className="app">
    <h1 className="app__heading">Welcome to the Get Beer app!</h1>
    <GetBeerContainer />
  </main>
)

export default App
