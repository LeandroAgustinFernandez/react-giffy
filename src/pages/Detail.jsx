import React, { useContext } from "react";
import GifsContext from "../context/GifsContext";
import Gif from "../components/Gif";

const Detail = ({ params }) => {
  const { gifs } = useContext(GifsContext);

  const { title, id, url } = gifs.find((gif) => gif.id === params.id);

  return (
    <section className="detail">
      <div className="detail-gif">
        <Gif title={title} id={id} url={url} />
      </div>
    </section>
  );
};

export default Detail;
