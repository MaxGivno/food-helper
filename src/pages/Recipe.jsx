import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import StarRating from "../components/StarRating";
import Tags from "../components/Tags";
import IngredientsList from "../components/IngredientsList";
import ForkedFrom from "../components/ForkedFrom";

import { AppContext } from "../AppContext";

function Recipe() {
  const { recipeId } = useParams();
  const { recipes } = useContext(AppContext);

  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  const ingredients = recipe.ingredient.length !== 0 && (
    <IngredientsList ingList={recipe.ingredient} />
  );

  const additionalIngredients = () => {
    if (
      recipe.ingredientGroup &&
      recipe.ingredientGroup[0] &&
      recipe.ingredientGroup[0].hasOwnProperty("name")
    ) {
      return (
        <>
          {recipe.ingredientGroup.map((ingList, i) => (
            <IngredientsList key={i} ingList={ingList} />
          ))}
        </>
      );
    }
  };

  const steps = recipe.step.map((item, i) => (
    <li key={i}>
      <ReactMarkdown source={item.description} />
    </li>
  ));
  const notes = recipe.notes && (
    <section className="notes">
      <h3 className="recipe-element-title">Notes:</h3>
      <ReactMarkdown source={recipe.notes} />
    </section>
  );
  const forkedFrom = <ReactMarkdown source={recipe.forked} />;

  return (
    <div className="recipe">
      <section className="title">
        <img src={recipe.image} alt={recipe.id} />
        <div className="title-info">
          <h1>{recipe.name}</h1>
          <p className="title-desc">{recipe.description}</p>
          <div className="icons">
            <StarRating rating={(Math.random() * (5 - 2) + 2).toFixed(1)} />
            <Tags tags={recipe.tag} />
          </div>
        </div>
      </section>
      <hr />
      <div className="recipe-body">
        <div className="main">
          <section className="ingredients">
            {ingredients}
            {additionalIngredients()}
          </section>
          <section className="steps">
            <h3 className="recipe-element-title">Directions:</h3>
            <ol className="steps-list">{steps}</ol>
          </section>
        </div>
        {notes}
        {recipe.hasOwnProperty("forked") && <ForkedFrom source={forkedFrom} />}
      </div>
    </div>
  );
}

export default Recipe;
