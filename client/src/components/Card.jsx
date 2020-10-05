import React from "react";
// import { Link } from "react-router-dom";

function Card({ meal }) {
  return (
    <div className="section-card">
      <div className="img-container">
        <img className="thumb" src={meal.imageUrl} alt="" />
      </div>
      <h3>{meal.name}</h3>
    </div>
  );
}

export default Card;
