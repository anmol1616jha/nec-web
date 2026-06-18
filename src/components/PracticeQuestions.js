import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/courseData';
import { textContent } from '../constants/textContent';
import MCQSection from './MCQSection';
import { isStringEmpty } from '../utils/helpers';

function PracticeQuestions() {
  const { courseTitle } = useParams();
  const {chapterTitle} = useParams();
  const navigate = useNavigate();
  

  // Find the course by title
  const course = courses.find(c =>
    c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase()
  );

  let chapter = null;
  let mcqs = [];
  let backLink = `/courses/${encodeURIComponent(course.title)}/chapters`;

    // Find the course by title
  if (!isStringEmpty(chapterTitle)) {
    backLink = `/courses/${encodeURIComponent(course.title)}/chapters/${encodeURIComponent(chapterTitle)}`
    chapter = course?.chapters?.find(c =>
      c.title.toLowerCase() === decodeURIComponent(chapterTitle).toLowerCase()
    );
  }

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
  if (!isStringEmpty(chapterTitle)) {
    mcqs = chapter.topics.flatMap(topic => topic.mcqs || [])
  } else {
    mcqs = course.chapters.flatMap(chapter =>
    chapter.topics.flatMap(topic => topic.mcqs || [])
  );
  }

  const pageTitle = isStringEmpty(chapterTitle) ? course.title : decodeURIComponent(chapterTitle);

  return (
    <div>
      <Helmet>
        <title>Practice Questions — {pageTitle} | NEC Exam Prep</title>
        <meta name="description" content={`${mcqs.length} MCQ practice questions for ${pageTitle} — Nepal Engineering Council licensing exam preparation. Test your knowledge with answers and explanations.`} />
        <meta property="og:title" content={`Practice Questions — ${pageTitle} | NEC Exam Prep`} />
      </Helmet>
      <Link
        to={backLink}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        {isStringEmpty(chapterTitle) ? textContent.practiceQuestionsPage.backToChapters : textContent.topicDetails.backToTopics}
      </Link>

      {
        isStringEmpty(chapterTitle) ?
        <h1 className="text-3xl font-bold mb-6">{courseTitle}</h1> :
        <h1 className="text-3xl font-bold mb-6">{chapterTitle}</h1>
      }

      {mcqs.length > 0 ? (
        <MCQSection mcqs={mcqs} />
      ) : (
        <p>{textContent.practiceQuestionsPage.noQuestions}</p>
      )}
    </div>
  );
}

export default PracticeQuestions;
