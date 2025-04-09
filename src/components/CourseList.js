import React from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data';
import { siteContent } from '../textContent';

const CourseList = () => {
  const { courseList } = siteContent;
  
  return (
    <div>
      <div className="course-list-header">
        <h2>{courseList.title}</h2>
        <p>{courseList.description}</p>
      </div>
      
      <div className="course-grid">
        {coursesData.map(course => (
          <Link 
            to={`/course/${course.title}`} 
            key={course.id}
            className="card"
            style={{ textDecoration: 'none' }}
          >
            <img 
              src={course.image} 
              alt={course.title} 
              className="card-image" 
            />
            <div className="card-content">
              <h3 className="card-title">{course.title}</h3>
              <p className="card-description">{course.description}</p>
              <button className="btn">View Course</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;