import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import LazyTrending from "../components/LazyTrending";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const { gifs, keywordToUse } = useGifs();
  // const searchElement = useMemo(() => <SearchForm />,[])
  return (
    <>
      <SearchForm />
      <section className="home">
        <LazyTrending />
        <h3 className="home-title">
          Last search: {decodeURI(keywordToUse).toLocaleUpperCase()}
        </h3>
        <ListOfGifs gifs={gifs} />
      </section>
    </>
  );
};

export default Home;
