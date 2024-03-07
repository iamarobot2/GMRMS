import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Signup from './routes/Signup.jsx'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App />,
      errorElement:<ErrorPage />,
      children:
      [
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/signup',
          element:<Signup />
        }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
