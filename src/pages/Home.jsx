import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import LazyTrending from "../components/LazyTrending";
import SearchForm from "../components/SearchForm";
// import useSeo from "../hooks/useSeo";
import { Helmet } from "react-helmet";

const Home = () => {
  const { gifs, keywordToUse } = useGifs();
  const title = " Searching gifs";
  const description = `Page GifSearch to find every gif you want!`
  // useSeo({ description: `Page GifSearch to find every gif you want!`, title });
  // const searchElement = useMemo(() => <SearchForm />,[])
  return (
    <>
      <Helmet>
        <title>GifSearch | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
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
