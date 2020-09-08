import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../AppContext";

function Header() {
  const {
    isSearchMode,
    setIsSearchMode,
    searchTerm,
    searchFieldChangeHandler
  } = useContext(AppContext);

  const searchButton = (
    <button className="menu-btn" onClick={() => setIsSearchMode(true)}>
      <i className="fas fa-search"></i>
    </button>
  );

  const searchField = (
    <div className="sf-container">
      <input
        type="text"
        className="search-field"
        placeholder="Search..."
        value={searchTerm}
        onChange={searchFieldChangeHandler}
      />
      <button className="close-btn" onClick={() => setIsSearchMode(false)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );

  const search = isSearchMode ? searchField : searchButton;

  return (
    <header>
      <h2 className="logo">cooking</h2>
      <ul className="menu">
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        <li>{search}</li>
        <li>
          <i className="far fa-bookmark"></i>
        </li>
      </ul>
    </header>
  );
}

export default Header;
