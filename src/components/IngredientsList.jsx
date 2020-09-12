import React from "react";

function IngredientsList({ ingList }) {
  return (
    <section className="ingredients">
      <h3 className="recipe-element-title">Ingredients:</h3>
      <div>{ingList}</div>
    </section>
  );
}

export default IngredientsList;
