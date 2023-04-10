import { useEffect, useRef, useState } from "react";

export const useNearScreen = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [show]);
  console.log(show);
  return { show, ref };
};
