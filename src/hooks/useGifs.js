import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs(keyword = null) {
  //   const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setIsLoading(true);
    getGifs(keywordToUse)
      .then((res) => setGifs(res))
      .then(() => {
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keywordToUse);
      });
  }, [keyword, setGifs, keywordToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getGifs(keywordToUse, page).then((nextGifs) =>
      setGifs((prevGifs) => prevGifs.concat(nextGifs))
    );
  }, [page, setGifs, keywordToUse]);

  return { isLoading, gifs, setPage, loadingNextPage };
}
