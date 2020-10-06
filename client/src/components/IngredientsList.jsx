import React from "react";

function IngredientsList({ ingredients }) {
  const ingList = ingredients.map((item, i) => (
    <p
      key={i}
      className="ingredient"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={`https://www.themealdb.com/images/ingredients/${item.ingredient}-Small.png`}
        style={{ height: "100px", width: "100px", objectFit: "scale-down" }}
        alt={item.ingredient}
      />
      <span
        style={{ marginTop: "0rem" }}
      >{`${item.measure} ${item.ingredient}`}</span>
    </p>
  ));

  return (
    <section className="ingredients">
      <h3 className="recipe-element-title">Ingredients:</h3>
      <div>{ingList}</div>
    </section>
  );
}

export default IngredientsList;
