import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../../data/certifications';
import { ExternalLink, Award } from 'lucide-react';

export const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  return (
    <section id="certifications" className="relative py-24 bg-white/10 dark:bg-dark-bg/10 border-t border-light-border dark:border-dark-border overflow-hidden">
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
            Certifications
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
            My verified professional credentials, qualifications, and badges.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-light-border dark:border-dark-border hover:border-primary-500/20 dark:hover:border-primary-500/20 hover:shadow-md transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Top Badge Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-sans">
                  {cert.date}
                </span>
              </div>

              {/* Certification Content */}
              <div className="flex-grow space-y-2 text-left">
                <h3 className="text-lg font-bold font-sans text-slate-800 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
                  {cert.title}
                </h3>
                <h4 className="text-sm font-semibold font-sans text-primary-500">
                  {cert.issuer}
                </h4>
                <p className="text-sm font-sans text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                  {cert.description}
                </p>
              </div>

              {/* View credential trigger */}
              <div className="pt-6 mt-auto border-t border-light-border dark:border-dark-border flex">
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
export default Certifications;
