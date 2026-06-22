import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: 'Full Stack Web Developer (Freelancer)',
    company: 'Upwork / Contract Works',
    duration: '2023 - Present',
    responsibilities: [
      'Engineered responsive web applications for global clients using React.js, Tailwind CSS, and Node.js.',
      'Designed backend APIs, resolved DB queries, and synced application modules with state management.',
      'Deployed clients sites to cloud service hubs (Vercel, AWS) reducing build delivery times.'
    ]
  },
  {
    id: 2,
    role: 'Web Development Intern',
    company: 'Tech Solutions Inc.',
    duration: 'Jun 2024 - Aug 2024',
    responsibilities: [
      'Assisted in front-end feature developments using React and REST API setups.',
      'Wrote automated script assertions, increasing coverage rates for internal portals.',
      'Collaborated in Scrum reviews, code refactoring assemblies, and UX design adjustments.'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-white/40 dark:bg-dark-bg/20 border-t border-light-border dark:border-dark-border overflow-hidden">
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
            Work Experience
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
            My professional history and engineering milestones.
          </motion.p>
        </div>

        {/* Timeline block */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line indicator */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
          
          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={exp.id} className="relative flex flex-col sm:flex-row items-stretch sm:justify-between w-full">
                  {/* Left content block */}
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
                          <span>{exp.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold font-sans text-primary-500 mb-4">
                          {exp.company}
                        </h4>
                        
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
                          {exp.responsibilities.map((resp, respIdx) => (
                            <li key={respIdx} className="flex items-start gap-2 text-left">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Bullet Center Indicator */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 shadow-md">
                    <Briefcase className="w-4 h-4 text-primary-500" />
                  </div>

                  {/* Right content block */}
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
                          <span>{exp.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold font-sans text-primary-500 mb-4">
                          {exp.company}
                        </h4>
                        
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
                          {exp.responsibilities.map((resp, respIdx) => (
                            <li key={respIdx} className="flex items-start gap-2 text-left">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
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
export default Experience;
