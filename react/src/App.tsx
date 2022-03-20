import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './screens/Home'
import './App.css'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <main className="app">
      <Home />
    </main>
  </QueryClientProvider>
)

export default App
