import React, { useEffect } from "react";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

import { connect } from "react-redux";
import { getMeals } from "../actions/mealActions";
import PropTypes from "prop-types";

const Browse = (props) => {
  // const { recentMeals, randomMeals } = meals;

  const { getMeals, meal } = props;

  useEffect(() => {
    getMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <PageSection title={"Recently added"} meals={meal.meals} />
      {/* <PageSection title={"Recently added"} meals={recentMeals} />
    <PageSection title={"Random selection"} meals={randomMeals} /> */}
    </>
  );
};

Browse.propTypes = {
  getMeals: PropTypes.func.isRequired,
  meal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal,
});

export default connect(mapStateToProps, { getMeals })(Browse);
