import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Work',
    path: '/work'
  }, {
    name: 'About',
    path: '/about'
  }];
  return <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-black/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-4xl">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="text-lg font-bold text-black hover:opacity-70 transition-opacity">
            AG
          </Link>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => <li key={item.path}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to={item.path} className={`text-sm font-medium transition-opacity ${isActive(item.path) ? 'text-black font-semibold' : 'text-gray-600 hover:text-black hover:opacity-70'}`}>
                    {item.name}
                  </Link>
                </motion.div>
              </li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-black/20">
          <nav className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {navItems.map(item => <li key={item.path}>
                  <Link to={item.path} className={`block text-sm font-medium transition-opacity ${isActive(item.path) ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}`} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </nav>
        </div>}
    </header>;
};