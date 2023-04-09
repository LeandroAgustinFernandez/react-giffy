import { useState } from "react";
import { Link, useLocation } from "wouter";
import "./Home.css";
import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";

const LIST_OF_COUNTRIES = [
  "Gatos",
  "Matrix",
  "Messi",
  "Rick and Morty",
  "Javascript",
];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" value={keyword} />
        <button>¡Search!</button>
      </form>
      <div className="top-search-container">
        {LIST_OF_COUNTRIES.map((country) => (
          <Link to={`/search/${country}`} className="link-item" key={country}>
            {country}
          </Link>
        ))}
      </div>
      <h4>Last search</h4>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default Home;
