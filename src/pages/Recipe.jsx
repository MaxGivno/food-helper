import React from "react";
import { useParams } from "react-router-dom";

// import StarRating from "../components/StarRating";
import IngredientsList from "../components/IngredientsList";
import Directions from "../components/Directions";

function Recipe({ meals }) {
  // Get recipe id from link
  const { recipeId } = useParams();

  // Find the recipe by id
  const recipe = Object.values(meals)
    .flat()
    .find((recipe) => recipe.idMeal === recipeId);

  // Parse ingredients from recipe
  const ingredients = () => {
    let arr = Object.entries(recipe);
    let ingNames = arr.filter((item) => item[0].startsWith("strIngre"));
    let ingMeasures = arr.filter((item) => item[0].startsWith("strMeasur"));
    let list = [];
    for (let i = 0; i < ingNames.length; i++) {
      if (ingNames[i][1]) {
        list.push(
          <p key={i} className="ingredient">
            {ingMeasures[i][1] + " " + ingNames[i][1]}
          </p>
        );
      }
    }
    return list;
  };

  // Parse directions from recipe
  const steps = () => {
    const regex = /(?:\r\n)+/g;
    let paragraphs = recipe.strInstructions.split(regex);
    paragraphs = paragraphs.filter((str) => !str.match(/^\d/));
    return paragraphs.map((text, i) => (
      <li key={i}>
        <p>{text}</p>
      </li>
    ));
  };

  return (
    <div className="recipe">
      <section className="title">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <div className="title-info">
          <h1>{recipe.strMeal}</h1>
          <div className="icons">
            {/* <StarRating rating={(Math.random() * (5 - 2) + 2).toFixed(1)} /> */}
            <p className="tag">{recipe.strCategory.toUpperCase()}</p>
          </div>
        </div>
      </section>
      <hr />
      <div className="recipe-body">
        <div className="main">
          <IngredientsList ingList={ingredients()} />
          <Directions steps={steps()} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
