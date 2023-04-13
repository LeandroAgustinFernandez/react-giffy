import React, { useState } from "react";
import { useLocation } from "wouter";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  
  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="giffy-search">
      <input onChange={handleInput} type="text" value={keyword} />
      <button>¡Search!</button>
    </form>
  );
};

export default React.memo(SearchForm);
