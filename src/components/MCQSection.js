import React from 'react';
import { textContent } from '../constants/textContent';
import MCQItem from './MCQItem';

function MCQSection({ mcqs }) {
  if (!mcqs || mcqs.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        {textContent.topicDetails.questions}
      </h2>
      
      <div className="space-y-6">
        {mcqs.map((mcq) => (
          <MCQItem key={mcq.id} mcq={mcq} />
        ))}
      </div>
    </div>
  );
}

export default MCQSection;
