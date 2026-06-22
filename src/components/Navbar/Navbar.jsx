import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE_INFO } from '../../utils/constants';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { scrollToSection } from '../../utils/helpers';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current visible section to highlight navbar links
      const scrollPosition = window.scrollY + 120;
      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
    scrollToSection(id, 80);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Title */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center space-x-3 text-xl font-bold tracking-tight cursor-pointer font-sans group"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-[0_0_15px_rgba(139,92,246,0.2)] dark:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-110">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            {PROFILE_INFO.name}.
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer font-sans ${
                    activeLink === link.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeLink === link.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="h-5 w-[1px] bg-slate-300 dark:bg-slate-800" />
          
          <ThemeToggle />
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-light-border dark:border-dark-border bg-white dark:bg-dark-bg"
          >
            <ul className="px-6 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-left py-2 font-medium transition-colors duration-200 cursor-pointer font-sans ${
                      activeLink === link.id
                        ? 'text-primary-500'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
