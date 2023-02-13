import React, { lazy, Suspense } from 'react'

const PokedexCard = lazy(() => import('./PokedexCard'))

const PokedexGrid = ({ pokemons }) => {
  return (
    <div
      className="pokedex-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '10px',
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        {pokemons.map((pokemon, index) => (
          <PokedexCard key={index} pokemonName={pokemon.name} />
        ))}
      </Suspense>
    </div>
  )
}

export default PokedexGrid
