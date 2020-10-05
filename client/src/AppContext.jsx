import React, { useState, useEffect } from "react";
import data from "./recipes1.json";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [recipes, setRecipes] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setRecipes(data);
  }, []);

  const searchFieldChangeHandler = (e) => {
    const { value } = e.target;
    return setSearchTerm(value);
  };

  return (
    <AppContext.Provider
      value={{
        recipes,
        isSearchMode,
        setIsSearchMode,
        searchTerm,
        searchFieldChangeHandler
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
