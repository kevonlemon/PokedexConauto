import * as React from 'react'

import PokedexGrid from './PokedexGrid'
import { GetPokemons } from '../services/GetData'
import { PokemonContext } from '../context/PokemonContext'

export default function Pokedex() {
  const { pokemon, setPokemon, pokemons2, setPokemons } = React.useContext(
    PokemonContext,
  )
  const [search, setSearch] = React.useState('')

  const SearchPokemon = (e) => {
    const text = String(e.target.value).toLocaleUpperCase()
    setSearch(e.target.value)
    const result = pokemons2.filter((b) =>
      String(b.name).toLocaleUpperCase().includes(text),
    )
    setPokemon(result)
  }

  React.useEffect(() => {
    const dataPokemons = GetPokemons()
    dataPokemons().then((data) => {
      setPokemons(data)
    })
    setPokemon(pokemons2)
    console.log('ya cargó')
  }, [])

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Buscar por nombre o número de Pókemon"
          value={search}
          onChange={SearchPokemon}
        />
      </form>

      <PokedexGrid pokemons={pokemon} />
    </div>
  )
}
