import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { getMealById } from "../actions/mealActions";
import PropTypes from "prop-types";

// import StarRating from "../components/StarRating";
import IngredientsList from "../components/IngredientsList";
import Directions from "../components/Directions";

const Recipe = (props) => {
  // Get recipe id from link
  const { recipeId } = useParams();

  const { getMealById, meal } = props;

  useEffect(() => {
    getMealById(recipeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);

  // Find the recipe by id
  // const recipe = props.meals.filter((meal) => meal._id === recipeId)[0];
  const recipe = meal.meals[0];

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
        <iframe
          title={recipe.name}
          className="yt-container"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${recipe.youtubeUrl.replace(
            "https://www.youtube.com/watch?v=",
            ""
          )}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="main">
          <IngredientsList ingredients={recipe.ingredients} />
          <Directions instructions={recipe.instructions} />
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  getMealById: PropTypes.func.isRequired,
  meal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal,
});

export default connect(mapStateToProps, { getMealById })(Recipe);
