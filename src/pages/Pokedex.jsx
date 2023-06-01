import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Pokedex = ({ userName }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    getPokemon();
  }, [currentPage]);

  const getPokemon = async () => {
    try {
      const offset = (currentPage - 1) * 20;
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      );
      const { results } = resp.data;
      setPokemonList(results);
      setTotalPages(Math.ceil(resp.data / 20));
    } catch (error) {
      console.error(error);
    }
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const username = useSelector((state) => state.username);
  return (
    <div>
      <h1>POKEDEX</h1>
      <p className="welcome-message">
        Hi! {username} and welcome, Here you can find your favourite Pokemon!

        <div>
          <label htmlFor="filter">Serch by type </label> <br />
          <input
          type="text"
          id="filter"
          placeholder="Ex.: fire, grass, water, bug"
          onChange={ e => setInputValue(e.target.value)}
          value={inputValue}
          />
          <button>Serch</button>
        </div>

      </p>
      <div className="button-content">
        <button disabled={currentPage === 1} onClick={goToPreviousPage}>
          Previous
        </button>
        <button disabled={currentPage === totalPages} onClick={goToNextPage}>
          Next
        </button>
      </div>
      <div>
        {pokemonList.map((pokemon) => (
          <PokemonCard data={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
