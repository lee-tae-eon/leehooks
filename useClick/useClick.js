import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      console.log("this is mount");
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        console.log("this is unmount");
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  if (typeof onClick !== "function") {
    return;
  }
  return ref;
};
