import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { PROFILE_INFO } from '../../utils/constants';
import { validateEmail } from '../../utils/helpers';
import { sendEmail } from '../../services/emailService';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleValidation = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setStatus('loading');
    try {
      await sendEmail(formData);
      setStatus('success');
      setToastMessage('Message sent successfully! I will get back to you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto clear toast after 4s
      setTimeout(() => {
        setStatus('idle');
        setToastMessage('');
      }, 4000);
    } catch (err) {
      setStatus('error');
      setToastMessage(err.message || 'Something went wrong. Please try again.');
      
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-white/40 dark:bg-dark-bg/20 border-t border-light-border dark:border-dark-border overflow-hidden">
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
            Get In Touch
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
            Have a question, proposal or project idea? Feel free to contact me.
          </motion.p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-light-border dark:border-dark-border space-y-6 text-left">
              <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white">
                Contact Information
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Fill out the contact form or send me an email directly. I respond within 24 business hours.
              </p>

              <div className="space-y-4 pt-4">
                {/* Email Info */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Email Me
                    </h4>
                    <a 
                      href={`mailto:${PROFILE_INFO.email}`} 
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-500 transition-colors"
                    >
                      {PROFILE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Location
                    </h4>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-light-border dark:border-dark-border space-y-6 text-left relative"
            >
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary-500/25 ${
                      errors.name ? 'border-red-500' : 'border-light-border dark:border-dark-border focus:border-primary-500'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-red-500 font-sans">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary-500/25 ${
                      errors.email ? 'border-red-500' : 'border-light-border dark:border-dark-border focus:border-primary-500'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 font-sans">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                  Subject
                  </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary-500/25 ${
                    errors.subject ? 'border-red-500' : 'border-light-border dark:border-dark-border focus:border-primary-500'
                  }`}
                  placeholder="Inquiry about new project"
                />
                {errors.subject && <span className="text-xs text-red-500 font-sans">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-primary-500/25 resize-none ${
                    errors.message ? 'border-red-500' : 'border-light-border dark:border-dark-border focus:border-primary-500'
                  }`}
                  placeholder="Hey, I'd love to chat about..."
                />
                {errors.message && <span className="text-xs text-red-500 font-sans">{errors.message}</span>}
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg disabled:opacity-70 transition-all duration-200 cursor-pointer font-sans"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Alert Messages / Toasts */}
              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl border flex items-center space-x-3 z-10 ${
                      status === 'success'
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                        : 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400'
                    }`}
                  >
                    {status === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm font-semibold font-sans">{toastMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
