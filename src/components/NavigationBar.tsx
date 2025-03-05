import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/events', label: 'EVENTS' },
    { to: '/schedule', label: 'SCHEDULE' },
    { to: '/past-events', label: 'PAST EVENTS' },
    { to: '/student-council', label: 'STUDENT COUNCIL' },
    { to: '/about', label: 'ABOUT US' },
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-[#2F2F2F] text-[#F3CC9F] border-b-4 border-[#BF5745] shadow-lg shadow-[#BF5745]/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-medieval bg-gradient-to-r from-[#F3CC9F] to-[#BF5745] bg-clip-text text-transparent">
            Alkemy
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                className={`px-4 py-2 transition-opacity duration-200 ${
                  location.pathname === to 
                    ? 'text-[#BF5745]' 
                    : 'text-[#F3CC9F] hover:opacity-60'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#F3CC9F] hover:text-[#BF5745] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-[#2F2F2F] border-t-2 border-[#BF5745]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-4 py-2 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 transition-opacity duration-200 ${
                    location.pathname === to
                      ? 'text-[#BF5745]'
                      : 'text-[#F3CC9F] hover:opacity-60'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;