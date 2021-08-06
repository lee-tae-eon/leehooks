import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 3, delay = 0) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (typeof duration !== "number" || typeof delay !== "number") return;
    if (element) {
      // const { current } = ref;
      // current.style.transition = `opacity ${duration}s`;
      // current.style.opacity = 1;
      element.style.transition = `opacity ${duration}s ease ${delay}s`;
      element.style.opacity = 1;
    }
  }, []);
  return { ref, style: { opacity: 0 } };
};
