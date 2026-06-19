import React from 'react';

const variants = {
  primary:  'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300',
  accent:   'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300',
  slate:    'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  success:  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  warning:  'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  danger:   'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
};

function Badge({ children, variant = 'primary', className = '', icon }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;
