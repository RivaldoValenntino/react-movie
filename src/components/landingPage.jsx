import { searchMovies } from '../api/api';
import '../styles/landing.css';
import { useState, useEffect } from 'react';

const Landing = () => {
  const [moviesSearch, setSearchMovies] = useState([]);
  const search = async (q) => {
    if(q.length > 3){  
      const query = await searchMovies(q)
      setSearchMovies(query.results)
    }else{
      setSearchMovies([])
    }
  } 


    return (
        <>
        <div className="movie-image flex items-center w-full mb-10 z-[999]">
          <section>
            <div className="container px-4 md:px-10">
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
                <button className="btn px-10 md:px-2 py-5 text-white rounded-full text-xl border lg:w-60 w-full" style={{ textShadow: '5px 5px 3px #000000' }}>Play Trailer </button>
              </div>
            </div>
          </section>
        </div>
        <section>
            <div className="mb-5">
              <div className="relative mb-4 pt-10 flex w-full flex-wrap justify-center items-center">
              <input
                type="search"
                className="relative m-0 block w-1/2 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                onChange={({target}) => search(target.value)} />
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
          {moviesSearch.length > 0 && ( 
          <p className="text-center my-8 text-white">Search Result For "{moviesSearch[0].title}"</p>
        )}
        </section>
        <section className="trending-section grid grid-cols-2 md:grid-cols-4 gap-5 px-10">
            {moviesSearch.map((movie) => (
             <div className="card relative overflow-hidden rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md transition duration-300 hover:scale-105 z-50" key={movie.id}>
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" />
             <div className="card-desc absolute inset-0 flex flex-col justify-center items-center text-gray opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg p-4">
               <h3 className="text-slate-50 lg:text-xl md:text-sm text-center font-bold text-shadow-md" style={{ textShadow: '1px 1px 3px #000000' }}>{movie.title}</h3>
               <p className="text-slate-50 text-md md:text-sm text-center font-semibold text-shadow-md hidden md:block" style={{ textShadow: '1px 1px 3px #000000' }}>{movie.overview}</p>
               <p className="text-slate-50 text-sm text-center font-semibold text-shadow-md block md:hidden" style={{ textShadow: '1px 1px 3px #000000' }}>
                 {movie.overview.length > 70 ? `${movie.overview.slice(0, 70)}...` : movie.overview}
               </p>
               <span className="text-xl text-white mt-2 font-bold" style={{ textShadow: '1px 1px 5px #000000' }}><i className="bi bi-star-fill text-xl text-yellow-500"></i>  {movie.vote_average.toFixed(1)}</span>
               <p className="text-white text-center text-md font-semibold" style={{ textShadow: '1px 1px 3px #000000' }}>Release: {movie.release_date.split('-')[0]}</p>
             </div>
           </div>
          
            ))}
          </section>
        </>
    )
}

export default Landing;
