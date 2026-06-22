import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const SkillCard = ({ name, level, iconName }) => {
  // Resolve Lucide Icon dynamically
  let IconComponent = Icons[iconName];
  if (!IconComponent) {
    if (iconName === 'HtmlIcon') {
      IconComponent = Icons.Globe; // Fallback for HtmlIcon
    } else {
      IconComponent = Icons.Code; // General fallback
    }
  }

  return (
    <motion.div
      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-light-border dark:border-dark-border hover:border-primary-500/20 dark:hover:border-primary-500/20 hover:shadow-md transition-all duration-300 flex flex-col space-y-4 text-left"
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-500">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-100 font-sans">
            {name}
          </span>
        </div>
        <span className="text-sm font-bold text-primary-600 dark:text-primary-400 font-sans">
          {level}%
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-850 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
};
export default SkillCard;
