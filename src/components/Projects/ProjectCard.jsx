import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from '../Icons/SocialIcons';

export const ProjectCard = ({ title, description, image, tags, demoLink, githubLink }) => {
  return (
    <motion.div
      className="flex flex-col h-full rounded-2xl border border-light-border dark:border-dark-border bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-all duration-300 group"
      whileHover={{ y: -6 }}
    >
      {/* Project Thumbnail Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-slate-800">
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-dark-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white text-slate-800 hover:bg-primary-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white text-slate-800 hover:bg-primary-500 hover:text-white transition-colors duration-200"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = `
              <div class="w-full h-full bg-gradient-to-tr from-primary-600/20 to-indigo-500/20 flex items-center justify-center text-primary-500 font-sans p-6 text-center font-medium">
                ${title}
              </div>
            `;
          }}
        />
      </div>

      {/* Content description details */}
      <div className="p-6 flex flex-col flex-grow space-y-4 text-left">
        <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-sm font-sans text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-semibold font-sans rounded-md bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Card Footer Links */}
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-light-border dark:border-dark-border">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span>Repository</span>
          </a>
          
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            <span>Live Preview</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
