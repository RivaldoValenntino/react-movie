import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home.jsx'
import SearchPage from './Search.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />
  },
  {
    path: '/list-movies',
    element: <Home/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
