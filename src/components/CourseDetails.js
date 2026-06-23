import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HiBookOpen, HiClipboardDocumentList, HiDocumentText, HiArrowRight } from 'react-icons/hi2';
import { courses } from '../data/courseData';
import { SITE_URL } from '../constants/seoConfig';
import { ROUTES } from '../constants/routes';
import PageWrapper from './ui/PageWrapper';
import Breadcrumb from './ui/Breadcrumb';
import EmptyState from './ui/EmptyState';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

function ActionCard({ icon, title, description, to, href, variant = 'primary' }) {
  const colors = {
    primary: 'from-primary-500 to-primary-700',
    accent:  'from-accent-500 to-accent-700',
    slate:   'from-slate-600 to-slate-800',
  };
  const inner = (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors[variant]} p-6 h-full text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
      <div className="text-3xl mb-3 opacity-90">{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      <HiArrowRight className="absolute bottom-5 right-5 w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">{inner}</a>;
  return <Link to={to} className="block h-full">{inner}</Link>;
}

function CourseDetails() {
  const { courseTitle } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.title.toLowerCase() === decodeURIComponent(courseTitle).toLowerCase());

  if (!course) {
    return (
      <PageWrapper>
        <EmptyState
          title="Course Not Found"
          description="We couldn't find that course."
          action={<Button onClick={() => navigate(ROUTES.COURSES)}>Back to Courses</Button>}
        />
      </PageWrapper>
    );
  }

  const mcqCount = course.chapters.reduce((sum, ch) =>
    sum + (ch.topics || []).reduce((ts, t) => ts + (t.mcqs?.length || 0), 0), 0);

  return (
    <PageWrapper>
      <Helmet>
        <title>{course.title} | Nepal Engineering Council (NEC) Exam Preparation</title>
        <meta name="description" content={`Study ${course.title} for the Nepal Engineering Council (NEC) licensing exam. Browse chapters, practice MCQs, and download the official syllabus.`} />
        <meta property="og:title" content={`${course.title} | Nepal Engineering Council Exam Prep`} />
        <meta property="og:description" content={`${course.title} study guide for the Nepal Engineering Council (NEC) licensing exam — chapters, MCQs, and syllabus.`} />
        <link rel="canonical" href={`${SITE_URL}/courses/${encodeURIComponent(course.title)}`} />
      </Helmet>

      <Breadcrumb items={[{ label: 'Courses', href: ROUTES.COURSES }, { label: course.title }]} />

      {/* Hero banner */}
      <div className="relative rounded-3xl overflow-hidden mb-10 h-56 md:h-64">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{course.title}</h1>
          <p className="text-white/80 text-sm max-w-md">{course.description}</p>
          <div className="flex gap-4 mt-3">
            <span className="text-white/70 text-xs">{course.chapters.length} Chapters</span>
            {mcqCount > 0 && <span className="text-white/70 text-xs">{mcqCount} MCQs</span>}
          </div>
        </div>
      </div>

      {/* Action cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ActionCard
          icon={<HiBookOpen />}
          title="Chapter-wise Study"
          description="Browse all chapters with topics, notes, and video resources."
          to={ROUTES.chapters(course.title)}
          variant="primary"
        />
        <ActionCard
          icon={<HiClipboardDocumentList />}
          title="Practice MCQs"
          description={`Test yourself with ${mcqCount || 'all'} practice questions from this course.`}
          to={ROUTES.courseQuiz(course.title)}
          variant="accent"
        />
        <ActionCard
          icon={<HiDocumentText />}
          title="Syllabus PDF"
          description="Download the official NEC syllabus for this course."
          href={course.syllabusLink}
          variant="slate"
        />
      </div>
    </PageWrapper>
  );
}

export default CourseDetails;
