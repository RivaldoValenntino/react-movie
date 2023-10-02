import { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '../api/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const TopRated = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies()
      .then((response) => {
        setTopMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // ... (kode komponen lainnya tetap sama)

      return (
          <>
          <div className="container">
            <h1 className="text-2xl text-white ml-10 mt-20 mb-10 font-semibold" id='toprated'>Top Rated Movies</h1> 
            <section className="trending-section grid grid-cols-2 lg:grid-cols-4 gap-5 px-10">
            {topMovies.map((movie) => (
               <div className="card relative overflow-hidden rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md transition duration-300 hover:scale-105 z-50" key={movie.id}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" effect='blur' />
               <div className="card-desc absolute inset-0 flex flex-col justify-center items-center text-gray opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg p-4">
                  <h3 className="text-slate-50 lg:text-xl md:text-sm text-center font-bold text-shadow-md" style={{ textShadow: '3px 3px 5px #000000' }}>{movie.title}</h3>
                  <p className="text-slate-50 text-md md:text-sm text-center font-semibold text-shadow-md hidden md:block" style={{ textShadow: '3px 3px 5px #000000' }}>{movie.overview}</p>
                  <p className="text-slate-50 text-sm text-center font-semibold text-shadow-md block md:hidden" style={{ textShadow: '3px 3px 5px #000000' }}>
                    {movie.overview.length > 70 ? `${movie.overview.slice(0, 70)}...` : movie.overview}
                 </p>
                  <span className="text-xl text-white mt-2 font-bold" style={{ textShadow: '1px 1px 3px #000000' }}><i className="bi bi-star-fill text-xl text-yellow-500"></i>  {movie.vote_average}</span>
                  <p className="text-white text-center text-md font-semibold" style={{ textShadow: '3px 3px 5px #000000' }}>Release: {movie.release_date.split('-')[0]}</p>
               </div>
             </div>
             
            ))}
          </section>
        </div>

          </>
      )
  }
  export default TopRated