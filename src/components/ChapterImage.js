import React from 'react';

const GRADIENTS = [
  'from-primary-600 to-accent-500',
  'from-purple-600 to-primary-500',
  'from-accent-500 to-emerald-500',
  'from-orange-500 to-pink-500',
  'from-indigo-600 to-cyan-500',
];

function ChapterImage({ image, title }) {
  if (image) {
    return (
      <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <img src={image} alt={title} className="w-full max-h-80 object-cover" />
      </div>
    );
  }

  const gradientIdx = title ? title.charCodeAt(0) % GRADIENTS.length : 0;
  const gradient    = GRADIENTS[gradientIdx];
  const initials    = title
    ? title.split(' ').slice(0, 2).map(w => w[0]?.toUpperCase()).join('')
    : '?';

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${gradient} h-40 flex items-center justify-center`}>
      <span className="text-4xl font-extrabold text-white/90 tracking-widest">{initials}</span>
    </div>
  );
}

export default ChapterImage;
