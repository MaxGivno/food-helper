import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./styles.css";

import Header from "./components/Header";
import Recipe from "./pages/Recipe";
import Browse from "./pages/Browse";

import { connect } from "react-redux";
import { getMeals } from "./actions/mealActions";
import PropTypes from "prop-types";

// import useTheMealDB from "./hooks/useTheMealDB";

const App = (props) => {
  // const { recentMeals, randomMeals } = useTheMealDB();

  const { getMeals } = props;

  useEffect(() => {
    getMeals();
  }, [getMeals]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {/* <Browse meals={{ recentMeals, randomMeals }} /> */}
          <Browse meals={props.meal.meals} />
        </Route>
        <Route path="/recipe/:recipeId">
          {/* <Recipe meals={{ recentMeals, randomMeals }} /> */}
          <Recipe meals={props.meal.meals} />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  getMeals: PropTypes.func.isRequired,
  meal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal,
});

export default withRouter(connect(mapStateToProps, { getMeals })(App));
