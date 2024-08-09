import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavourites, removeFromFavorites,favouritesMeals } =
    useGlobalContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  if (!loading && (!meals || meals.length < 1)) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-3"
        role="alert"
      >
        <strong className="font-bold">Sorry!</strong>
        <span className="block sm:inline">No meals found.</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover rounded-t-lg"
            onClick={() => selectMeal(meal.idMeal)}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {meal.strMeal}
            </h2>
            <div className="mt-4">
              {favouritesMeals.some(
                (favourite) => favourite.idMeal === meal.idMeal
              ) ? (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300 flex items-center"
                  onClick={() => removeFromFavorites(meal.idMeal)}
                >
                  <AiOutlineHeart className="mr-2" />
                  Unlike
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center"
                  onClick={() => addToFavourites(meal.idMeal)}
                >
                  <AiOutlineHeart className="mr-2" />
                  Like
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meals;
