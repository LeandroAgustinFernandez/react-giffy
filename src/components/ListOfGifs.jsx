import Gif from "./Gif";


const ListOfGifs = ({ gifs }) => {
  return (
    <article className="gif-container">
      {gifs.map(({ id, title, url }) => (
        <Gif title={title} id={id} url={url} key={id} />
      ))}
    </article>
  );
};

export default ListOfGifs;
