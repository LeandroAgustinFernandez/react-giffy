import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs( keyword = null) {
  //   const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  useEffect(() => {
    setIsLoading(true);
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";
    getGifs(keywordToUse)
      .then((res) => setGifs(res))
      .then(() => {
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keywordToUse);
      });
  }, [keyword]);

  return { isLoading, gifs };
}
