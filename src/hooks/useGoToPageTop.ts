import { useEffect } from "react";

const useGoToPageTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
};

export default useGoToPageTop;
