import { useEffect, useState } from "react"
import Button from "./components/Button"
import PokemonThumbnail from "./components/PokemonThumbnail"


function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('http://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()

        setAllPokemons( currentList => [...currentList, data])

      })
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }

  useEffect(() =>{
    getAllPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>PokeDEX.</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, index) => 
              <PokemonThumbnail 
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            )}
        </div>
        <Button onClick={getAllPokemons}>load more pokémon</Button>
      </div>
    </div>
  );
}

export default App;
