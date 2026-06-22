import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import { SkillCard } from './SkillCard';
import * as Icons from 'lucide-react';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="relative py-24 bg-white/10 dark:bg-dark-bg/10 border-t border-light-border dark:border-dark-border overflow-hidden">
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
            Skills & Expertise
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
            My technical skills categorized by functional domain.
          </motion.p>
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-16">
          {skillsData.map((categoryBlock, index) => {
            // Retrieve category icon
            const CategoryIcon = Icons[categoryBlock.icon] || Icons.Cpu;
            
            return (
              <div key={index} className="space-y-6">
                
                {/* Category Header */}
                <motion.div 
                  className="flex items-center space-x-3 text-left pb-2 border-b border-light-border dark:border-dark-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-slate-200">
                    {categoryBlock.category}
                  </h3>
                </motion.div>

                {/* Skill Cards Grid */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {categoryBlock.skills.map((skill, skillIdx) => (
                    <motion.div key={skillIdx} variants={itemVariants}>
                      <SkillCard
                        name={skill.name}
                        level={skill.level}
                        iconName={skill.icon}
                      />
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Skills;
