import * as React from 'react'
import './App.css'

import { GetBeer } from 'components/GetBeer'

const App = () => (
  <main className="app">
    <h1 className="app__heading">Welcome to the Get Beer app!</h1>
    <GetBeer />
  </main>
)

export default App
