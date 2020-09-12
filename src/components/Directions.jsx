import React from "react";

function Directions({ steps }) {
  return (
    <section className="steps">
      <h3 className="recipe-element-title">Directions:</h3>
      <ol className="steps-list">{steps}</ol>
    </section>
  );
}

export default Directions;
