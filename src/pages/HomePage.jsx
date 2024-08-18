import { useGlobalContext } from "../context";
import SearchBar from "../components/SearchBar";
import MealList from "../components/MealList";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
  const { meals, loading } = useGlobalContext();

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
          <SearchBar />
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <LoadingSpinner message="Loading meals..." />
          </div>
        ) : (
          <MealList meals={meals} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
