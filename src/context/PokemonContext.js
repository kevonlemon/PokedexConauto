import * as React from 'react'

export const PokemonContext = React.createContext()

// eslint-disable-next-line react/prop-types
export const PokemonContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = React.useState([])
  const [pokemons2, setPokemons] = React.useState([])

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokemons2,
        setPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
