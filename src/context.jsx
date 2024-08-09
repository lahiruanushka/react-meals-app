import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favouritesMeals, setFavouriteMeals] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl);
  };

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favouritesMeals.find((meal) => meal.idMeal === idMeal);
    }
    meal = meals.find((meal) => meal.idMeal === idMeal);
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavourites = (idMeal) => {
    const alreadyFavourite = favouritesMeals.find(
      (meal) => meal.idMeal === idMeal
    );
    if (alreadyFavourite) return;

    const meal = meals.find((meal) => meal.idMeal === idMeal);

    const updatedFavourites = [...favouritesMeals, meal];
    setFavouriteMeals(updatedFavourites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavourites));
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavouries = favouritesMeals.filter(
      (meal) => meal.idMeal !== idMeal
    );
    setFavouriteMeals(updatedFavouries);
    localStorage.setItem("favorites", JSON.stringify(updatedFavouries));
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchTerm,
        fetchRandomMeal,
        selectedMeal,
        selectMeal,
        showModal,
        closeModal,
        addToFavourites,
        removeFromFavorites,
        favouritesMeals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
