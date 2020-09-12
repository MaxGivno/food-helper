import React from "react";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

function Browse({ meals }) {
  const { recentMeals, randomMeals } = meals;
  return (
    <>
      <Hero />
      <PageSection title={"Recently added"} meals={recentMeals} />
      <PageSection title={"Random selection"} meals={randomMeals} />
    </>
  );
}

export default Browse;
