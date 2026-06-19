import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/courseData';
import { isStringEmpty } from '../utils/helpers';
import { ROUTES } from '../constants/routes';
import PageWrapper from './ui/PageWrapper';
import Breadcrumb from './ui/Breadcrumb';
import EmptyState from './ui/EmptyState';
import Button from './ui/Button';
import MCQSection from './MCQSection';

function PracticeQuestions() {
  const { courseTitle, chapterTitle } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c =>
    c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase()
  );

  if (!course) {
    return (
      <PageWrapper>
        <EmptyState
          title="Course Not Found"
          description="We couldn't find that course."
          action={<Button onClick={() => navigate(ROUTES.COURSES)}>All Courses</Button>}
        />
      </PageWrapper>
    );
  }

  const hasChapter = !isStringEmpty(chapterTitle);
  const chapter    = hasChapter
    ? course.chapters.find(c => c.title.toLowerCase() === decodeURIComponent(chapterTitle).toLowerCase())
    : null;

  const mcqs = hasChapter
    ? (chapter?.topics || []).flatMap(t => t.mcqs || [])
    : course.chapters.flatMap(ch => (ch.topics || []).flatMap(t => t.mcqs || []));

  const pageTitle  = hasChapter ? decodeURIComponent(chapterTitle) : course.title;
  const backHref   = hasChapter
    ? ROUTES.topicList(course.title, chapterTitle)
    : ROUTES.chapters(course.title);

  const breadcrumbs = hasChapter
    ? [
        { label: 'Courses', href: ROUTES.COURSES },
        { label: course.title, href: ROUTES.courseDetail(course.title) },
        { label: 'Chapters', href: ROUTES.chapters(course.title) },
        { label: decodeURIComponent(chapterTitle), href: ROUTES.topicList(course.title, chapterTitle) },
        { label: 'Practice Quiz' },
      ]
    : [
        { label: 'Courses', href: ROUTES.COURSES },
        { label: course.title, href: ROUTES.courseDetail(course.title) },
        { label: 'Chapters', href: ROUTES.chapters(course.title) },
        { label: 'Practice Quiz' },
      ];

  return (
    <PageWrapper>
      <Helmet>
        <title>{pageTitle} MCQ Practice | Nepal Engineering Council (NEC) Exam Prep</title>
        <meta name="description" content={`${mcqs.length} MCQ practice questions for ${pageTitle} — Nepal Engineering Council (NEC) licensing exam preparation. Test your knowledge with answers and explanations.`} />
        <meta property="og:title" content={`${pageTitle} MCQ Practice | Nepal Engineering Council Exam Prep`} />
      </Helmet>

      <Breadcrumb items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-50">{pageTitle}</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Practice Quiz · {mcqs.length} question{mcqs.length !== 1 ? 's' : ''}
        </p>
      </div>

      {mcqs.length > 0 ? (
        <MCQSection mcqs={mcqs} />
      ) : (
        <EmptyState
          icon="📋"
          title="No Questions Yet"
          description="MCQ practice questions for this section are being prepared. Check back soon."
          action={<Button onClick={() => navigate(backHref)} variant="secondary">Go Back</Button>}
        />
      )}
    </PageWrapper>
  );
}

export default PracticeQuestions;
