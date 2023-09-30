import Navbar from './components/navbar'
import Trending from './components/trending'
import Upcoming from './components/tvseries'
import TopRated from './components/toprated'
import Landing from './components/landingPage'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Menambahkan event listener untuk mendeteksi scroll
    window.addEventListener('scroll', handleScroll);

    // Menghapus event listener saat komponen dilepas
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Jika pengguna menggulir lebih dari 100 piksel, tampilkan tombol
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Menggulir halaman kembali ke atas
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animasi scroll halus (opsional)
    });
  };
    return (
        <>
         <div className="wrapper h-screen">
        <Navbar title="MovieApp"/>
        <Landing/>
        <Trending/>
        <TopRated/>
        <Upcoming/>
        <Footer/>
        </div>
        <div>
      {isVisible && (
          <button
          className="fixed z-[999] bottom-4 right-10 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
        </>
    )
}
export default Home