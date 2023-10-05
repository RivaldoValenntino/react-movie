import axios from "axios";

const BaseUrl = 'https://api.themoviedb.org/3';
const apiKey = '286f029f10334a6789fb446150403847';


export const fetchTopRatedMovies = () => {
  return axios.get(`${BaseUrl}/movie/top_rated`, {
    params: {
      api_key: apiKey,
    },
  });
};
export const AllMoviesAPI = (page) => {
  return axios.get(`${BaseUrl}/discover/movie`, {
    params: {
      api_key: apiKey,
      page: page,
    },
  });
};
export const TrendingMovies = () => {
  return axios.get(`${BaseUrl}/discover/movie?sort_by=popularity.desc`, {
    params: {
      api_key: apiKey,
    },
  });
};
export const fetchMoviesByGenres = async (genreId) => {
  return axios.get(`${BaseUrl}/discover/movie`, {
    params: {
      api_key: apiKey,
      with_genres: genreId.join(','), // Menggabungkan genreIds dengan koma
      sort_by: 'popularity.desc', // Anda juga bisa menambahkan parameter 'sort_by' sesuai kebutuhan
    },
  });
};

export const fetchTvMovies = (page) => {
  return axios.get(`${BaseUrl}/tv/top_rated`, {
    params: {
      api_key: apiKey,
      page: page,
    },
  });
};


export const searchMovies = async (q) => {
  const search = await axios.get (`${BaseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  return search.data;
}
export const searchTv = async (q) => {
  const search = await axios.get(`${BaseUrl}/search/tv?query=${q}&api_key=${apiKey}`);
  return search.data;
}