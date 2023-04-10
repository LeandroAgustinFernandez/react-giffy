import Spinner from "../components/Spinner/Spinner";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const Search = (props) => {
  const keyword = props.params.keyword
  const { isLoading, gifs } = useGifs(keyword);
  return <>{isLoading ? <Spinner /> : <><h2 style={{marginBottom:'1rem'}}>{decodeURI(keyword).toLocaleUpperCase()}</h2><ListOfGifs gifs={gifs} /></>}</>;
};

export default Search;
