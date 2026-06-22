import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Contact as ContactComponent } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { ScrollTop } from '../components/ScrollTop/ScrollTop';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <div className="pt-20">
        <ContactComponent />
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};
export default Contact;
