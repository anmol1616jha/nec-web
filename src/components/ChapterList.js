import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiBookOpen, HiArrowRight, HiClipboardDocumentList } from 'react-icons/hi2';
import { courses } from '../data/courseData';
import { SITE_URL } from '../constants/seoConfig';
import { ROUTES } from '../constants/routes';
import { containerVariants, itemVariants } from '../constants/animations';
import PageWrapper from './ui/PageWrapper';
import Breadcrumb from './ui/Breadcrumb';
import EmptyState from './ui/EmptyState';
import Button from './ui/Button';
import Badge from './ui/Badge';

function ChapterList() {
  const { courseTitle } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase());

  if (!course) {
    return (
      <PageWrapper>
        <EmptyState
          title="Course Not Found"
          description="This course doesn't exist."
          action={<Button onClick={() => navigate(ROUTES.COURSES)}>All Courses</Button>}
        />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{course.title} Chapters | Nepal Engineering Council (NEC) Exam Prep</title>
        <meta name="description" content={`Chapter-wise study guide for ${course.title} — Nepal Engineering Council (NEC) licensing exam preparation. Topics, notes, and MCQ practice questions.`} />
        <meta property="og:title" content={`${course.title} Chapters | Nepal Engineering Council Exam Prep`} />
        <link rel="canonical" href={`${SITE_URL}/courses/${encodeURIComponent(course.title)}/chapters`} />
      </Helmet>

      <Breadcrumb items={[
        { label: 'Courses', href: ROUTES.COURSES },
        { label: course.title, href: ROUTES.courseDetail(course.title) },
        { label: 'Chapters' },
      ]} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-50">{course.title}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{course.chapters.length} chapters</p>
        </div>
        <Link
          to={ROUTES.courseQuiz(course.title)}
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors shadow-sm self-start sm:self-auto"
        >
          <HiClipboardDocumentList className="w-4 h-4" />
          Full Quiz
        </Link>
      </div>

      <motion.div
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {course.chapters.map((chapter, idx) => {
          const mcqCount = (chapter.topics || []).reduce((sum, t) => sum + (t.mcqs?.length || 0), 0);
          return (
            <motion.div key={chapter.id || idx} variants={itemVariants}>
              <Link
                to={ROUTES.topicList(course.title, chapter.title)}
                className="group flex items-center gap-4 bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-800 rounded-2xl p-5
                  hover:border-primary-200 dark:hover:border-primary-800
                  hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-50 dark:bg-primary-900/30
                  text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center font-bold text-sm">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                    {chapter.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <HiBookOpen className="w-3.5 h-3.5" />
                      {chapter.topics?.length || 0} topics
                    </span>
                    {mcqCount > 0 && (
                      <Badge variant="primary" className="text-xs">{mcqCount} MCQs</Badge>
                    )}
                  </div>
                </div>

                <HiArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </PageWrapper>
  );
}

export default ChapterList;
