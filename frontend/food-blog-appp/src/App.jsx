import React from 'react'
import './App.css'
 import Home from './Pages/Home'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import MainNavigation from './components/MainNavigation'





const router = createBrowserRouter([
  {path:"/", element:<MainNavigation/>,children:[
    {path: '/', element: <Home />},

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
