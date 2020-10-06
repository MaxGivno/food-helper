import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

import Header from "./components/Header";
import Recipe from "./pages/Recipe";
import Browse from "./pages/Browse";

// import useTheMealDB from "./hooks/useTheMealDB";

const App = (props) => {
  // const { recentMeals, randomMeals } = useTheMealDB();

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {/* <Browse meals={{ recentMeals, randomMeals }} /> */}
          <Browse />
        </Route>
        <Route path="/recipe/:recipeId">
          {/* <Recipe meals={{ recentMeals, randomMeals }} /> */}
          <Recipe />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
