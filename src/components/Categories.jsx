import React from "react";
import { Link } from "wouter";
const Categories = ({ title, categories }) => {
  return (
    <div className="trending-top">
      {categories.map((tag) => (
        <Link to={`/search/${tag}`} className="trending-top--item" key={tag}>
          {tag.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
