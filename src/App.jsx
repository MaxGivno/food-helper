import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Recipe from "./pages/Recipe";
import Browse from "./pages/Browse";

import { AppContext } from "./AppContext";

export default function App() {
  const { recipes } = useContext(AppContext);
  // const [searchTerm, setSearchTerm] = useState("");

  const cards = recipes.map((recipe) => (
    <ItemCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Browse cards={cards} />
        </Route>
        <Route path="/recipe/:recipeId">
          <Recipe />
        </Route>
      </Switch>
    </div>
  );
}
