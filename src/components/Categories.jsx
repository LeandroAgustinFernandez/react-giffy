import React from "react";
import { Link } from "wouter";
const Categories = ({ title, categories }) => {
  return (
    <div className="top-search-container">
      {categories.map((tag) => (
        <Link to={`/search/${tag}`} className="link-item" key={tag}>
          {tag.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
