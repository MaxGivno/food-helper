import React, { useEffect } from "react";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";
import { connect } from "react-redux";
import { getMeals } from "../actions/mealActions";
import PropTypes from "prop-types";

const Browse = (props) => {
  // const { recentMeals, randomMeals } = meals;

  useEffect(() => {
    props.getMeals();
  }, []);

  const { meals } = props.meal;

  return (
    <>
      <Hero />
      <PageSection title={"Recently added"} meals={meals} />
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
