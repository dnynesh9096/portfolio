import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, Award, AwardIcon, FileText } from 'lucide-react';
import { PROFILE_INFO } from '../../utils/constants';

export const About = () => {
  const stats = [
    {
      id: 1,
      label: 'Experience',
      value: PROFILE_INFO.experienceYears,
      icon: Briefcase,
      description: 'Web development'
    },
    {
      id: 2,
      label: 'Projects Completed',
      value: PROFILE_INFO.projectsCompleted,
      icon: FileText,
      description: 'Delivered works'
    },
    {
      id: 3,
      label: 'Certifications',
      value: PROFILE_INFO.certificationsEarned,
      icon: Award,
      description: 'IT Achievements'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white/40 dark:bg-dark-bg/20 border-t border-light-border dark:border-dark-border overflow-hidden">
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
            About Me
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
            My engineering journey and professional statistics.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Image with Glow frame */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <div className="relative group max-w-[340px] w-full aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src="/images/about.jpg" 
                alt="About Workspace" 
                className="w-full h-full object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `
                    <div class="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-600 to-primary-500 flex flex-col items-center justify-center p-6 text-white text-center font-sans">
                      <code class="text-xs opacity-75 mb-2">&lt;developer_workspace&gt;</code>
                      <span class="text-lg font-semibold">Designing responsive software ecosystems</span>
                    </div>
                  `;
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Bio and Stats */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-800 dark:text-slate-200">
                Hi, I'm {PROFILE_INFO.name}. I create interactive software systems.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-base sm:text-lg">
                {PROFILE_INFO.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-base">
                I enjoy engineering modular UI web applications that feel fluid and provide consistent performance across browsers. My programming style focuses on clean architectures, intuitive user interfaces, and mobile-responsive implementations.
              </p>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-light-border dark:border-dark-border hover:border-primary-500/30 dark:hover:border-primary-500/30 hover:shadow-md transition-all duration-300 flex flex-col space-y-2 text-left"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-500 self-start">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-extrabold font-sans text-slate-800 dark:text-white leading-none">
                      {stat.value}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-sans">
                        {stat.label}
                      </span>
                      <span className="text-xs text-slate-500 font-sans">
                        {stat.description}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Download Resume Action */}
            <div className="pt-2">
              <a
                href={PROFILE_INFO.resumeUrl}
                download="Dnynesh_Devkar_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-primary-600 dark:hover:bg-primary-500 text-white font-semibold shadow-md transition-colors duration-200 font-sans cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default About;
