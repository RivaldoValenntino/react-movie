import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import TvSeriesPage from './pages/Series';
import MovieListPage from './pages/Film';


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
