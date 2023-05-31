import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PokemonCard = ({ data }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get(data.url)
      .then((resp) => setPokemonData(resp.data))
      .catch((error) => console.error(error));
  }, []);

  //Estilado condicionado con el type de cada Pokemon
  const backgroundColor = (type) => {
    if (["grass", "poison", "earth", "bug","ground","rock"].includes(type)) {
      return "#4DAD5B";
    } else if (["fire", "fighting", "psychic", "fairy"].includes(type)) {
      return "#E3350D";
    } else if (["water", "dragon", "flying"].includes(type)) {
      return "#30A7D7";
    } else if (["normal", "ghost", "dark"].includes(type)) {
      return "#855AC9";
    } else {
      return "#E6BC2F";
    }
  };

  return (
    <Link to={`/pokedex/${pokemonData.id}`}>
    <div
      className="pokemon-card"
      style={{
        backgroundColor: backgroundColor(pokemonData.types?.[0].type.name),
      }}
    >
      <img
        className="pokemon-image"
        src={pokemonData.sprites?.other.dream_world?.front_default}
        alt=""
      />
      <img className="pokeball" src="/pokebola1.png" alt="" />
      <p className="pokemon-name">{pokemonData.name}</p>
      <p className="pokemon-stat--type">Type: <br /> {pokemonData.types?.[0].type.name}</p>
      <p className="pokemon-stat">HP: {pokemonData.stats?.[0].base_stat}</p>
      <p className="pokemon-stat">Attack: {pokemonData.stats?.[1].base_stat}</p>
      <p className="pokemon-stat">
        Defense: {pokemonData.stats?.[2].base_stat}
      </p>
      <p className="pokemon-stat">Speed: {pokemonData.stats?.[5].base_stat}</p>
    </div>
    </Link>
  );
};
export default PokemonCard;
