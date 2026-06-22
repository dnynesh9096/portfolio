import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { Award, Calendar, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-white/10 dark:bg-dark-bg/10 border-t border-light-border dark:border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight font-sans text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education Timeline
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-primary-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="text-slate-600 dark:text-slate-400 mt-4 text-base font-sans leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My academic credentials and educational background.
          </motion.p>
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line indicator */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
          
          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={edu.id} className="relative flex flex-col sm:flex-row items-stretch sm:justify-between w-full">
                  {/* Left spacer / content block */}
                  <div className={`w-full sm:w-[45%] flex ${isEven ? 'sm:justify-end text-left sm:text-right' : 'sm:justify-start order-last sm:order-none'}`}>
                    {isEven && (
                      <motion.div 
                        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-light-border dark:border-dark-border hover:shadow-md transition-shadow duration-300 w-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, type: 'spring' }}
                      >
                        <div className="flex sm:flex-row-reverse items-center justify-between sm:justify-start gap-2 text-primary-500 text-sm font-semibold mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-sm font-semibold font-sans text-primary-500 mb-3">
                          {edu.institution}
                        </h4>
                        <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 text-xs font-bold mb-3">
                          {edu.score}
                        </div>
                        <p className="text-sm font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                          {edu.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Bullet Center Indicator */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 shadow-md">
                    <BookOpen className="w-4 h-4 text-primary-500" />
                  </div>

                  {/* Right content / spacer block */}
                  <div className={`w-full sm:w-[45%] pl-12 sm:pl-0 flex ${!isEven ? 'sm:justify-start text-left' : 'sm:justify-end order-last sm:order-none'}`}>
                    {!isEven && (
                      <motion.div 
                        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-light-border dark:border-dark-border hover:shadow-md transition-shadow duration-300 w-full"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, type: 'spring' }}
                      >
                        <div className="flex items-center gap-2 text-primary-500 text-sm font-semibold mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-sm font-semibold font-sans text-primary-500 mb-3">
                          {edu.institution}
                        </h4>
                        <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 text-xs font-bold mb-3">
                          {edu.score}
                        </div>
                        <p className="text-sm font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                          {edu.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
export default Education;
