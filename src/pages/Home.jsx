import { useNavigate } from "react-router-dom";
import { usernameValue  } from "../store/slices/username.slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(e.target[0].value);
     navigate("/pokedex");
   };

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()

  return (
    <div className="home-container">
      <div>
        <img className="logo" src="/logo.png" alt="" />
        <h2>Hi Trainer!</h2>
        <p>Type your name to start...</p>
         <form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <div className="input-style">
            <label htmlFor="name"></label>
            <input
            type="text"
            id="name"
            placeholder="Tu nombre..."
            value={userName}
            onChange={e => setUserName(e.target.value)}
            />
            <button
            type="submit"
            onClick={() => dispatch(usernameValue(userName))}
            > Comenzar </button>
          </div>
         </form>

      </div>
    </div>
  );
};

export default Home;
