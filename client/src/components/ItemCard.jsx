import React from "react";
import StarRating from "./StarRating";
import Tags from "./Tags";
import { Link } from "react-router-dom";

function ItemCard({ recipe }) {
  const imgUrl = `${
    recipe.image || "https://spoonacular.com/recipeImages/default.jpg"
  }`;

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="item-card">
      <Link to={`/recipe/${recipe.id}`}>
        <div className="card-main">
          <div className="img-container">
            <img src={imgUrl} alt="" />
          </div>
          <h2>{recipe.name}</h2>
          <p>{truncate(recipe.description, 100)}</p>
        </div>
      </Link>
      <div className="icons">
        <StarRating rating={(Math.random() * (5 - 2) + 2).toFixed(1)} />
        <Tags tags={recipe.tag} />
      </div>
    </div>
  );
}

export default ItemCard;
