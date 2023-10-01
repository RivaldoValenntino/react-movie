import { fetchMoviesByGenres, searchMovies } from '../api/api';
import '../styles/landing.css';
import { useState, useEffect } from 'react';

const Landing = () => {

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  const handleGenreClick = async (genre) => {
    // Salin array selectedGenres ke array baru
    const updatedGenres = [...selectedGenres];

    // Cek apakah genre sudah ada dalam selectedGenres
    const genreIndex = updatedGenres.indexOf(genre.id);

    if (genreIndex === -1) {
      // Jika genre belum ada, tambahkan ke selectedGenres
      updatedGenres.push(genre.id);
    } else {
      // Jika genre sudah ada, hapus dari selectedGenres
      updatedGenres.splice(genreIndex, 1);
    }

    // Atur state selectedGenres ke array baru
    setSelectedGenres(updatedGenres);

    // Memeriksa apakah ada genre yang dipilih
    if (updatedGenres.length === 0) {
      // Jika tidak ada genre yang dipilih, hapus semua data film
      setMoviesByGenre([]);
    } else {
      try {
        // Panggil API dengan semua genre yang dipilih
        const response = await fetchMoviesByGenres(updatedGenres);
        setMoviesByGenre(response.data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };


  const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },

    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    }
  ]



    return (
        <>
        <div className="movie-image flex items-center w-full z-[999]">
          <section>
            <div className="container lg:px-20 px-10">
              <h1 className="font-bold text-2xl md:text-4xl mb-2 shadow-black" style={{ fontFamily: 'Poppins', color: '#f5f5f5', textShadow: '2px 2px 3px #000000', letterSpacing: '2px' }}>Blue Beetle (2023)</h1>
              <div className="content">
                <p className="mb-4 lg:w-1/2 shadow-black" style={{ fontFamily: 'Poppins', color: '#f5f5f5', textShadow: '5px 5px 3px #000000' }}>
                  An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle.
                </p>
                <div className="score flex gap-2 items-center">
                  <i className="bi bi-star-fill text-2xl" style={{ color: '#f5c518' }}></i>
                  <i className="bi bi-star-fill text-2xl" style={{ color: '#f5c518' }}></i>
                  <i className="bi bi-star-fill text-2xl" style={{ color: '#f5c518' }}></i>
                  <i className="bi bi-star-fill text-2xl text-white"></i>
                  <i className="bi bi-star-fill text-2xl text-white"></i>
                  <p className="text-white text-2xl">6.2 / 10</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-10 text-center justify-around lg:flex-row lg:justify-start">
                <button className="btn bg-rose-500 px-10 md:px-2 py-5 text-white rounded-full text-xl lg:w-60 w-full">Watch Now </button>
                <button className="btn px-10 md:px-2 py-5 text-white rounded-full text-xl border lg:w-60 w-full hover:bg-" style={{ textShadow: '5px 5px 3px #000000' }}>Play Trailer </button>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="container text-white">
            <div className="flex flex-wrap justify-center items-center gap-5 py-10 scrollbar-hide">
              {genres.map((genre) => (
                <div
                  key={genre.id}
                  className={`rounded-full px-10 py-2 cursor-pointer ${selectedGenres.includes(genre.id) ? 'bg-blue-500 text-white' : 'bg-transparent text-white border'
                    }`}
                  onClick={() => handleGenreClick(genre)}
                >
                  {genre.name}
                </div>
              ))}
            </div>

          </div>
        </section>
        <section className="trending-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 mt-10">
          {moviesByGenre.map((movie) => (
            <div className="card relative overflow-hidden rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md transition duration-300 hover:scale-105 z-50" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" />
              <div className="card-desc absolute inset-0 flex flex-col justify-center items-center text-gray opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg p-4">
                <h3 className="text-slate-50 lg:text-xl md:text-sm text-center font-bold text-shadow-md" style={{ textShadow: '3px 3px 5px #000000' }}>{movie.title}</h3>
                <p className="text-slate-50 text-md md:text-sm text-center font-semibold text-shadow-md hidden md:block" style={{ textShadow: '3px 3px 5px #000000' }}>{movie.overview}</p>
                <p className="text-slate-50 text-sm text-center font-semibold text-shadow-md block md:hidden" style={{ textShadow: '3px 3px 5px #000000' }}>
                  {movie.overview}
                </p>
                <span className="text-xl text-white mt-2 font-bold" style={{ textShadow: '1px 1px 3px #000000' }}><i className="bi bi-star-fill text-xl text-yellow-500"></i>  {movie.vote_average.toFixed(1)}</span>
                <p className="text-white text-center text-md font-semibold" style={{ textShadow: '3px 3px 5px #000000' }}>Release: {movie.release_date.split('-')[0]}</p>
              </div>
            </div>

            ))}
          </section>
        </>
    )
}

export default Landing;
