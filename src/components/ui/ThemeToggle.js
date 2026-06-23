import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { useAppContext } from '../../contexts/AppContext';

function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useAppContext();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-xl text-slate-500 dark:text-slate-400
        hover:bg-slate-100 dark:hover:bg-slate-800
        hover:text-primary-600 dark:hover:text-primary-400
        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0,   opacity: 1 }}
            exit={{   rotate:  90,  opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <HiSun className="w-5 h-5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90,  opacity: 0 }}
            animate={{ rotate: 0,   opacity: 1 }}
            exit={{   rotate: -90,  opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <HiMoon className="w-5 h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default ThemeToggle;
