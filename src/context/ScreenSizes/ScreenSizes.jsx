import React, { useEffect, useState } from "react";

export const ScreenSizesContext = React.createContext({});

export const ScreenSizesContextProvider = ({ children }) => {
  const [sizes, setSizes] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizesContext.Provider
      value={{
        sizes,
      }}
    >
      {children}
    </ScreenSizesContext.Provider>
  );
};
