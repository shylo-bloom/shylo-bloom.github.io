import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  
  useEffect(() => {
    
		
    
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    if (typeof window != "undefined") {
    };
    
      window.addEventListener("resize", handleResize);

      // Recursion
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    
  }, []);
  return windowSize;
};
