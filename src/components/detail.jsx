import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailTrendingMovies } from '../api/api'; // Sesuaikan dengan fungsi API Anda

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    DetailTrendingMovies(id, () => {
      
    })
  },[id])
  return (
    <div className="container">
      <h1 className="text-2xl text-white ml-10 mt-20 mb-10">{movie.title}</h1>
      <div className="detail-content px-10">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" />
        <div className="mt-4">
          <p className="text-white text-lg font-bold">{movie.title}</p>
          <p className="text-white text-sm text-center font-semibold mt-2">{movie.overview}</p>
          <p className="text-white text-lg mt-2">
            <i className="bi bi-star-fill text-xl text-yellow-500"></i> {movie.vote_average}
          </p>
          {/* Tampilkan informasi lainnya tentang film */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
