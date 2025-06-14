import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink as LinkType } from '../types';
import { SearchIcon, MenuIcon, CloseIcon, UserIcon } from './icons';
import Button from './Button';
// import { Link } from 'react-router-dom'; // Ideally use Link for SPA navigation

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-exergy-dark-bg shadow-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex-shrink-0">
            <a href="/" className="text-white" aria-label="Homepage">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto max-w-[200px] object-contain"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {NAV_LINKS.map((link: LinkType) => (
              <a 
                key={link.name} 
                href={link.href} // Using simple href for now. For SPA, <Link to={link.href}> is better.
                className="font-sans text-exergy-text-light hover:text-exergy-green transition-colors duration-300 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <button aria-label="Search" className="text-exergy-text-light hover:text-exergy-green transition-colors duration-300">
              <SearchIcon className="w-5 h-5" />
            </button>
            <Button variant="primary" className="px-4 py-2 text-xs" leftIcon={<UserIcon className="w-3.5 h-3.5"/>}>
              Login/Signup
            </Button>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-exergy-text-light hover:text-exergy-green focus:outline-none p-2"
            >
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-exergy-dark-bg absolute w-full shadow-xl">
          <nav className="px-3 pt-2 pb-4 space-y-1 sm:px-4">
            {NAV_LINKS.map((link: LinkType) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-exergy-text-light hover:bg-exergy-dark-card hover:text-exergy-green font-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-3 flex items-center border-t border-exergy-dark-input mt-2">
                <Button variant="primary" className="w-full text-sm" leftIcon={<UserIcon className="w-4 h-4"/>}>
                  Login/Signup
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;