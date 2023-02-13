import axios from 'axios'

export function GetPokemons() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  return async () => {
    try {
      const { data } = await axios.get(url)
      const pokemonsJason = data.results
      return pokemonsJason
    } catch (error) {
      return error
    }
  }
}
