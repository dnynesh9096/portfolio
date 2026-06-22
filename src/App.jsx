import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { Loader } from './components/Loader/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated asset pre-loading timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      {!loading && <Home />}
    </ThemeProvider>
  );
}

export default App;
