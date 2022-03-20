import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GetBeer } from 'components/GetBeer'
import './App.css'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <main className="app">
      <h1 className="app__heading">Welcome to the Get Beer app!</h1>
      <GetBeer />
    </main>
  </QueryClientProvider>
)

export default App
