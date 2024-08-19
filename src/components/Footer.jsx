import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/white_logo.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 flex justify-between items-center">
      
      <div className="flex items-center">
        <img src={Logo} alt="Stoa logo" className="h-8 mr-2" />
      </div>

      
      <div className="flex flex-col items-end">
       
        <nav className="mb-4">
          <ul className="flex space-x-6 font-serif text-lg">
            <li><a href="/daily">Stoa Daily</a></li>
            <li><a href="/events">Stoa Events</a></li>
            <li><a href="/community">Community</a></li>
          </ul>
        </nav>

        
        <nav className="mb-4">
          <ul className="flex space-x-4 text-sm uppercase text-gray-400">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/work" className="hover:text-white">Work at Stoa</a></li>
            <li><a href="/hire" className="hover:text-white">Hire from Stoa</a></li>
            <li><a href="/teach" className="hover:text-white">Teach at Stoa</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </nav>

        
        <div className="flex space-x-4 mb-4">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-600">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-600">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>

        
        <div className="text-xs mt-4 text-right">
          <p>© {new Date().getFullYear()} Stoa</p>
          <a href="/privacy" className="underline hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
