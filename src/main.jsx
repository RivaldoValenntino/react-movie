import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import TvSeriesPage from './Series';
import MovieListPage from './Film';
import Intro from './Intro';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/all-movies" element={<Home />} />
        <Route path="/list-tv" element={<TvSeriesPage />} />
        <Route path="/list-movies" element={<MovieListPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
