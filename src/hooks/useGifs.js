import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  //   const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  useEffect(() => {
    setIsLoading(true);
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";
    getGifs({ keyword: keywordToUse })
      .then((res) => setGifs(res))
      .then(() => {
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
  }, [keyword]);

  return { isLoading, gifs };
}
