import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.webp';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle hover on menu items
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {/* Navbar */}

      <div className='h-30'>
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent '
            }`}
        >
          <div
            className={`mx-auto border border-gray-300 rounded-2xl ${isScrolled ? 'max-w-full px-4 sm:px-6 lg:px-8 rounded-none' : 'max-w-[1500px] px-4 sm:px-6 lg:px-8'
              } py-4 flex justify-between items-center font-[sans-serif]`}
          >
            {/* Logo */}
            <div>
              <NavLink to="/">
                <img src={logoImg} alt="Logo" className="h-10" />
              </NavLink>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8 ">
              <ul className="flex space-x-8 text-xl text-[#212832]">
                <li className='hover:text-[#309255] transition duration-300'><NavLink to="/">Home</NavLink></li>

                {/* All Courses Dropdown */}
                <li
                  className='relative'
                  onMouseEnter={() => handleMouseEnter('courses')}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className='hover:text-[#309255] transition duration-300 cursor-pointer'>
                    Courses
                  </span>
                  {hoveredItem === 'courses' && (
                    <ul className='absolute top-5 left-0 bg-white border border-gray-200 shadow-lg mt-2 py-2 w-48 border-t-black transition-all duration-300'>
                      <li className='px-4 py-2 hover:bg-[#e7f8ee] hover:text-[#309255] transition duration-300'>
                        Python
                      </li>
                      <li className='px-4 py-2 hover:bg-[#e7f8ee] hover:text-[#309255]  transition duration-300'>
                        Mern Stack
                      </li>
                      <li className='px-4 py-2 hover:bg-[#e7f8ee] hover:text-[#309255]  transition duration-300'>
                        C++
                      </li>
                      <li className='px-4 py-2 hover:bg-[#e7f8ee] hover:text-[#309255]  transition duration-300'>
                        Java
                      </li>
                    </ul>
                  )}
                </li>

                <li className='hover:text-[#309255] transition duration-300'><NavLink to="/aboutus">About us</NavLink></li>
                <li className='hover:text-[#309255] transition duration-300'><NavLink to="/contactus">Contact us</NavLink></li>

              </ul>
            </div>

            {/* Sign In / Sign Up Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <NavLink to="/login"><span className="text-xl hover:text-[#309255] transition duration-300">Log In</span></NavLink>
              <NavLink to="/signup">
                <span className='text-xl bg-white py-3 px-7 border border-[#309255] rounded-xl hover:text-white hover:bg-[#309255] transition duration-300'>
                  Sign Up
                </span>
              </NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="p-4">
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Content */}
            <ul className="flex flex-col space-y-4 text-lg text-[#212832] mt-20">
              <li className='hover:text-[#309255] transition duration-300'>Home</li>
              <li className='hover:text-[#309255] transition duration-300'>All Courses</li>
              <li className='hover:text-[#309255] transition duration-300'>Pages</li>
              <li className='hover:text-[#309255] transition duration-300'>Blog</li>
              <li className='hover:text-[#309255] transition duration-300'>Contact</li>
            </ul>
            <div className="mt-4 flex flex-col space-y-4">
              <span className="text-lg hover:text-[#309255] transition duration-300">Sign In</span>
              <span className='bg-white py-2 px-6 border border-[#309255] rounded-xl hover:text-white hover:bg-[#309255] transition duration-300 text-center'>
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}