import React from 'react';
import { motion } from 'framer-motion';
interface PillarCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export const PillarCard = ({
  title,
  description,
  icon
}: PillarCardProps) => {
  return <motion.div className="group cursor-pointer p-8 rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-gray-100 hover:border-blue-200" whileHover={{
    y: -2
  }} transition={{
    type: 'spring',
    stiffness: 400,
    damping: 30
  }}>
      <div className="mb-4 text-gray-400 group-hover:text-accent transition-colors duration-300">{icon}</div>
      <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>;
};