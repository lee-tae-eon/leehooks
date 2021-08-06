import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
  if (typeof onHover !== "function") return;

  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseover", onHover);
    }
    return () => {
      if (element) {
        element.removeEventListenter("mouseover", onHover);
      }
    };
  }, []);
  return ref;
};
