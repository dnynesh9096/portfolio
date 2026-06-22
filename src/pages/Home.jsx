import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Experience } from '../components/Experience/Experience';
import { Education } from '../components/Education/Education';
import { Certifications } from '../components/Certifications/Certifications';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { ScrollTop } from '../components/ScrollTop/ScrollTop';

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
};
export default Home;
