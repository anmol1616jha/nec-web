import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import CourseList from '../components/CourseList';
import CourseDetails from '../components/CourseDetails';
import ChapterList from '../components/ChapterList';
import TopicList from '../components/TopicList';
import TopicDetails from '../components/TopicDetails';
import PracticeQuestions from '../components/PracticeQuestions';
import About from '../components/About';
import Contact from '../components/Contact';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-7xl font-extrabold text-primary-100 dark:text-primary-900 select-none mb-4">404</div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Page Not Found</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/courses') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <Routes location={location}>
      <Route path="/"        element={<CourseList />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/about"   element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/courses/:courseTitle"                element={<CourseDetails />} />
      <Route path="/courses/:courseTitle/chapters"       element={<ChapterList />} />
      <Route path="/courses/:courseTitle/practice-questions" element={<PracticeQuestions />} />

      <Route path="/courses/:courseTitle/chapters/:chapterTitle"                      element={<TopicList />} />
      <Route path="/courses/:courseTitle/chapters/:chapterTitle/practice-questions"   element={<PracticeQuestions />} />
      <Route path="/courses/:courseTitle/chapters/:chapterTitle/topics/:topicTitle"   element={<TopicDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
