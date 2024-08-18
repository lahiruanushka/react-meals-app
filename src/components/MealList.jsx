import MealItem from "./MealItem";

const MealList = ({ meals }) => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      {meals.length > 0 ? (
        meals.map((meal) => <MealItem meal={meal} key={meal.idMeal} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No meals found. Try a different search term.
        </p>
      )}
    </div>
  );
};

export default MealList;
