import { useRef } from "react";

export const useFullScreen = (callback) => {
  const ref = useRef();
  const triggerFullScreen = () => {
    const element = ref.current;

    if (document.fullscreen) {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    } else {
      if (element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
        if (callback && typeof callback === "function") {
          callback(true);
        }
      }
    }
  };
  // const exitFulleScreen = () => {
  //   document.exitFullscreen();
  //   if (callback && typeof callback === "function") {
  //     callback(false);
  //   }
  // };
  return { ref, triggerFullScreen };
};
