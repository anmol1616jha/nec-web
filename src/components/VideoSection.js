import React from 'react';
import { HiPlayCircle } from 'react-icons/hi2';

function VideoSection({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2 mb-4">
        <HiPlayCircle className="w-5 h-5 text-accent-500" />
        Video Lectures
      </h2>
      <div className="space-y-3">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl
              border border-slate-100 dark:border-slate-800
              hover:border-accent-200 dark:hover:border-accent-800
              hover:bg-accent-50 dark:hover:bg-accent-900/20
              transition-all duration-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 dark:text-slate-50 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors truncate">
                {video.title}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Watch on YouTube</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
