import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [text, setText] = useState("");

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  
  return (
    <form
      className="flex flex-col sm:flex-row items-center justify-center p-6 space-y-4 sm:space-y-0 sm:space-x-4"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full sm:w-96">
        <input
          type="text"
          placeholder="Search for a meal..."
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={handleChange}
        />
        <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Search
        </button>
        <button
          type="button"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
          onClick={handleRandomMeal}
        >
          Surprise Me!
        </button>
      </div>
    </form>
  );

};

export default Search;
