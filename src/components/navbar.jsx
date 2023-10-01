import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? 'bg-[#010101] fixed w-full top-0 p-4 z-[999]' : 'lg:bg-transparent bg-[#010101] fixed w-full top-0 p-4 z-[999]';

  return (
    <nav className={navbarClass}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold" style={{ fontFamily: 'Poppins' }}>
          {props.title}
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <button
              onClick={closeMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <i className="bi bi-x-lg text-3xl"></i> {/* Ikon tutup (X) */}
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <i className="bi bi-list text-3xl"></i> {/* Ikon hamburger */}
            </button>
          )}
        </div>
        <div className="hidden md:flex space-x-4 justify-center" style={{ fontFamily: 'Poppins' }}>
          <Link to={'/'}>
            <button className="text-white links hover:text-gray-300 focus:outline-none">
              <i className="bi bi-house-door text-md mr-2"></i>Home
            </button>
          </Link>
          <Link to={'/list-movies'} className="text-white links">
            <i className="bi bi-film text-md mr-2"></i>All Movies
          </Link>
        </div>
      </div>
      {/* Hamburger Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-transparent" style={{ fontFamily: 'Poppins' }}>
          <Link to={'/'} className="block text-white py-2">
            <i className="bi bi-house-door text-md mr-2"></i>Home
          </Link>
          <Link to={'/list-movies'} className="block text-white py-2">
            <i className="bi bi-film text-sm mr-2"></i>All Movies
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
