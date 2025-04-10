import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';
import { textContent } from '../constants/textContent';

function CourseList() {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{textContent.courseList.heading}</h1>
        <p className="text-gray-600">{textContent.courseList.subheading}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link 
                to={`/courses/${encodeURIComponent(course.title)}`} 
                className="inline-block bg-[#3498db] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                {textContent.courseList.viewDetails}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
