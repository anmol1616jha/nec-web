import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary:   'bg-primary-600 hover:bg-primary-700 text-white shadow-sm shadow-primary-200 dark:shadow-none',
  secondary: 'bg-accent-500 hover:bg-accent-600 text-white shadow-sm shadow-accent-200 dark:shadow-none',
  outline:   'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800',
  ghost:     'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  danger:    'bg-red-500 hover:bg-red-600 text-white',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-4 py-2 text-sm rounded-xl',
  lg: 'px-6 py-3 text-base rounded-xl',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  as: Component,
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 font-medium
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed`;

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      ) : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </>
  );

  if (Component) {
    return <Component className={classes} {...props}>{content}</Component>;
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
