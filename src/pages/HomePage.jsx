import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MealList from "../components/MealList";
import LoadingSpinner from "../components/LoadingSpinner";
import apiService from "../services/apiService";

const HomePage = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMeals = async (query) => {
    setLoading(true);
    try {
      const response = await apiService.searchMeal(query);
      setMeals(response.data.meals || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchMeals(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchMeals(searchQuery);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Discover Delicious Meals
          </h1>
          <p className="text-lg text-gray-700">
            Explore a variety of meal options to satisfy your cravings.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <LoadingSpinner message="Loading meals..." />
          </div>
        ) : error ? (
          <div className="text-red-600 text-center">
            <p>{error}</p>
          </div>
        ) : (
          <MealList meals={meals} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
