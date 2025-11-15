import React from 'react';
import { motion } from 'framer-motion';
interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}
export const SocialLink = ({
  icon,
  label,
  href
}: SocialLinkProps) => {
  return <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium"
    whileHover={{ scale: 1.05 }}
  >
      {icon}
      <span>{label}</span>
    </motion.a>;
};