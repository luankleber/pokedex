import { useEffect, useState } from "react"

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('http://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async() => {
    const res = await fetch(loadMore)
    const data = await res.json()

    console.log(data)
  }

  useEffect(() =>{
    getAllPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>PokeDEX</h1>
      <div className="pokemon-container">
        <div className="all-container">

        </div>
        <button className="load-more">Load More</button>
      </div>
    </div>
  );
}

export default App;
