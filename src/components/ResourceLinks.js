import React from 'react';
import { HiDocumentText, HiArrowTopRightOnSquare, HiBookOpen } from 'react-icons/hi2';

function ResourceLinks({ pdfs, externalLinks }) {
  const hasPdfs  = pdfs?.length > 0;
  const hasLinks = externalLinks?.length > 0;
  if (!hasPdfs && !hasLinks) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2 mb-4">
        <HiBookOpen className="w-5 h-5 text-primary-500" />
        Study Resources
      </h2>

      <div className="space-y-3">
        {hasPdfs && pdfs.map((pdf) => (
          <a
            key={pdf.id}
            href={pdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl
              border border-slate-100 dark:border-slate-800
              hover:border-red-200 dark:hover:border-red-800
              hover:bg-red-50 dark:hover:bg-red-900/10
              transition-all duration-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white">
              <HiDocumentText className="w-5 h-5" />
            </div>
            <span className="font-medium text-slate-900 dark:text-slate-50 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {pdf.title}
            </span>
            <HiArrowTopRightOnSquare className="ml-auto w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-red-400 transition-colors flex-shrink-0" />
          </a>
        ))}

        {hasLinks && externalLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl
              border border-slate-100 dark:border-slate-800
              hover:border-primary-200 dark:hover:border-primary-800
              hover:bg-primary-50 dark:hover:bg-primary-900/20
              transition-all duration-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white">
              <HiArrowTopRightOnSquare className="w-5 h-5" />
            </div>
            <span className="font-medium text-slate-900 dark:text-slate-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {link.title}
            </span>
            <HiArrowTopRightOnSquare className="ml-auto w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-primary-400 transition-colors flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ResourceLinks;
