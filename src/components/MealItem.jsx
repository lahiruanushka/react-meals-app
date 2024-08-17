import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

const MealItem = ({ meal }) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
        <img
          alt={meal.strMeal}
          src={meal.strMealThumb}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-600 transition-colors duration-300">
            <AiOutlineEye className="h-6 w-6 mr-2" />
            View
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {meal.strMeal}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{meal.strArea}</p>
        <p className="text-sm font-medium text-gray-800 mt-2">
          {meal.strCategory}
        </p>
      </div>

      <div className="p-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center">
          <AiOutlineHeart className="h-6 w-6 mr-2" />
          Like
        </button>
      </div>
    </div>
  );
};

export default MealItem;
