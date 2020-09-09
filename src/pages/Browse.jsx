import React from "react";
import Hero from "../components/Hero";

function Browse({ cards }) {
  return (
    <>
      <Hero />
      <div className="cards-container">{cards}</div>;
    </>
  );
}

export default Browse;
