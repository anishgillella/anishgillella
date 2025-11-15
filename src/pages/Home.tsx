import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Background3DHome } from '../components/Background3DHome';
import { BrainCircuitIcon, ServerIcon, ArrowRightIcon } from 'lucide-react';
export const Home = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
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
                  I've been part of 3 founding teams across gaming, cybersecurity, and proptech—scaling products from the ground up. I specialize in AI agents, LLM pipelines, voice automation, and GPU-accelerated systems.
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
                  <span className="text-gray-500 text-sm">2024-2025</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Data enrichment agents, GPU-distilled models, $1M seed raise</p>
              </Link>
              <Link to="/work" className="block py-3 border-b border-gray-100 hover:border-black transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">AIRRIVED</span>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">AI agents for cybersecurity triage, 15min → 5min resolution</p>
              </Link>
              <Link to="/work" className="block py-3 border-b border-gray-100 hover:border-black transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">Cohezion</span>
                  <span className="text-gray-500 text-sm">2023</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">LLM workflows, 1M+ queries, 40% latency reduction</p>
              </Link>
            </div>
            <div className="mt-8">
              <Link to="/work" className="text-black hover:underline text-sm font-medium">
                View all work →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>;
};