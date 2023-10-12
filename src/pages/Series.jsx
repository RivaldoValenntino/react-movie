import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Series from "../components/cards/tvseries";
import SearchSeries from "../components/cards/searchSeries";
const TvSeriesPage = () => {
  return (
    <>
      <Navbar title="MovieApp" />
      <SearchSeries />
      <Series />
      <Footer />
    </>
  );
};

export default TvSeriesPage;
