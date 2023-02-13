import React, { useState, useEffect } from 'react'

export default function PokedexCard({ pokemonName }) {
  const [pokemonImage, setPokemonImage] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonImage(data.sprites.front_default)
      })
  }, [pokemonName])

  return (
    <div>
      {pokemonImage ? (
        <img src={pokemonImage} alt={pokemonName} />
      ) : (
        <p>Loading...</p>
      )}
      <p>{pokemonName}</p>
    </div>
  )
}
