import React from "react";
import Gif from "../components/Gif";
import useSingleGif from "../hooks/useSingleGif";
// import useSeo from "../hooks/useSeo";
import { Helmet } from "react-helmet";

const Detail = ({ params }) => {
  const gif = useSingleGif(params.id);
  const title = gif ? gif.title : "";
  const description = `Detail of ${gif?.title}`;
  // useSeo({ description: `Detail of ${gif?.title}`, title });
  if (!gif) return null;

  return (
    <section className="detail">
      <Helmet>
        <title>GifSearch | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="detail-gif">
        <Gif title={gif.title} id={gif.id} url={gif.url} />
      </div>
    </section>
  );
};

export default Detail;
