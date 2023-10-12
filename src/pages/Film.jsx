import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AllMovies from "../components/cards/allMovies";
import MovieList from "../components/cards/searchMovies";
const MovieListPage = () => {
  return (
    <>
      <Navbar title="MovieApp" />
      <MovieList />
      <AllMovies />
      <Footer />
    </>
  );
};

export default MovieListPage;
