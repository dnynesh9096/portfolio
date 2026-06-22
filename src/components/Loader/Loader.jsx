import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.2 } 
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated outer glowing circle */}
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner static / pulsing glow logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border border-slate-700 bg-dark-bg flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.6)]"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/images/logo.png" 
            alt="Logo Loading" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dynamic Loading Texts */}
        <motion.h2
          className="mt-8 text-xl font-semibold tracking-wider bg-gradient-to-r from-white via-slate-300 to-primary-400 bg-clip-text text-transparent font-sans"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Dnynesh Devkar
        </motion.h2>

        <motion.p
          className="mt-2 text-sm text-slate-500 font-sans uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6 }}
        >
          Portfolio Loading
        </motion.p>
        
        {/* Progress indicator bar */}
        <div className="w-40 h-[2px] bg-slate-800 rounded-full mt-4 overflow-hidden">
          <motion.div 
            className="h-full bg-primary-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};
