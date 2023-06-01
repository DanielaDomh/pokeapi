import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PokeData = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

   const backgroundColor = (type) => {
     if (["grass", "poison", "earth", "bug","ground","rock"].includes(type)) {
       return "#4DAD5B";
     } else if (["fire", "fighting", "flying", "fairy"].includes(type)) {
       return "#E3350D";
     } else if (["water", "dragon", "flying"].includes(type)) {
       return "#30A7D7";
     } else if (["normal", "ghost", "dark"].includes(type)) {
       return "#855AC9";
     } else {
       return "#E6BC2F";
     }
   };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => setData(resp.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="background" style={{ backgroundColor: backgroundColor(data.types?.[0].type.name)}}>
      <img className="logopokemon" src="logopokemon.png" alt="" />
      <div className="first-container">
     <h1 className="name">{data.name}</h1>
     <img className="pokebal-detail" src="/pokebola1.png" alt="" />
     <img className="image-detail" src={data.sprites?.other.dream_world.front_default} alt="" />
     <p className="weight">Weight</p>
     <p className="weight-cont">{data.weight}</p>
      <p className="height">Height</p>
      <p className="height-cont">{data.height}</p>
      </div>
      <p className="type">Type: <br /> {data.types?.[0].type.name}</p>
      <p className="abilities">Abilities: <br /> {data.abilities?.[0].ability.name} {data.abilities?.[1].ability.name}
      </p>
    </div>
  );
};

export default PokeData;
