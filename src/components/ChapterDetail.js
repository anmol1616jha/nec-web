import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data';
import { siteContent } from '../textContent';

const ChapterDetail = () => {
  const { courseId, chapterId } = useParams();
  const { chapterDetail } = siteContent;
  
  // Find the course with the matching ID
  const course = coursesData.find(c => c.title === courseId);
  
  // If no course is found, render a message
  if (!course) {
    return (
      <div className="chapter-detail">
        <h2>Course Not Found</h2>
        <Link to="/" className="btn">Back to Courses</Link>
      </div>
    );
  }
  
  // Find the chapter with the matching ID
  const chapter = course.chapters.find(ch => ch.title === chapterId);
  
  // If no chapter is found, render a message
  if (!chapter) {
    return (
      <div className="chapter-detail">
        <h2>Chapter Not Found</h2>
        <Link to={`/course/${course.title}/chapters`} className="btn">
          Back to Chapters
        </Link>
      </div>
    );
  }
  
  return (
    <div className="chapter-detail">
      <h2>{chapter.title}</h2>
      
      <div className="chapter-content">
        <p>{chapter.content}</p>
      </div>
      
      <div className="questions-section">
        <h3>{chapterDetail.questionsTitle}</h3>
        
        {chapter.questions.map(question => (
          <div key={question.id} className="question-item">
            <p className="question">{question.question}</p>
            <p className="answer">{question.answer}</p>
          </div>
        ))}
      </div>
      
      <Link to={`/course/${course.title}/chapters`} className="back-link">
        {chapterDetail.backButton}
      </Link>
    </div>
  );
};

export default ChapterDetail;