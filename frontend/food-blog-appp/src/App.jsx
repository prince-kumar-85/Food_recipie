import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from './components/MainNavigation';
import axios from 'axios';

import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';

// Loader to get all recipes
const getAllRecipes = async () => {
  try {
    const res = await axios.get('http://localhost:5000/recipe');
    return res.data;
  } catch (error) {
    console.error("Error fetching all recipes:", error);
    throw new Response("Failed to fetch recipes", { status: 500 });
  }
};

// Loader to get user's recipes
const getMyRecipes = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) return [];

    const res = await axios.get(`http://localhost:5000/recipe?createdBy=${user._id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching user recipes:", error);
    return [];
  }
};

// Loader to get favorite recipes from localStorage
const getFavRecipes = () => {
  try {
    const fav = JSON.parse(localStorage.getItem("fav"));
    return fav || [];
  } catch (error) {
    console.error("Error reading favorites:", error);
    return [];
  }
};

// Loader to get single recipe and its creator email
const getRecipe = async ({ params }) => {
  try {
    const recipeRes = await axios.get(`http://localhost:5000/recipe/${params.id}`);
    let recipe = recipeRes.data;

    const userRes = await axios.get(`http://localhost:5000/user/${recipe.createdBy}`);
    recipe = { ...recipe, email: userRes.data.email };

    return recipe;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw new Response("Recipe not found", { status: 404 });
  }
};

// Route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      { path: "/", element: <Home />, loader: getAllRecipes },
      { path: "/myRecipe", element: <Home />, loader: getMyRecipes },
      { path: "/favRecipe", element: <Home />, loader: getFavRecipes },
      { path: "/addRecipe", element: <AddFoodRecipe /> },
      { path: "/editRecipe/:id", element: <EditRecipe /> },
      { path: "/recipe/:id", element: <RecipeDetails />, loader: getRecipe },
    ]
  }
]);

// App component
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
