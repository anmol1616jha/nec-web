import React, { useState } from 'react';
import { HiClipboardDocumentList, HiArrowPath, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { shuffleArray } from '../utils/helpers';
import MCQItem from './MCQItem';

const PAGE_SIZE = 10;

function MCQSection({ mcqs }) {
  const [key,         setKey]         = useState(0);
  const [items,       setItems]       = useState(() => shuffleArray(mcqs));
  const [currentPage, setCurrentPage] = useState(1);

  if (!mcqs || mcqs.length === 0) return null;

  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const start      = (currentPage - 1) * PAGE_SIZE;
  const pageItems  = items.slice(start, start + PAGE_SIZE);

  const reshuffle = () => {
    setItems(shuffleArray(mcqs));
    setKey(k => k + 1);
    setCurrentPage(1);
  };

  const goTo = (page) => {
    setCurrentPage(page);
    document.getElementById('mcq-section-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="mcq-section-top">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
          <HiClipboardDocumentList className="w-5 h-5 text-primary-500" />
          Practice MCQs
          <span className="text-sm font-normal text-slate-400 dark:text-slate-500">
            ({mcqs.length})
          </span>
        </h2>
        <button
          onClick={reshuffle}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20"
        >
          <HiArrowPath className="w-3.5 h-3.5" />
          Shuffle
        </button>
      </div>

      {/* Page info */}
      {totalPages > 1 && (
        <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
          Showing {start + 1}–{Math.min(start + PAGE_SIZE, items.length)} of {items.length} questions
        </p>
      )}

      {/* Questions */}
      <div key={`${key}-${currentPage}`} className="space-y-4 mb-6">
        {pageItems.map((mcq, idx) => (
          <MCQItem key={`${mcq.id}-${key}`} mcq={mcq} index={start + idx} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-5">
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl
              border border-slate-200 dark:border-slate-700
              text-slate-600 dark:text-slate-400
              hover:bg-slate-50 dark:hover:bg-slate-800
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-colors"
          >
            <HiChevronLeft className="w-4 h-4" /> Previous
          </button>

          <div className="hidden sm:flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
              const isActive = page === currentPage;
              const isEdge   = page === 1 || page === totalPages;
              const isNear   = Math.abs(page - currentPage) <= 1;
              if (!isEdge && !isNear) {
                if (page === 2 || page === totalPages - 1) {
                  return <span key={page} className="px-1 text-slate-400 text-sm">…</span>;
                }
                return null;
              }
              return (
                <button
                  key={page}
                  onClick={() => goTo(page)}
                  className={`w-9 h-9 rounded-xl text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <span className="sm:hidden text-sm text-slate-500 dark:text-slate-400">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl
              border border-slate-200 dark:border-slate-700
              text-slate-600 dark:text-slate-400
              hover:bg-slate-50 dark:hover:bg-slate-800
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-colors"
          >
            Next <HiChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default MCQSection;
