import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight, HiHome } from 'react-icons/hi2';

function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <HiHome className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <HiChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
          {i === items.length - 1 ? (
            <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[200px]">
              {item.label}
            </span>
          ) : (
            <Link
              to={item.href}
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate max-w-[160px]"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumb;
