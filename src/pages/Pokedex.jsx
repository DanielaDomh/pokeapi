import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { useState, useEffect } from "react";
import PokeData from "../components/PokeData";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getPokemon();
  }, [currentPage]);

  const getPokemon = async () => {
    try {
      const offset = (currentPage - 1) * 20;
      const resp = await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
      const { results } = resp.data;
      setPokemonList(results);
      setTotalPages(Math.ceil(resp.data / 20));
    } catch (error) {console.error(error)}
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h1>POKEDEX</h1>
      <p className="welcome-message">
        Hi! Welcome, Here you can find your favourite Pokemon!
      </p>
      {/* <form action="">
            <label htmlFor=""></label>
            <input type="text" />
            <button type="toggle">hola</button>
      </form>  */}
      <div className="button-content">
        <button
        disabled={currentPage === 1}
        onClick={goToPreviousPage}>Previous</button>
        <button
        disabled={currentPage === totalPages}
        onClick={goToNextPage}>Next</button>
      </div>
      <div>
        {pokemonList.map((pokemon) => (
          <PokemonCard
          data={pokemon}
          key={pokemon.name}/>
          ))}
      </div>
    </div>
  );
};

export default Pokedex;
