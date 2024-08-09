import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden w-11/12 sm:w-2/3 lg:w-1/2">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{selectedMeal.strMeal}</h2>
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="h-48 overflow-y-auto mb-4">
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <p className="text-gray-700">{selectedMeal.strInstructions}</p>
          </div>
          <div className="mb-4">
            <a
              href={selectedMeal.strSource}
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
