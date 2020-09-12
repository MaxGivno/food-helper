import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useTheMealDB() {
  const axiosWithBaseUrl = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v2/9973533/",
    responseType: "json"
  });
  const [recentMeals, setRecentMeals] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);

  const loadLatest = useCallback(() => {
    axiosWithBaseUrl.get("latest.php").then((response) => {
      console.log("Latest loaded");
      setRecentMeals(response.data.meals);
    });
  }, [axiosWithBaseUrl]);

  const loadRandom = useCallback(() => {
    axiosWithBaseUrl.get("randomselection.php").then((response) => {
      console.log("Random loaded");
      setRandomMeals(response.data.meals);
    });
  }, [axiosWithBaseUrl]);

  useEffect(() => {
    recentMeals && loadLatest();
    randomMeals && loadRandom();
  }, []);

  return { recentMeals, randomMeals };
}

export default useTheMealDB;
