import { useEffect, useRef, useState } from "react";

export const useNearScreen = ({ externalRef, once = true } = {}) => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const element = externalRef ? externalRef.current : ref.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { show, ref };
};
