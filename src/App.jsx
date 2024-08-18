import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./context";
import { AppProvider } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Meals from "./pages/MealsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MealPage from "./pages/MealDetailsPage";
import CategoriesPage from "./pages/CategoriesPage";
import Ingredients from "./pages/Ingredients";

function App() {
  return (
    <AppProvider>
      <Router>
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
      </Router>
    </AppProvider>
  );
}

export default App;
