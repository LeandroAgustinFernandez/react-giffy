import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <article className="gifs">
      <article className="gifs_container">
        {gifs.map(({ id, title, url }) => (
          <Gif title={title} id={id} url={url} key={id} />
        ))}
      </article>
    </article>
  );
};

export default ListOfGifs;
