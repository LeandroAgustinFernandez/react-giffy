import Spinner from "../components/Spinner/Spinner";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const Search = (props) => {
  const keyword = props.params.keyword;
  const { isLoading, gifs, setPage } = useGifs(keyword);

  const handleNextPage = () => {
    setPage(prevState => prevState + 1)
   }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 style={{ marginBottom: "1rem" }}>
            {decodeURI(keyword).toLocaleUpperCase()}
          </h2>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <br />
      <button onClick={handleNextPage}>Get Next Page</button>
    </>
  );
};

export default Search;
