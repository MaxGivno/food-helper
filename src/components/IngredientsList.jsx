import React from "react";

function IngredientsList({ ingList }) {
  const list = ingList.hasOwnProperty("name") ? ingList.ingredient : ingList;
  return (
    <>
      <h3 className="recipe-element-title">
        {ingList.hasOwnProperty("name") ? ingList.name + ":" : "Ingredients:"}
      </h3>
      <div>
        {list.map((item, i) => (
          <p className="ingredient" key={i}>
            <strong>{item.amount}</strong> {item.unit} {item.name}{" "}
            {item.preparation}
          </p>
        ))}
      </div>
    </>
  );
}

export default IngredientsList;
