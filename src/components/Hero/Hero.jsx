import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../Icons/SocialIcons';
import { PROFILE_INFO } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  const badgeVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const floatingBadges = [
    { text: '⚛️ React', top: '15%', left: '10%', delay: 0 },
    { text: '🚀 Node.js', top: '75%', left: '5%', delay: 1.5 },
    { text: '💻 Full Stack', top: '45%', right: '5%', delay: 0.8 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary-600/10 dark:bg-primary-600/15 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/15 blur-[100px]" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Content column */}
        <motion.div 
          className="md:col-span-7 flex flex-col justify-center space-y-6 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glowing Status Badge */}
          <motion.div 
            className="self-start flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase font-sans"
            variants={itemVariants}
          >
            <motion.span 
              className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" 
              variants={badgeVariants}
              animate="animate"
            />
            <span>Open for Opportunities</span>
          </motion.div>

          {/* Hello Greeting */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans leading-none text-slate-900 dark:text-white"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent">
              {PROFILE_INFO.name}
            </span>
          </motion.h1>

          {/* Role/Subtitle */}
          <motion.h2 
            className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 font-sans"
            variants={itemVariants}
          >
            {PROFILE_INFO.title}
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl font-sans leading-relaxed"
            variants={itemVariants}
          >
            {PROFILE_INFO.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-2"
            variants={itemVariants}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.45)] transition-all duration-300 cursor-pointer font-sans transform hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer font-sans"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Profiles */}
          <motion.div 
            className="flex items-center space-x-4 pt-4 text-slate-600 dark:text-slate-400"
            variants={itemVariants}
          >
            <a 
              href={PROFILE_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a 
              href={PROFILE_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href={PROFILE_INFO.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Interactive Image column */}
        <motion.div 
          className="md:col-span-5 flex justify-center items-center relative py-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        >
          {/* Glass Card Backdrop */}
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]">
            {/* Pulsing glow behind avatar */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-600 to-indigo-500 blur-xl opacity-20 dark:opacity-30" />
            
            {/* Image Border Container */}
            <div className="absolute inset-2 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-3 flex items-center justify-center">
              <img 
                src="/images/profile.jpg" 
                alt="Dnynesh Devkar Profile" 
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  // Fallback visual in case image fails to load
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `
                    <div class="w-full h-full rounded-2xl bg-gradient-to-br from-primary-600 to-indigo-500 flex items-center justify-center font-bold text-white text-7xl font-sans">
                      ${PROFILE_INFO.name[0]}
                    </div>
                  `;
                }}
              />
            </div>

            {/* Floating UI technology badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                className="absolute px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md text-xs font-semibold backdrop-blur-sm text-slate-800 dark:text-white"
                style={{
                  top: badge.top,
                  left: badge.left,
                  right: badge.right,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: badge.delay,
                }}
              >
                {badge.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Hero;
