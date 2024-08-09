import React from "react";
import { useGlobalContext } from "../context";
import { AiFillHeart } from "react-icons/ai";

const Favorites = () => {
  const { favouritesMeals, selectMeal, removeFromFavorites } =
    useGlobalContext();

  if (favouritesMeals.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold">No favorites added yet.</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>
      <div className="flex flex-wrap gap-4">
        {favouritesMeals.map((meal) => (
          <div
            key={meal.idMeal}
            className="relative w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-full object-cover rounded-lg"
              onClick={() => selectMeal(meal.idMeal,true)}
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors duration-300"
              onClick={() => removeFromFavorites(meal.idMeal)}
            >
              <AiFillHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
