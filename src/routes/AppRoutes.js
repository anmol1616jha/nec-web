import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseList from '../components/CourseList';
import CourseDetails from '../components/CourseDetails';
import ChapterList from '../components/ChapterList';
import TopicList from '../components/TopicList';
import TopicDetails from '../components/TopicDetails';
import PracticeQuestions from '../components/PracticeQuestions';
import About from '../components/About';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses/:courseTitle" element={<CourseDetails />} />
      <Route path="/courses/:courseTitle/chapters" element={<ChapterList />} />
      <Route path="/courses/:courseTitle/chapters/:chapterTitle" element={<TopicList />} />
      <Route
        path="/courses/:courseTitle/practice-questions"
        element={<PracticeQuestions />}
      />
      <Route path="/courses/:courseTitle/chapters/:chapterTitle/topics/:topicTitle" element={<TopicDetails />} />
      <Route path="*" element={
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      } />
    </Routes>
  );
}

export default AppRoutes;
