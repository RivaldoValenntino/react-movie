import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home.jsx'
import Detail from './components/detail.jsx';
import {createRoot} from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/detail/:id',
    element: <Detail/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
