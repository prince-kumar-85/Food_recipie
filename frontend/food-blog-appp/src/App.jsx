import React from 'react'
import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import AddFoodRecipe from './Pages/AddFoodRecipe'

// Fetching all recipes from the server
const getAllRecipes = async () => {
  let allRecipes = [];
  try {
    const response = await axios.get('http://localhost:5000/recipe');
    allRecipes = response.data; // Correct data assignment
  } catch (error) {
    console.error('Error fetching recipes:', error); // Error handling
  }
  return allRecipes; // Return the data (or an empty array if error occurs)
};

// Defining the routes with the loader function
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getAllRecipes, // Loader function that fetches data
      },
      { path: "/myRecipe", element: <Home /> },
      { path: "/favRecipe", element: <Home /> },
      { path: "/addRecipe", element: <AddFoodRecipe /> },
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
 