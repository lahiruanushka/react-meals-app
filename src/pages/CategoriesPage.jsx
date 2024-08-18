import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import CategoryCard from "../components/CategoryCard";

const MAX_DESCRIPTION_LENGTH = 100; // Maximum length of the description before truncating

const CategoriesPage = () => {
  const { fetchCategories, categories, loading } = useGlobalContext();
  const [expandedCategories, setExpandedCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []); // Fetch categories when the component mounts

  const toggleDescription = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Categories
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">Loading categories...</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard
                key={category.idCategory}
                category={category}
                isExpanded={expandedCategories.includes(category.idCategory)}
                onToggle={toggleDescription}
              />
            ))
          ) : (
            <p className="text-center text-lg text-gray-600">No categories found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default CategoriesPage;
