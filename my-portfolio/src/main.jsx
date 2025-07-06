import React from 'react';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import WorkProof from './pages/WorkProof';
import AboutMe from './pages/AboutMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/projects',
      element:<WorkProof/>
    },
    {
      path:'/about-me',
      element:<AboutMe/>
    }
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
)
  
