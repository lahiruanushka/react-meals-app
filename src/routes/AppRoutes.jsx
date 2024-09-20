import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage";
import Meals from "../pages/MealsPage";
import MealPage from "../pages/MealDetailsPage";
import FavoritesPage from "../pages/FavoritesPage";
import CategoriesPage from "../pages/CategoriesPage";
import Ingredients from "../pages/Ingredients";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="meals" element={<Meals />} />
        <Route path="meals/:id" element={<MealPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
