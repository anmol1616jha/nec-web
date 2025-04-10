import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courseData';
import { textContent } from '../constants/textContent';
import VideoSection from './VideoSection';
import ResourceLinks from './ResourceLinks';
import MCQSection from './MCQSection';

function TopicDetails() {
  const { courseTitle, chapterTitle, topicTitle } = useParams();
  const navigate = useNavigate();
  
  // Find the course by title
  const course = courses.find(c => 
    c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase()
  );
  
  // Handle course not found
  if (!course) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">{textContent.errors.notFound}</h1>
        <p className="mb-6">{textContent.errors.notFoundMessage}</p>
        <button 
          onClick={() => navigate('/courses')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          {textContent.errors.goHome}
        </button>
      </div>
    );
  }
  
  // Find the chapter by title
  const chapter = course.chapters.find(ch => 
    ch.title.toLowerCase() === decodeURIComponent(chapterTitle).toLowerCase()
  );
  
  // Handle chapter not found
  if (!chapter) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">{textContent.errors.notFound}</h1>
        <p className="mb-6">{textContent.errors.notFoundMessage}</p>
        <button 
          onClick={() => navigate(`/courses/${encodeURIComponent(course.title)}/chapters`)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Back to Chapters
        </button>
      </div>
    );
  }
  
  // Find the topic by title
  const topic = chapter.topics.find(t => 
    t.title.toLowerCase() === decodeURIComponent(topicTitle).toLowerCase()
  );
  
  // Handle topic not found
  if (!topic) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">{textContent.errors.notFound}</h1>
        <p className="mb-6">{textContent.errors.notFoundMessage}</p>
        <button 
          onClick={() => navigate(`/courses/${encodeURIComponent(course.title)}/chapters/${encodeURIComponent(chapter.title)}`)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Back to Topics
        </button>
      </div>
    );
  }
  
  // Handle external resource (PDF) opening
  const openPdfInNewTab = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div>
      <Link 
        to={`/courses/${encodeURIComponent(course.title)}/chapters/${encodeURIComponent(chapter.title)}`} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        {textContent.topicDetails.backToTopics}
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
          <p className="text-gray-600 mb-6">{topic.description}</p>
        </div>
      </div>
      
      {/* Topic content sections */}
      <div className="space-y-8">
        {/* Videos section */}
        {topic.videos && topic.videos.length > 0 && (
          <VideoSection videos={topic.videos} />
        )}
        
        {/* Resources section */}
        {(topic.pdfs && topic.pdfs.length > 0) || (topic.externalLinks && topic.externalLinks.length > 0) ? (
          <ResourceLinks 
            pdfs={topic.pdfs} 
            externalLinks={topic.externalLinks} 
            openPdfInNewTab={openPdfInNewTab} 
          />
        ) : null}
        
        {/* MCQs section */}
        {topic.mcqs && topic.mcqs.length > 0 && (
          <MCQSection mcqs={topic.mcqs} />
        )}
      </div>
    </div>
  );
}

export default TopicDetails;
