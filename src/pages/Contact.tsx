import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from '../components/SocialLink';
import { Background3DContact } from '../components/Background3DContact';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, SendIcon } from 'lucide-react';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show success message (in a real app)
    alert("Thanks for your message! I'll get back to you soon.");
  };
  return <div className="relative w-full bg-[#f0f4ff] min-h-screen">
      <Background3DContact />
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-32 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-purple-900 leading-none tracking-tighter"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Contact
        </motion.h1>
        <motion.p 
          className="text-lg text-purple-700 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Got an interesting project or collaboration in mind? I'd love to hear from you.
        </motion.p>
        
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a 
            href="mailto:anishgillella@gmail.com" 
            className="inline-flex items-center gap-3 text-lg font-medium text-purple-900 hover:text-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <MailIcon size={20} />
            anishgillella@gmail.com
          </motion.a>
          <div className="mt-10 flex gap-8">
            <motion.a 
              href="https://github.com/anishgillella" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors duration-200 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/anishgillella/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors duration-200 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a 
              href="https://x.com/thegillella" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors duration-200 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <TwitterIcon size={18} />
              <span>X</span>
            </motion.a>
          </div>
        </motion.section>

        <motion.section 
          className="pt-12 border-t border-purple-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-8 text-purple-900">Send a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-purple-900 mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border-2 border-purple-300 py-3 px-4 text-purple-900 placeholder-purple-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-lg" placeholder="Your name" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-purple-900 mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border-2 border-purple-300 py-3 px-4 text-purple-900 placeholder-purple-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all rounded-lg" placeholder="your@email.com" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-purple-900 mb-2">
                Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-white border-2 border-purple-300 py-3 px-4 text-purple-900 placeholder-purple-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none rounded-lg" placeholder="Tell me about your project or idea..." />
            </motion.div>
            <motion.button 
              type="submit" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-3 transition-all duration-200 font-medium rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send message <SendIcon size={16} className="ml-2" />
            </motion.button>
          </form>
        </motion.section>
      </motion.div>
      </div>
    </div>;
};