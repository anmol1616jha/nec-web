import React from 'react';
import { motion } from 'framer-motion';
import { hoverCard } from '../../constants/animations';

function Card({ children, className = '', hover = false, onClick, as: Tag = 'div', ...props }) {
  const base = `bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-card transition-all duration-200`;

  if (hover) {
    return (
      <motion.div
        className={`${base} cursor-pointer ${className}`}
        initial="rest"
        whileHover="hover"
        variants={hoverCard}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Tag className={`${base} ${className}`} onClick={onClick} {...props}>
      {children}
    </Tag>
  );
}

export default Card;
