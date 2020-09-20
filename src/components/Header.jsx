import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <h2 className="logo">
        <Link to="/">Cooking</Link>
      </h2>
      <ul className="menu">
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Browse
          </Link>
        </li>
        <li>
          <i className="far fa-bookmark"></i> Bookmarks
        </li>
      </ul>
    </header>
  );
}

export default Header;
