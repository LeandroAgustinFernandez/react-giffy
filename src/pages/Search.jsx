import Spinner from "../components/Spinner/Spinner";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const Search = (props) => {
  const { isLoading, gifs } = useGifs(props.params);
  return <>{isLoading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
};

export default Search;
