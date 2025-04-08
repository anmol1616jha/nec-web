import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import ChapterList from './components/ChapterList';
import ChapterDetail from './components/ChapterDetail';
import NotFound from './components/NotFound';
import './App.css';

function Routing() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/course/:courseId/chapters" element={<ChapterList />} />
            <Route path="/course/:courseId/chapter/:chapterId" element={<ChapterDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default Routing;