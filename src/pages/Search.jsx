import Spinner from "../components/Spinner/Spinner";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";
import { useNearScreen } from "../hooks/useNearScreen";
import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";

const Search = (props) => {
  const keyword = props.params.keyword;
  const { isLoading, gifs, setPage } = useGifs(keyword);
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false,
  });

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
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 style={{ marginBottom: "1rem" }}>
            {decodeURI(keyword).toLocaleUpperCase()}
          </h2>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      <br />
    </>
  );
};

export default Search;
