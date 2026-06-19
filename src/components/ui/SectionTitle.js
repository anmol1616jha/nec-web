import React from 'react';

function SectionTitle({ title, subtitle, className = '', align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center' : '';
  return (
    <div className={`mb-8 ${alignClass} ${className}`}>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">{title}</h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 text-sm">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
