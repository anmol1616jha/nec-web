import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/courseData';
import { textContent } from '../constants/textContent';
import { SITE_URL } from '../constants/seoConfig';

function CourseDetails() {
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

  // Handle external resource (PDF) opening
  const openPdfInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <Helmet>
        <title>{course.title} | NEC Exam Preparation</title>
        <meta name="description" content={`Study ${course.title} for the Nepal Engineering Council licensing exam. Access chapter-wise notes, syllabus, MCQ practice questions, and video lectures.`} />
        <meta property="og:title" content={`${course.title} | NEC Exam Preparation`} />
        <meta property="og:description" content={course.description} />
        <meta property="og:image" content={course.image} />
        <link rel="canonical" href={`${SITE_URL}/courses/${encodeURIComponent(course.title)}`} />
      </Helmet>
      <Link
        to="/courses"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        {textContent.courseDetails.back}
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-6">{course.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => openPdfInNewTab(course.syllabusLink)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors duration-300 text-center"
            >
              <img
                src={textContent.courseDetails.syllabusImage}
                alt={textContent.courseDetails.syllabus}
                className="w-full h-40 object-cover"
              />
              {textContent.courseDetails.syllabus}
            </button>

            {course?.modelQuestionPaperLink && <button
              onClick={() => openPdfInNewTab(course.modelQuestionPaperLink)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded transition-colors duration-300 text-center"
            >
              <img
                src={textContent.courseDetails.modelPaperImage}
                alt={textContent.courseDetails.modelPaper}
                className="w-full h-40 object-cover"
              />
              {textContent.courseDetails.modelPaper}
            </button>}

            <Link
              to={`/courses/${encodeURIComponent(course.title)}/chapters`}
              className="bg-[#ad6d9b] hover:bg-[#ad5093] text-white font-medium py-3 px-4 rounded transition-colors duration-300 text-center"
            >
              <img
                src={textContent.courseDetails.chaptersImage}
                alt={textContent.courseDetails.chapters}
                className="w-full h-40 object-cover"
              />
              {textContent.courseDetails.chapters}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
