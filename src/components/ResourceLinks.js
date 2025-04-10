import React from 'react';
import { textContent } from '../constants/textContent';

function ResourceLinks({ pdfs, externalLinks, openPdfInNewTab }) {
  const hasPdfs = pdfs && pdfs.length > 0;
  const hasExternalLinks = externalLinks && externalLinks.length > 0;
  
  if (!hasPdfs && !hasExternalLinks) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
        {textContent.topicDetails.resources}
      </h2>
      
      {/* PDFs section */}
      {hasPdfs && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">PDF Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pdfs.map((pdf) => (
              <div key={pdf.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <button onClick={() => openPdfInNewTab(pdf.url)} className="flex items-center w-full text-left">
                  <div className="bg-red-500 text-white rounded-lg p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="font-medium">{pdf.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* External links section */}
      {hasExternalLinks && (
        <div>
          <h3 className="text-lg font-medium mb-3">{textContent.topicDetails.externalLinks}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {externalLinks.map((link) => (
              <div key={link.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-lg p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                  <span className="font-medium">{link.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResourceLinks;
