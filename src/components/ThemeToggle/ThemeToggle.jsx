import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative p-2 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 border border-light-border dark:border-dark-border text-slate-700 dark:text-slate-300 transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-400 fill-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 fill-indigo-600" />
        )}
      </motion.div>
    </button>
  );
};
export default ThemeToggle;
