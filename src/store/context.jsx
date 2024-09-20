import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [favouritesMeals, setFavouritesMeals] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addToFavourites = (idMeal) => {
    if (!favouritesMeals.find((meal) => meal.idMeal === idMeal)) {
      const meal = meals.find((meal) => meal.idMeal === idMeal);
      const updatedFavourites = [...favouritesMeals, meal];
      setFavouritesMeals(updatedFavourites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavourites));
    }
  };

  const removeFromFavourites = (idMeal) => {
    const updatedFavourites = favouritesMeals.filter(
      (meal) => meal.idMeal !== idMeal
    );
    setFavouritesMeals(updatedFavourites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavourites));
  };

  return (
    <AppContext.Provider
      value={{
        addToFavourites,
        removeFromFavourites,
        favouritesMeals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
