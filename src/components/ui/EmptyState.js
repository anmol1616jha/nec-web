import React from 'react';
import { motion } from 'framer-motion';
import { HiExclamationCircle } from 'react-icons/hi2';
import { scaleIn } from '../../constants/animations';

function EmptyState({ title = 'Not Found', description = "The page you're looking for doesn't exist.", action }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-20 px-4"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-6 mb-6">
        <HiExclamationCircle className="w-12 h-12 text-slate-400 dark:text-slate-500" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">{title}</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm">{description}</p>
      {action}
    </motion.div>
  );
}

export default EmptyState;
