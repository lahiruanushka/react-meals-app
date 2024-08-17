import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import MealItem from "../components/MealItem";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";
  const SEARCH_MEAL_URL = `${API_BASE_URL}/search.php?s=`;
  const { meals, fetchMeals, searchTerm } = useGlobalContext();

  useEffect(() => {
    if (searchTerm) {
      fetchMeals(`${SEARCH_MEAL_URL}${searchTerm}`);
    } else {
      fetchMeals(`${SEARCH_MEAL_URL}`);
    }
  }, [searchTerm]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Discover Delicious Meals
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Explore a variety of meal options to satisfy your cravings.
          </p>
        </div>
        <div className="mt-8">
          <SearchBar />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {meals.length > 0 ? (
            meals.map((meal) => <MealItem meal={meal} key={meal.idMeal} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No meals found. Try a different search term.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
