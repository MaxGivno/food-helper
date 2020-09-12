import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function PageSection({ meals, title }) {
  const firstFive = meals.slice(0, 5);
  const cards = firstFive.map((item, i) => (
    <Link key={i} to={`/recipe/${item.idMeal}`}>
      <Card meal={item} />
    </Link>
  ));

  return (
    <div className="section-container">
      <div className="section">
        <div className="section-header">
          <h1>{title}</h1>
          <p>See all&hellip;</p>
        </div>
        <div className="cards-container">{cards}</div>
      </div>
    </div>
  );
}

export default PageSection;
