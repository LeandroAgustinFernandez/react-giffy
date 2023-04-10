import { useEffect, useState } from "react";
import getTrending from "../services/getTrending";
import Categories from "./Categories";

const Trending = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrending().then((res) => setTrends(res));
  }, []);

  return (
    <article className="popular-container">
      <h3 className="popular-title">Trendings</h3>
      <Categories categories={trends} />
    </article>
  );
};

export default Trending;