import "./Home.css";
import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import LazyTrending from "../components/LazyTrending";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const { gifs } = useGifs();

  // const searchElement = useMemo(() => <SearchForm />,[])

  return (
    <>
      <SearchForm />
      <section className="container">
        <ListOfGifs gifs={gifs} />
        <LazyTrending />
      </section>
    </>
  );
};

export default Home;
