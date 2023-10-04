import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home.jsx'
import TvSeriesPage from './Series';
import MovieListPage from './Film';
import Intro from './Intro';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />
  },
  {
    path: '/all-movies',
    element: <Home/>
  },
  {
    path: '/list-tv',
    element: <TvSeriesPage />
  },
  {
    path: '/list-movies',
    element: <MovieListPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
