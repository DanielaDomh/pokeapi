import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    navigate("/pokedex");
  };
  
  return (
    <div className="home-container" >
      <div>
      <img className="logo" src="/logo.png" alt="" />
      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <h2>¡Hola Entrenador!</h2>
        <p>Para poder comenzar, dame tu nombre</p>
        <div className="input-style">
          <label htmlFor="text" ></label>
          <input type="text" id="text" placeholder="Tu nombre..."/>
          <button type="submit"> Comenzar </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Home;
