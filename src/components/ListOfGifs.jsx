import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <article className="container-gifs">
      <article className="gif-container">
        {gifs.map(({ id, title, url }) => (
          <Gif title={title} id={id} url={url} key={id} />
        ))}
      </article>
    </article>
  );
};

export default ListOfGifs;
