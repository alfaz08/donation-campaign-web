import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './ErrorPage/ErrorPage';
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import CardDetails from './Pages/CardDetails.jsx/CardDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
     
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader:()=>fetch('/data.json')
      } ,
      {
        path: "/cards/:id",
        element: <CardDetails></CardDetails>,
        loader:()=>fetch('/data.json')
      }
    ]
  }
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
