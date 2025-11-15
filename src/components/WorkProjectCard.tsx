import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

interface WorkProjectCardProps {
  title: string;
  timeline?: string;
  summary: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
  techStack?: string[];
  link?: string;
  detailed?: boolean;
}

export const WorkProjectCard = ({
  title,
  timeline,
  summary,
  problem,
  solution,
  outcomes,
  techStack,
  link,
  detailed = false
}: WorkProjectCardProps) => {
  return <motion.div 
    className={`group py-8 border-b border-blue-900/30 transition-all duration-200 ${detailed ? 'mb-12' : ''}`} 
    whileHover={{ x: 4 }}
    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
  >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {timeline && <span className="text-xs text-blue-400 font-medium">{timeline}</span>}
      </div>
      <p className="text-blue-200 mb-8 leading-relaxed">{summary}</p>
      {detailed && <>
          {problem && <div className="mb-8 pb-8 border-b border-blue-900/30">
              <h4 className="text-xs uppercase text-blue-400 mb-3 font-bold tracking-wider">Problem</h4>
              <p className="text-blue-100 leading-relaxed">{problem}</p>
            </div>}
          {solution && <div className="mb-8 pb-8 border-b border-blue-900/30">
              <h4 className="text-xs uppercase text-blue-400 mb-3 font-bold tracking-wider">Solution</h4>
              <p className="text-blue-100 leading-relaxed">{solution}</p>
            </div>}
          {outcomes && outcomes.length > 0 && <div className="mb-8">
              <h4 className="text-xs uppercase text-blue-400 mb-4 font-bold tracking-wider">
                Outcomes
              </h4>
              <ul className="space-y-3">
                {outcomes.map((outcome, index) => <li key={index} className="text-blue-100 flex items-start">
                    <span className="text-blue-400 mr-3 mt-0.5 flex-shrink-0 font-bold">•</span>
                    <span>{outcome}</span>
                  </li>)}
              </ul>
            </div>}
        </>}
      {techStack && techStack.length > 0 && <div className="flex flex-wrap gap-2 mt-8">
          {techStack.map((tech, index) => <span key={index} className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded border border-blue-800/50">
              {tech}
            </span>)}
        </div>}
      {link && <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-8 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
          View on GitHub <ExternalLinkIcon size={14} className="ml-2" />
        </a>}
    </motion.div>;
};

