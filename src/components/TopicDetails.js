import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HiClipboardDocumentList, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { courses } from '../data/courseData';
import { SITE_URL } from '../constants/seoConfig';
import { ROUTES } from '../constants/routes';
import PageWrapper from './ui/PageWrapper';
import Breadcrumb from './ui/Breadcrumb';
import EmptyState from './ui/EmptyState';
import Button from './ui/Button';
import VideoSection from './VideoSection';
import MCQSection from './MCQSection';
import ResourceLinks from './ResourceLinks';

function TopicDetails() {
  const { courseTitle, chapterTitle, topicTitle } = useParams();
  const navigate = useNavigate();

  const course   = courses.find(c => c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase());
  const chapter  = course?.chapters.find(ch => ch.title.toLowerCase() === decodeURIComponent(chapterTitle).toLowerCase());
  const topics   = chapter?.topics || [];
  const topicIdx = topics.findIndex(t => t.title.toLowerCase() === decodeURIComponent(topicTitle).toLowerCase());
  const topic    = topics[topicIdx];

  if (!course || !chapter || !topic) {
    return (
      <PageWrapper>
        <EmptyState
          title="Topic Not Found"
          description="We couldn't find that topic."
          action={<Button onClick={() => navigate(ROUTES.COURSES)}>All Courses</Button>}
        />
      </PageWrapper>
    );
  }

  const prevTopic = topics[topicIdx - 1];
  const nextTopic = topics[topicIdx + 1];
  const mcqCount  = topic.mcqs?.length || 0;

  return (
    <PageWrapper>
      <Helmet>
        <title>{topic.title} | {chapter.title} — Nepal Engineering Council (NEC) Exam</title>
        <meta name="description" content={`${topic.description?.slice(0, 130) || `Study ${topic.title} for the Nepal Engineering Council (NEC) licensing exam.`}${mcqCount > 0 ? ` Includes ${mcqCount} practice MCQs.` : ''}`} />
        <meta property="og:title" content={`${topic.title} | ${chapter.title} — Nepal Engineering Council Exam`} />
        <link rel="canonical" href={`${SITE_URL}${ROUTES.topicDetail(course.title, chapter.title, topic.title)}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: topic.title,
          description: topic.description,
          educationalLevel: 'Professional',
          learningResourceType: 'Study Guide',
          isPartOf: { '@type': 'Course', name: course.title, provider: { '@type': 'Organization', name: 'Nepal Engineering Council' } },
        })}</script>
      </Helmet>

      <Breadcrumb items={[
        { label: 'Courses', href: ROUTES.COURSES },
        { label: course.title, href: ROUTES.courseDetail(course.title) },
        { label: 'Chapters', href: ROUTES.chapters(course.title) },
        { label: chapter.title, href: ROUTES.topicList(course.title, chapter.title) },
        { label: topic.title },
      ]} />

      {/* Topic header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight mb-3">
          {topic.title}
        </h1>
        {topic.description && (
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 max-w-3xl">{topic.description}</p>
        )}
        {mcqCount > 0 && (
          <a
            href="#mcq"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
          >
            <HiClipboardDocumentList className="w-3.5 h-3.5" />
            {mcqCount} Practice MCQs below
          </a>
        )}
      </div>

      {/* Content sections */}
      <div className="space-y-8">
        {topic.videos?.length > 0 && <VideoSection videos={topic.videos} />}
        {(topic.pdfs?.length > 0 || topic.externalLinks?.length > 0) && (
          <ResourceLinks pdfs={topic.pdfs} externalLinks={topic.externalLinks} />
        )}
        {mcqCount > 0 && (
          <div id="mcq">
            <MCQSection mcqs={topic.mcqs} />
          </div>
        )}
        {!topic.videos?.length && !topic.pdfs?.length && !topic.externalLinks?.length && !mcqCount && (
          <EmptyState icon="📖" title="Content Coming Soon" description="Study materials for this topic are being prepared." />
        )}
      </div>

      {/* Prev / Next navigation */}
      <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
        {prevTopic ? (
          <Link
            to={ROUTES.topicDetail(course.title, chapter.title, prevTopic.title)}
            className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <HiChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="max-w-[12rem] truncate hidden sm:block">{prevTopic.title}</span>
            <span className="sm:hidden">Previous</span>
          </Link>
        ) : <div />}

        {nextTopic ? (
          <Link
            to={ROUTES.topicDetail(course.title, chapter.title, nextTopic.title)}
            className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="max-w-[12rem] truncate hidden sm:block">{nextTopic.title}</span>
            <span className="sm:hidden">Next</span>
            <HiChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : <div />}
      </div>
    </PageWrapper>
  );
}

export default TopicDetails;
