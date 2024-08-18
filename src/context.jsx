import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const SEARCH_MEAL_URL = `${import.meta.env.VITE_API_BASE_URL}/search.php?s=`;
const SEARCH_MEAL_BY_LETTER_URL = `${import.meta.env.VITE_API_BASE_URL}/search.php?f=`;
const LOOKUP_MEAL_URL = `${import.meta.env.VITE_API_BASE_URL}/lookup.php?i=`;
const RANDOM_MEAL_URL = `${import.meta.env.VITE_API_BASE_URL}/random.php`;
const RANDOM_SELECTION_URL = `${import.meta.env.VITE_API_BASE_URL}/randomselection.php`;
const CATEGORIES_URL = `${import.meta.env.VITE_API_BASE_URL}/categories.php`;
const LATEST_MEALS_URL = `${import.meta.env.VITE_API_BASE_URL}/latest.php`;
const LIST_URL = `${import.meta.env.VITE_API_BASE_URL}/list.php`;
const FILTER_BY_INGREDIENT_URL = `${import.meta.env.VITE_API_BASE_URL}/filter.php?i=`;
const FILTER_BY_CATEGORY_URL = `${import.meta.env.VITE_API_BASE_URL}/filter.php?c=`;
const FILTER_BY_AREA_URL = `${import.meta.env.VITE_API_BASE_URL}/filter.php?a=`;

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favouritesMeals, setFavouritesMeals] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMealDetails = async (idMeal) => {
    setLoading(true);
    try {
      const { data } = await axios(`${LOOKUP_MEAL_URL}${idMeal}`);
      setSelectedMeal(data.meals[0]);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomMeal = async () => {
    fetchMeals(RANDOM_MEAL_URL);
  };

  const fetchRandomSelection = async () => {
    fetchMeals(RANDOM_SELECTION_URL);
  };

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const { data } = await axios(CATEGORIES_URL);
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }finally{
      setLoading(false)
    }
  };

  const fetchLatestMeals = async () => {
    try {
      const { data } = await axios(LATEST_MEALS_URL);
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching latest meals:", error);
    }
  };


  const filterMealsByIngredient = (ingredient) => {
    fetchMeals(`${FILTER_BY_INGREDIENT_URL}${ingredient}`);
  };

  const filterMealsByCategory = (category) => {
    fetchMeals(`${FILTER_BY_CATEGORY_URL}${category}`);
  };

  const filterMealsByArea = (area) => {
    fetchMeals(`${FILTER_BY_AREA_URL}${area}`);
  };

  const addToFavourites = (idMeal) => {
    if (!favouritesMeals.find((meal) => meal.idMeal === idMeal)) {
      const meal = meals.find((meal) => meal.idMeal === idMeal);
      const updatedFavourites = [...favouritesMeals, meal];
      setFavouritesMeals(updatedFavourites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavourites));
    }
  };

  const removeFromFavourites = (idMeal) => {
    const updatedFavourites = favouritesMeals.filter((meal) => meal.idMeal !== idMeal);
    setFavouritesMeals(updatedFavourites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavourites));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchMeals(SEARCH_MEAL_URL); // Initial fetch
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchMeals(`${SEARCH_MEAL_URL}${searchTerm}`);
    }
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchTerm,
        fetchMeals,
        fetchMealDetails,
        fetchRandomMeal,
        fetchRandomSelection,
        fetchCategories,
        fetchLatestMeals,
        filterMealsByIngredient,
        filterMealsByCategory,
        filterMealsByArea,
        selectedMeal,
        showModal,
        closeModal,
        addToFavourites,
        removeFromFavourites,
        favouritesMeals,
        categories,
        areas,
        ingredients
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
