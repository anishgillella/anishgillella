import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Background3DHome } from '../components/Background3DHome';
import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export const Home = () => {
  return <div className="relative w-full bg-white min-h-screen">
      <Background3DHome />
      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-32 pb-32 max-w-4xl">
          {/* Hero Section - Ultra Minimal */}
          <section className="py-20 md:py-32">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            ease: "easeOut"
          }}>
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 text-black tracking-tighter"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
              >
                Anish Gillella
              </motion.h1>
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl text-black mb-4 leading-relaxed font-normal">
                  Founding Engg • Hybrid Athlete
                </p>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                  I've been part of 3 founding teams across gaming, cybersecurity, and proptech scaling products from the ground up. I specialize in AI agents, LLM pipelines, voice automation, and GPU-accelerated systems.
                </p>
              </motion.div>
            </motion.div>
          </section>
          {/* Minimal Work Preview */}
          <section className="py-20 border-t border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Selected work</h2>
              <p className="text-gray-600 text-sm">Three founding teams across gaming, cybersecurity, and proptech—multiple products scaled from zero</p>
            </div>
            <div className="space-y-1">
              <Link to="/work" className="block py-3 border-b border-gray-100 hover:border-black transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">Theus</span>
                  <span className="text-gray-500 text-sm">2025</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Capitalizing on commercial real estate using AI agents</p>
              </Link>
              <Link to="/work" className="block py-3 border-b border-gray-100 hover:border-black transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">AIRRIVED</span>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">AI agents for cybersecurity triage</p>
              </Link>
              <Link to="/work" className="block py-3 border-b border-gray-100 hover:border-black transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">Cohezion</span>
                  <span className="text-gray-500 text-sm">2023</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">RAG pipelines for gaming analytics</p>
              </Link>
            </div>
            <div className="mt-8">
              <Link to="/work" className="text-black hover:underline text-sm font-medium">
                View all work →
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 border-t border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Get in touch</h2>
              <p className="text-gray-600 text-sm">Got an interesting project or collaboration in mind? I'd love to hear from you.</p>
            </div>
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Email */}
              <motion.a 
                href="mailto:anishgillella@gmail.com" 
                className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-colors"
                whileHover={{ x: 4 }}
              >
                <MailIcon size={20} />
                <span className="font-medium">anishgillella@gmail.com</span>
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
                <motion.a 
                  href="https://github.com/anishgillella" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05, x: 2 }}
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/anishgillella/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05, x: 2 }}
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="https://x.com/thegillella" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05, x: 2 }}
                >
                  <TwitterIcon size={18} />
                  <span>X</span>
                </motion.a>
                <motion.a 
                  href="https://medium.com/@anish.gillella" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05, x: 2 }}
                >
                  <span className="font-bold text-lg">M</span>
                  <span>Medium</span>
                </motion.a>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>;
};