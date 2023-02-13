import './App.css'
import * as React from 'react'
import Pokedex from './components/Pokedex'
import { PokemonContextProvider } from './context/PokemonContext'

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <Pokedex />
      </PokemonContextProvider>
    </div>
  )
}

export default App
