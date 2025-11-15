import React from 'react';
import { motion } from 'framer-motion';
import { WorkProjectCard } from '../components/WorkProjectCard';
import { Background3DWork } from '../components/Background3DWork';

export const Work = () => {
  return <div className="relative w-full bg-[#0a0a0a] min-h-screen">
      <Background3DWork />
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-32 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="mb-20"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-white leading-none tracking-tighter"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Work
        </motion.h1>
        <motion.p 
          className="text-lg text-blue-200 max-w-2xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Detailed case studies of the systems I've built, the problems I solved, and the outcomes I achieved across 3 founding teams.
        </motion.p>
        <motion.p 
          className="text-sm text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Industries: Gaming • Cybersecurity • Proptech
        </motion.p>
      </motion.div>
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {[
          { title: "Founding Engineer - Theus", timeline: "January 2024 - October 2025", summary: "Built data enrichment agents and GPU-distilled models supporting a $1M seed raise.", problem: "Real estate investors needed enriched master data from 10K+ sources, but manual enrichment was prohibitively expensive and slow.", solution: "Engineered a React-based data enrichment agent with Pydantic models. Trained models on H100 GPUs using CUDA to distill GPT-5 into smaller models via contrastive learning. Integrated Mistral OCR with document validation. Automated 1K+ client calls using VAPI voice agents with LiveKit, Deepgram, and ElevenLabs.", outcomes: ['Reduced document processing cost from $20 to $0.037 per file (99.8% reduction)', 'Improved retrieval semantics by 40% through GPU-distilled models', 'Reduced post-call review time by 30+ hours weekly with voice automation', 'Compressed package processing from 8 hrs to 1 hr with browser automation'], techStack: ['React', 'PyTorch', 'CUDA', 'VAPI', 'Stagehand', 'TypeScript', 'Mistral OCR'], link: "https://github.com/anishgillella" },
          { title: "Founding AI Engineer - AIRRIVED Inc.", timeline: "January 2024 - December 2024", summary: "Designed AI agents for cybersecurity triage with 15min → 5min incident resolution.", problem: "Security teams spent 15+ minutes triaging incidents, missing critical threats in real-time threat intelligence.", solution: "Built RAG pipelines with Pinecone and LLM-powered agents for automated threat classification and triage. Optimized retrieval latency through inference acceleration and intelligent caching.", outcomes: ['Reduced incident resolution time from 15 min to under 5 min (66% improvement)', 'Cut retrieval latency from 45s to 12s (73% improvement)', 'Accelerated real-time threat detection capabilities', 'Deployed production agents for cybersecurity workflows'], techStack: ['Pinecone', 'LangChain', 'GPT-4', 'Python', 'FastAPI', 'Threat Intelligence'], link: "https://github.com/anishgillella" },
          { title: "Software Engineer Intern - Cohezion.ai", timeline: "June 2023 - October 2023", summary: "Architected LLM workflows serving 1M+ analytics queries with 40% latency reduction.", problem: "Community analytics platform was slow to respond to queries, with baseline latency of 4.8 seconds impacting user experience.", solution: "Built LLM workflows with LangChain and OpenAI APIs for dynamic querying. Fine-tuned LLaMA-2 with LoRA adapters on domain-specific data. Optimized inference pipelines for real-time analytics.", outcomes: ['Architected dynamic query system over 1M+ analytics records', 'Reduced response latency by 40% (4.8s → 2.9s)', 'Improved F1 score from 0.72 to 0.83 with fine-tuned models', 'Enhanced semantic relevance in analytics responses'], techStack: ['LangChain', 'OpenAI', 'LLaMA-2', 'LoRA', 'PEFT', 'Python'], link: "https://github.com/anishgillella" }
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
          >
            <WorkProjectCard {...project} detailed />
          </motion.div>
        ))}
      </motion.div>
      </div>
    </div>;
};