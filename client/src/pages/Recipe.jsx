import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// import StarRating from "../components/StarRating";
import IngredientsList from "../components/IngredientsList";
import Directions from "../components/Directions";

const Recipe = (props) => {
  // Get recipe id from link
  const { recipeId } = useParams();

  // Find the recipe by id
  const recipe = props.meals.filter((meal) => meal._id === recipeId)[0];

  // Get ingredients
  const ingredients = recipe.ingredients.map((item, i) => (
    <p key={i} className="ingredient">
      {`${item.measure} ${item.ingredient}`}
    </p>
  ));

  // Parse directions from recipe
  const steps = () => {
    const regex = /(?:\r\n)+/g;
    let paragraphs = recipe.instructions.split(regex);
    paragraphs = paragraphs.filter((str) => !str.match(/^\d+\.\s/));
    return paragraphs.map((text, i) => (
      <li key={i}>
        <p>{text}</p>
      </li>
    ));
  };

  return (
    <div className="recipe">
      <section className="title">
        <img src={recipe.imageUrl} alt={recipe.name} />
        <div className="title-info">
          <h1>{recipe.name}</h1>
          <div className="icons">
            {/* <StarRating rating={(Math.random() * (5 - 2) + 2).toFixed(1)} /> */}
            <p className="tag">{recipe.category.toUpperCase()}</p>
          </div>
        </div>
      </section>
      <hr />
      <div className="recipe-body">
        <div className="main">
          <IngredientsList ingList={ingredients} />
          <Directions steps={steps()} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
