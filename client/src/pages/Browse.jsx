import React, { useEffect } from "react";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

const Browse = (props) => {
  // const { recentMeals, randomMeals } = meals;

  return (
    <>
      <Hero />
      <PageSection title={"Recently added"} meals={props.meals} />
      {/* <PageSection title={"Recently added"} meals={recentMeals} />
    <PageSection title={"Random selection"} meals={randomMeals} /> */}
    </>
  );
};

export default Browse;
