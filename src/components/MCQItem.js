import React, { useState } from 'react';
import { textContent } from '../constants/textContent';

function MCQItem({ mcq }) {
  const [showAnswer, setShowAnswer] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-medium mb-4">{mcq.question}</h3>
      
      <div className="space-y-3 mb-6">
        {mcq.options.map((option, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg border ${showAnswer && option === mcq.correctAnswer ? 'bg-green-100 border-green-300' : 'border-gray-200'}`}
          >
            {option}
            {showAnswer && option === mcq.correctAnswer && (
              <span className="ml-2 inline-flex items-center text-green-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => setShowAnswer(!showAnswer)}
        className={`py-2 px-4 rounded font-medium text-white ${showAnswer ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {showAnswer ? textContent.mcq.hideAnswer : textContent.mcq.showAnswer}
      </button>
      
      {showAnswer && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="font-medium text-blue-800">{textContent.mcq.correctAnswer} {mcq.correctAnswer}</p>
          {mcq.explanation && (
            <div className="mt-2">
              <p className="font-medium text-gray-700">{textContent.mcq.explanation}</p>
              <p className="text-gray-600">{mcq.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MCQItem;
