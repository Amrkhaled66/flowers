// useFullscreen.js
import { useState, useEffect,RefObject } from "react";

const useFullscreen = (ref: RefObject<HTMLDivElement | null>):[boolean,()=>void] => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const element = ref.current;
    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (`webkitRequestFullscreen` in element) {
        (element as any).webkitRequestFullscreen();
      } else if (`msRequestFullscreen` in element) {
        (element as any).msRequestFullscreen();
      }
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (`webkitExitFullscreen` in document) {
      (document as any).webkitExitFullscreen();
    } else if (`msExitFullscreen` in document) {
      (document as any).msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange,
      );
    };
  }, []);

  return [isFullscreen, toggleFullscreen];
};

export default useFullscreen;
