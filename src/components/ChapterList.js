import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courseData';
import { textContent } from '../constants/textContent';

function ChapterList() {
  const { courseTitle } = useParams();
  const navigate = useNavigate();
  
  // Find the course by title
  const course = courses.find(c => 
    c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase()
  );
  
  // Handle not found
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
  
  return (
    <div>
      <Link 
        to={`/courses/${encodeURIComponent(course.title)}`} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        {textContent.chapterList.backToCourse}
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">{course.title} - {textContent.chapterList.heading}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {course.chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{chapter.title}</h2>
              <Link
                to={`/courses/${encodeURIComponent(course.title)}/chapters/${encodeURIComponent(chapter.title)}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                View Topics
              </Link>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">{textContent.chapterList.practiceQuestions}</h2>
            <Link
              to={`/courses/${encodeURIComponent(course.title)}/practice-questions`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
            >
              {textContent.chapterList.startPractice}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChapterList;
