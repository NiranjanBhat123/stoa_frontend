import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#f3e3c4]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-[#9B2C2C] font-bold text-2xl">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <NavItem
              text="PROGRAMS"
              dropdown={['General Management', 'Marketing and Growth']}
              showArrow
            />
            <NavItem text="CHARTER HOLDERS" />
            <NavItem text="STOA DAILY" />
            <NavItem text="STOA EVENTS" />
            <NavItem text="COMMUNITY" />
            <button
              className="ml-4 text-[#9B2C2C] w-8 h-8 relative focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-8 rotate-45 top-4' : 'w-8 -translate-y-2 top-4'}`}></span>
              <span className={`block absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 w-0' : 'w-8 top-4'}`}></span>
              <span className={`block absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-8 -rotate-45 top-4' : 'w-8 translate-y-2 top-4'}`}></span>
            </button>
          </div>
          <button
            className="md:hidden text-[#9B2C2C] w-8 h-8 relative focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-8 rotate-45 top-4' : 'w-8 -translate-y-2 top-4'}`}></span>
            <span className={`block absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 w-0' : 'w-8 top-4'}`}></span>
            <span className={`block absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-8 -rotate-45 top-4' : 'w-8 translate-y-2 top-4'}`}></span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 px-4">
          <div className="space-y-2">
            <a href="#" className="block text-[#9B2C2C]">ABOUT</a>
            <a href="#" className="block text-[#9B2C2C]">WORK AT STOA</a>
            <a href="#" className="block text-[#9B2C2C]">HIRE FROM STOA</a>
            <a href="#" className="block text-[#9B2C2C]">TEACH AT STOA</a>
          </div>
          <div className="mt-4 flex justify-between">
            <a href="#" className="text-[#9B2C2C]"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-[#9B2C2C]"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-[#9B2C2C]"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className="text-[#9B2C2C]"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ text, dropdown, showArrow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => dropdown && setIsOpen(true)}
      onMouseLeave={() => dropdown && setIsOpen(false)}
    >
      <button
        className={`text-[#9B2C2C] hover:text-[#7C2424] font-semibold flex items-center ${showArrow ? 'cursor-pointer' : ''}`}
      >
        {text}
        {showArrow && <ExpandMoreIcon className="ml-1 text-[#9B2C2C]" />}
      </button>
      {dropdown && isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
          {dropdown.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-[#9B2C2C] hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
