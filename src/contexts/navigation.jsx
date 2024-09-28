import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = (event) => {
      // update the current path if the 'popstate' event occurs
      setCurrentPath((current) => (current = windown.location.pathname));
    };

    window.addEventListener("popstate", handler);

    // remove the eventlistener
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath((current) => (current = to));
  };

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
export { NavigationProvider };
