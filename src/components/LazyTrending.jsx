import React, { Suspense } from "react";
import { useNearScreen } from "../hooks/useNearScreen";
import Spinner from "./Spinner/Spinner";

const Trending = React.lazy(() => import("./Trending"));

export default function LazyTrending() {
  const { show, ref } = useNearScreen();
  return (
    <div ref={ref}>
      <Suspense fallback={<Spinner />}>{show && <Trending />}</Suspense>
    </div>
  );
}
