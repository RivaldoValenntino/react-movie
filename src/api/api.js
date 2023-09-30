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
export const TrendingMovies = () => {
  return axios.get(`${BaseUrl}/discover/movie?/sort_by=popularity.desc&`, {
    params: {
      api_key: apiKey,
    },
  });
};
export const DetailTrendingMovies = (id,callback) => {
    axios
      .get(`${BaseUrl}/movie/popular/${id}`, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
export const fetchUpcomingMovies = () => {
  return axios.get(`${BaseUrl}/tv/top_rated`, {
    params: {
      api_key: apiKey,
    },
  });
};


export const searchMovies = async (q) => {
  const search = await axios.get (`${BaseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  return search.data;
}