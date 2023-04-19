import Spinner from "../components/Spinner/Spinner";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";
import { useNearScreen } from "../hooks/useNearScreen";
import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
// import useSeo from "../hooks/useSeo";

const Search = (props) => {
  const keyword = props.params.keyword;
  const { isLoading, gifs, setPage } = useGifs(keyword);
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false,
  });

  const title = gifs
    ? `${gifs.length} resultados de ${decodeURI(keyword)}`
    : "";
  const description = `Search results of ${keyword} from GifSearch`;
  // useSeo({ description: `Search results of ${keyword} from GifSearch`,title });

  const debounceHandelNextPage = useCallback(
    debounce(() => {
      setPage((prevState) => prevState + 1);
    }, 200),
    []
  );

  useEffect(() => {
    console.log(true);
    if (show) debounceHandelNextPage();
  }, [show, debounceHandelNextPage]);

  return (
    <>
      <Helmet>
        <title>GifSearch | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="search">
          <h2 className="search-title">
            RESULT OF: {decodeURI(keyword).toLocaleUpperCase()}
          </h2>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}>
            <h5 className="visor-message">Keep Scrolling!</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#86f0d4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevrons-down"
            >
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          </div>
        </section>
      )}
      <br />
    </>
  );
};

export default Search;
