import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiArrowRight, HiClipboardDocumentList, HiVideoCamera, HiLink } from 'react-icons/hi2';
import { courses } from '../data/courseData';
import { SITE_URL } from '../constants/seoConfig';
import { ROUTES } from '../constants/routes';
import { containerVariants, itemVariants } from '../constants/animations';
import PageWrapper from './ui/PageWrapper';
import Breadcrumb from './ui/Breadcrumb';
import EmptyState from './ui/EmptyState';
import Button from './ui/Button';
import Badge from './ui/Badge';

function TopicList() {
  const { courseTitle, chapterTitle } = useParams();
  const navigate = useNavigate();

  const course  = courses.find(c => c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase());
  const chapter = course?.chapters.find(ch => ch.title.toLowerCase() === decodeURIComponent(chapterTitle).toLowerCase());

  if (!course || !chapter) {
    return (
      <PageWrapper>
        <EmptyState
          title="Chapter Not Found"
          description="We couldn't locate that chapter."
          action={<Button onClick={() => navigate(ROUTES.COURSES)}>All Courses</Button>}
        />
      </PageWrapper>
    );
  }

  const topics   = chapter.topics || [];
  const mcqCount = topics.reduce((s, t) => s + (t.mcqs?.length || 0), 0);

  return (
    <PageWrapper>
      <Helmet>
        <title>{chapter.title} | {course.title} — Nepal Engineering Council Exam</title>
        <meta name="description" content={`Study ${chapter.title} topics for ${course.title} — Nepal Engineering Council (NEC) licensing exam. Includes notes, video lectures, and MCQ practice questions.`} />
        <meta property="og:title" content={`${chapter.title} | ${course.title} — Nepal Engineering Council Exam`} />
        <link rel="canonical" href={`${SITE_URL}${ROUTES.topicList(course.title, chapter.title)}`} />
      </Helmet>

      <Breadcrumb items={[
        { label: 'Courses', href: ROUTES.COURSES },
        { label: course.title, href: ROUTES.courseDetail(course.title) },
        { label: 'Chapters', href: ROUTES.chapters(course.title) },
        { label: chapter.title },
      ]} />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
            {chapter.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5">
            {topics.length} topic{topics.length !== 1 ? 's' : ''} · {mcqCount} MCQs
          </p>
        </div>
        {mcqCount > 0 && (
          <Link
            to={ROUTES.chapterQuiz(course.title, chapter.title)}
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors shadow-sm self-start"
          >
            <HiClipboardDocumentList className="w-4 h-4" />
            Chapter Quiz
          </Link>
        )}
      </div>

      {topics.length === 0 ? (
        <EmptyState icon="📖" title="No topics yet" description="Topics for this chapter are coming soon." />
      ) : (
        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {topics.map((topic, idx) => {
            const hasVideo = topic.videos?.length > 0;
            const hasLinks = topic.externalLinks?.length > 0 || topic.pdfs?.length > 0;
            return (
              <motion.div key={topic.id || idx} variants={itemVariants}>
                <Link
                  to={ROUTES.topicDetail(course.title, chapter.title, topic.title)}
                  className="group flex items-center gap-4 bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-slate-800 rounded-2xl p-5
                    hover:border-primary-200 dark:hover:border-primary-800
                    hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl
                    bg-slate-100 dark:bg-slate-800
                    text-slate-500 dark:text-slate-400
                    flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {topic.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {topic.mcqs?.length > 0 && (
                        <Badge variant="primary" className="text-xs">{topic.mcqs.length} MCQs</Badge>
                      )}
                      {hasVideo && (
                        <span className="inline-flex items-center gap-1 text-xs text-accent-600 dark:text-accent-400">
                          <HiVideoCamera className="w-3.5 h-3.5" /> Video
                        </span>
                      )}
                      {hasLinks && (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                          <HiLink className="w-3.5 h-3.5" /> Resources
                        </span>
                      )}
                    </div>
                  </div>

                  <HiArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </PageWrapper>
  );
}

export default TopicList;
