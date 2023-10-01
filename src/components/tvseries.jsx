import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchTvMovies } from '../api/api';

const Series = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTvMovies(page);
        const newTvSeries = response.data.results;

        setTvSeries((prevSeries) => [...prevSeries, ...newTvSeries]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-2xl text-white ml-10 mt-10 mb-10 font-semibold" id="tvseries">
          All Tv Series
        </h1>
        <section className="trending-section grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10">
          {tvSeries.map((tv) => (
            <div
              className="card relative overflow-hidden rounded-lg shadow-lg bg-opacity-50 backdrop-blur-md transition duration-300 hover:scale-105 z-50"
              key={tv.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={tv.title}
                className="w-full h-full object-cover"
              />
              <div className="card-desc absolute inset-0 flex flex-col justify-center items-center text-gray opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg p-4">
                <h3
                  className="text-slate-50 lg:text-xl md:text-sm text-center font-bold text-shadow-md"
                  style={{ textShadow: '3px 3px 5px #000000' }}
                >
                  {tv.name}
                </h3>
                <p
                  className="text-slate-50 text-md md:text-sm text-center font-semibold text-shadow-md hidden md:block"
                  style={{ textShadow: '3px 3px 5px #000000' }}
                >
                  {tv.overview}
                </p>
                <p
                  className="text-slate-50 text-sm text-center font-semibold text-shadow-md block md:hidden"
                  style={{ textShadow: '3px 3px 5px #000000' }}
                >
                  {tv.overview.length > 120 ? `${tv.overview.slice(0, 120)}...` : tv.overview}
                </p>
                <span className="text-xl text-white mt-2 font-bold" style={{ textShadow: '1px 1px 3px #000000' }}>
                  <i className="bi bi-star-fill text-xl text-yellow-500"></i> {tv.vote_average}
                </span>
              </div>
            </div>
          ))}
        </section>
        {page < 20 && (
          <button
            className="mt-4 mx-auto block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Series;
