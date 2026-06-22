import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../Icons/SocialIcons';
import { PROFILE_INFO, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    scrollToSection(id, 80);
  };

  return (
    <footer className="relative py-12 bg-white dark:bg-dark-bg border-t border-light-border dark:border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left copyright and credits */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <button 
            onClick={() => handleLinkClick('home')}
            className="text-lg font-bold bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent font-sans cursor-pointer"
          >
            {PROFILE_INFO.name}.
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-500 font-sans">
            &copy; {currentYear} {PROFILE_INFO.name}. All rights reserved.
          </p>
        </div>

        {/* Center quick links */}
        <ul className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-sans cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right social profile links */}
        <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
          <a
            href={PROFILE_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors duration-250"
            aria-label="GitHub Link"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          
          <a
            href={PROFILE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors duration-250"
            aria-label="LinkedIn Link"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          
          <a
            href={PROFILE_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors duration-250"
            aria-label="Twitter Link"
          >
            <Twitter className="w-4.5 h-4.5" />
          </a>

          <a
            href={`mailto:${PROFILE_INFO.email}`}
            className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors duration-250"
            aria-label="Email Link"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
