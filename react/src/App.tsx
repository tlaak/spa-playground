import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './screens/Home'
import { Beer } from './screens/Beer'
import './App.css'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <main className="app">
      <h1 className="app__heading">
        <Link to="/">Welcome to the Get Beer app!</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:beerId" element={<Beer />} />
      </Routes>
    </main>
  </QueryClientProvider>
)

export default App
