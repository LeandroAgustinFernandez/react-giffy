import { useEffect, useState } from "react";
import getSingleGifs from "../services/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif(idGif) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === idGif);
  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    console.log("hola");
    if (!gif) {
      getSingleGifs(idGif).then((res) => setGif(res));
    }
  }, [gif, idGif]);

  return gif;
}
