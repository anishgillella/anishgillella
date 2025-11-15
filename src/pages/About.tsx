import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, DumbbellIcon } from 'lucide-react';
import { Background3DAbout } from '../components/Background3DAbout';

export const About = () => {
  return <div className="relative w-full bg-[#fff7ed] min-h-screen">
      <Background3DAbout />
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-32 max-w-4xl">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-16 text-orange-900 leading-none tracking-tighter"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          About
        </motion.h1>
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-orange-950 mb-6">
            I'm a Founding AI Engineer who's been part of 3 founding teams at early-stage startups across gaming, cybersecurity, and proptech. I've built products and scaled them from the ground up—working across data pipelines, voice agents, LLM workflows, and everything in between. These experiences directly supported raising nearly $1M in funding.
          </p>
          <p className="text-lg leading-relaxed text-orange-800">
            I specialize in designing LLM-powered automation systems, building hybrid agentic workflows, fine-tuning instruct models on GPUs, and improving retrieval accuracy through advanced post-training evaluation. My work is focused on bridging the gap between cutting-edge AI research and production systems that deliver measurable business impact.
          </p>
        </motion.section>
        <motion.section 
          className="mb-20 border-t border-orange-300 pt-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-orange-900">Beyond engineering</h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="font-semibold text-orange-900 mb-2 text-lg">
                Hybrid Athlete & Bodybuilder
              </h3>
              <p className="text-orange-800">
                I'm a hybrid athlete and competitive bodybuilder. Training is a core part of my life—it builds discipline, mental resilience, and physical performance that directly translates to my work ethic in engineering.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="font-semibold text-orange-900 mb-2 text-lg">
                Brand Ambassador
              </h3>
              <p className="text-orange-800 mb-3">
                I'm a brand ambassador for multiple nutrition and supplement companies, including Raw Nutrition and Animal Pak. I represent brands that align with my commitment to performance, discipline, and excellence.
              </p>
              <div className="flex gap-4 flex-wrap">
                <motion.span 
                  className="text-sm text-orange-700 border border-orange-300 bg-orange-50 px-3 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  Raw Nutrition
                </motion.span>
                <motion.span 
                  className="text-sm text-orange-700 border border-orange-300 bg-orange-50 px-3 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  Animal Pak
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="font-semibold text-orange-900 mb-2 text-lg">
                Harvard Business Review Advisory Council
              </h3>
              <p className="text-orange-800">
                Contributing insights on AI technology and business strategy to help shape the future of enterprise AI adoption.
              </p>
            </motion.div>
          </div>
        </motion.section>
        <motion.section 
          className="border-t border-orange-300 pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-orange-900">What drives me</h2>
          <ul className="space-y-4 text-orange-800">
            {[
              "Building AI systems that augment human capabilities",
              "Physical excellence through disciplined training and nutrition",
              "Continuous learning in technical and business domains",
              "Creating technology that delivers measurable outcomes"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <span className="text-orange-600 flex-shrink-0 font-bold">→</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
      </div>
    </div>;
};