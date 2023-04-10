import { useState } from "react";
import { useLocation } from "wouter";
import "./Home.css";
import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import LazyTrending from "../components/LazyTrending";

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
      <section className="container">
        <article className="container-gifs">
          <h4>Last search</h4>
          <ListOfGifs gifs={gifs} />
        </article>
        <LazyTrending />
      </section>
    </>
  );
};

export default Home;
