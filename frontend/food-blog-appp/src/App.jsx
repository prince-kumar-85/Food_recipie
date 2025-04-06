import React from 'react'
import './App.css'
 import Home from './Pages/Home'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'

const getAllRecipes = async () => {
  let allRecipes = [];
  await axios.get('http://localhost:5000/recipe').then((response) => {
    allRecipes = response.data; // fixed: changed res.data to response.data
  });
  return allRecipes;
};



const router = createBrowserRouter([
  {path:"/", element:<MainNavigation/>,children:[
    {path: '/', element: <Home />,loader:getAllRecipes},

  ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  )
}

export default App
