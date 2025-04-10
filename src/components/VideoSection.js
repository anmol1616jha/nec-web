import React from 'react';
import { textContent } from '../constants/textContent';

function VideoSection({ videos }) {
  if (!videos || videos.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        {textContent.topicDetails.videos}
      </h2>
      
      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <div className="bg-red-600 text-white rounded-lg p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">{video.title}</h3>
                <p className="text-gray-500 text-sm">Watch on YouTube</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
