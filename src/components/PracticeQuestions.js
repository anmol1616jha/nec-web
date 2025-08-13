import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courseData';
import { textContent } from '../constants/textContent';
import MCQSection from './MCQSection';

function PracticeQuestions() {
  const { courseTitle } = useParams();
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

  // Gather all MCQs from all chapters and topics
  const mcqs = course.chapters.flatMap(chapter =>
    chapter.topics.flatMap(topic => topic.mcqs || [])
  );

  return (
    <div>
      <Link
        to={`/courses/${encodeURIComponent(course.title)}/chapters`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        {textContent.practiceQuestionsPage.backToChapters}
      </Link>

      <h1 className="text-3xl font-bold mb-6">{textContent.practiceQuestionsPage.heading}</h1>

      {mcqs.length > 0 ? (
        <MCQSection mcqs={mcqs} />
      ) : (
        <p>{textContent.practiceQuestionsPage.noQuestions}</p>
      )}
    </div>
  );
}

export default PracticeQuestions;
