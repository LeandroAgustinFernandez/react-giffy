import React from "react";
import { Link } from "wouter";

const Gif = ({ title, url, id }) => {
  return (
    <div className="gif-item">
      <Link to={`/gif/${id}`}>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
