import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PokeData = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => setData(resp.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
     <h1>{data.name}</h1>
     <img src={data.sprites?.other.dream_world.front_default} alt="" />
     <p>Weight:{data.weight}</p>
      <p>Height:{data.height}</p>
      <p>Type: <br />
      {data.types?.[0].type.name} {data.types?.[1].type.name}</p>
      <p>Abilities: <br />
        {data.abilities?.[0].ability.name} {data.abilities?.[1].ability.name} </p>
    </div>
  );
};

export default PokeData;
