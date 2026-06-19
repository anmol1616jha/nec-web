import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi2';

const OPTIONS = ['A', 'B', 'C', 'D'];

function MCQItem({ mcq, index }) {
  const [selected, setSelected] = useState(null);
  const revealed = selected !== null;

  const handleSelect = (option) => {
    if (!revealed) setSelected(option);
  };

  const isCorrect = (option) => option === mcq.correctAnswer;

  const optionClass = (option) => {
    const base = 'relative flex items-center gap-3 w-full p-3.5 rounded-xl border text-sm font-medium text-left transition-all duration-200 cursor-pointer';
    if (!revealed) return `${base} border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-slate-700 dark:text-slate-300`;
    if (isCorrect(option)) return `${base} border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300`;
    if (option === selected) return `${base} border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400`;
    return `${base} border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
      <div className="flex gap-3 mb-4">
        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold flex items-center justify-center">
          {index + 1}
        </span>
        <p className="font-medium text-slate-900 dark:text-slate-50 leading-relaxed pt-0.5">{mcq.question}</p>
      </div>

      <div className="space-y-2 mb-4">
        {mcq.options.map((option, i) => (
          <button key={i} onClick={() => handleSelect(option)} className={optionClass(option)}>
            <span className="flex-shrink-0 w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold flex items-center justify-center">
              {OPTIONS[i]}
            </span>
            <span className="flex-1">{option}</span>
            {revealed && isCorrect(option) && <HiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
            {revealed && option === selected && !isCorrect(option) && <HiXCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 p-4"
          >
            <p className="text-sm font-semibold text-primary-800 dark:text-primary-300 mb-1">
              Correct Answer: {mcq.correctAnswer}
            </p>
            {mcq.explanation && (
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{mcq.explanation}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!revealed && (
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">Select an option to reveal the answer</p>
      )}
    </div>
  );
}

export default MCQItem;
