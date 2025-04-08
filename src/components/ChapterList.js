import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data';
import { siteContent } from '../textContent';

const ChapterList = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { chapterList } = siteContent;
  
  // Find the course with the matching ID
  const course = coursesData.find(c => c.id === parseInt(courseId));
  
  // If no course is found, redirect to courses page
  if (!course) {
    return (
      <div className="chapter-list">
        <h2>Course Not Found</h2>
        <Link to="/" className="btn">Back to Courses</Link>
      </div>
    );
  }
  
  return (
    <div className="chapter-list">
      <h2>{course.title} - {chapterList.title}</h2>
      
      <div className="chapters-container">
        {course.chapters.map(chapter => (
          <div 
            key={chapter.id}
            className="chapter-item"
            onClick={() => navigate(`/course/${course.id}/chapter/${chapter.id}`)}
          >
            <h3>{chapter.title}</h3>
          </div>
        ))}
      </div>
      
      <Link to={`/course/${course.id}`} className="back-link">
        {chapterList.backButton}
      </Link>
    </div>
  );
};

export default ChapterList;