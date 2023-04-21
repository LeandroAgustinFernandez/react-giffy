import React, { useReducer, useState } from "react";
import { useLocation } from "wouter";
const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const [rating, setRating] = useState(RATINGS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleInput = (e) => setKeyword(e.target.value)
  const handleOnChangeRating = (e) => setRating(e.target.value)

  return (
    <form onSubmit={handleSubmit} className="giffy-search">
      <input onChange={handleInput} type="text" value={keyword} />
      <select value={rating} onChange={handleOnChangeRating}>
        {RATINGS.map((rating) => (
          <option key={rating} value={rating}>{rating}</option>
        ))}
      </select>
      <button>¡Search!</button>
    </form>
  );
};

export default React.memo(SearchForm);
