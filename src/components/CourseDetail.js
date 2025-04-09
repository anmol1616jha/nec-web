import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data';
import { siteContent } from '../textContent';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { courseDetail } = siteContent;
  
  // Find the course with the matching ID
  const course = coursesData.find(c => c.title === courseId);
  
  // If no course is found, render a message
  if (!course) {
    return (
      <div className="course-detail">
        <h2>Course Not Found</h2>
        <Link to="/" className="btn">Back to Courses</Link>
      </div>
    );
  }
  
  // Function to open PDF in a new tab
  const openPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };
  
  return (
    <div className="course-detail">
      <div className="course-detail-header">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      
      <div className="course-options">
        <h3>{courseDetail.optionsTitle}</h3>
        <div className="options-grid">
          <button 
            className="btn" 
            onClick={() => openPDF(course.syllabus)}
          >
            {courseDetail.syllabusButton}
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={() => openPDF(course.questionPaper)}
          >
            {courseDetail.questionPaperButton}
          </button>
          
          <Link 
            to={`/course/${course.title}/chapters`} 
            className="btn btn-accent"
          >
            {courseDetail.chaptersButton}
          </Link>
        </div>
      </div>
      
      <Link to="/" className="back-link">
        {courseDetail.backToCoursesButton}
      </Link>
    </div>
  );
};

export default CourseDetail;