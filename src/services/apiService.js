import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SEARCH_MEAL_URL = `${API_BASE_URL}/search.php?s=`;
const SEARCH_MEAL_BY_LETTER_URL = `${API_BASE_URL}/search.php?f=`;
const LOOKUP_MEAL_URL = `${API_BASE_URL}/lookup.php?i=`;
const RANDOM_MEAL_URL = `${API_BASE_URL}/random.php`;
const RANDOM_SELECTION_URL = `${API_BASE_URL}/randomselection.php`;
const CATEGORIES_URL = `${API_BASE_URL}/categories.php`;
const LATEST_MEALS_URL = `${API_BASE_URL}/latest.php`;
const LIST_URL = `${API_BASE_URL}/list.php`;
const FILTER_BY_INGREDIENT_URL = `${API_BASE_URL}/filter.php?i=`;
const FILTER_BY_CATEGORY_URL = `${API_BASE_URL}/filter.php?c=`;
const FILTER_BY_AREA_URL = `${API_BASE_URL}/filter.php?a=`;

const apiService = {
  searchMeal: (query) => axios.get(`${SEARCH_MEAL_URL}${query}`),
  searchMealByLetter: (letter) => axios.get(`${SEARCH_MEAL_BY_LETTER_URL}${letter}`),
  lookupMeal: (id) => axios.get(`${LOOKUP_MEAL_URL}${id}`),
  randomMeal: () => axios.get(RANDOM_MEAL_URL),
  randomSelection: () => axios.get(RANDOM_SELECTION_URL),
  getCategories: () => axios.get(CATEGORIES_URL),
  getLatestMeals: () => axios.get(LATEST_MEALS_URL),
  getList: () => axios.get(LIST_URL),
  filterByIngredient: (ingredient) => axios.get(`${FILTER_BY_INGREDIENT_URL}${ingredient}`),
  filterByCategory: (category) => axios.get(`${FILTER_BY_CATEGORY_URL}${category}`),
  filterByArea: (area) => axios.get(`${FILTER_BY_AREA_URL}${area}`)
};

export default apiService;
