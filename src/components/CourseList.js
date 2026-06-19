import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { HiArrowRight, HiBookOpen, HiAcademicCap, HiClipboardDocumentList } from 'react-icons/hi2';
import { courses } from '../data/courseData';
import { SITE_URL } from '../constants/seoConfig';
import { containerVariants, itemVariants } from '../constants/animations';
import PageWrapper from './ui/PageWrapper';
import Badge from './ui/Badge';

const totalMCQs = courses.reduce((sum, c) =>
  sum + c.chapters.reduce((cs, ch) =>
    cs + (ch.topics || []).reduce((ts, t) => ts + (t.mcqs?.length || 0), 0), 0), 0);

const totalTopics = courses.reduce((sum, c) =>
  sum + c.chapters.reduce((cs, ch) => cs + (ch.topics?.length || 0), 0), 0);

const stats = [
  { label: 'Courses',        value: courses.length, icon: <HiAcademicCap className="w-5 h-5" /> },
  { label: 'Topics Covered', value: totalTopics,    icon: <HiBookOpen className="w-5 h-5" /> },
  { label: 'Practice MCQs',  value: `${totalMCQs}+`, icon: <HiClipboardDocumentList className="w-5 h-5" /> },
];

function CourseList() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/courses') {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <PageWrapper>
      <Helmet>
        <title>Nepal Engineering Council Exam Preparation | Free NEC Study Platform</title>
        <meta name="description" content="Free study platform for the Nepal Engineering Council (NEC) licensing exam. Chapter-wise notes, MCQ practice questions, and video lectures for Civil, Computer, Electrical, and Mechanical Engineering." />
        <meta name="keywords" content="Nepal Engineering Council exam, NEC exam preparation, NEC license exam, NEC MCQ, Nepal engineering exam, NEC study materials, civil engineering NEC, computer engineering NEC" />
        <meta property="og:title" content="Nepal Engineering Council Exam Preparation | Free NEC Study Platform" />
        <meta property="og:description" content="Free chapter-wise notes, MCQ practice questions, and video lectures for the Nepal Engineering Council (NEC) licensing exam." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Nepal Engineering Council Exam Courses',
          description: 'Study courses for the Nepal Engineering Council (NEC) licensing exam',
          url: `${SITE_URL}/`,
          numberOfItems: courses.length,
          itemListElement: courses.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `${c.title} — Nepal Engineering Council Exam`,
            url: `${SITE_URL}/courses/${encodeURIComponent(c.title)}`,
          })),
        })}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden rounded-3xl mb-12
        bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600
        dark:from-primary-800 dark:via-primary-900 dark:to-accent-900 p-8 md:p-14">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-8  w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl">
          <Badge variant="accent" className="mb-5 text-sm px-3 py-1">🇳🇵 Nepal Engineering Council</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Nepal Engineering<br />Council Exam Prep
          </h1>
          <p className="text-primary-100 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            Chapter-wise notes, curated video lectures, and MCQ practice questions for the NEC licensing exam — completely free.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
            >
              Browse Courses <HiArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="relative grid grid-cols-3 gap-4 mt-10 max-w-lg">
          {stats.map(({ label, value, icon }) => (
            <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-white/70 flex justify-center mb-1">{icon}</div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-primary-200 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Course grid ── */}
      <section id="courses">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Available Courses</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Choose your engineering discipline to get started</p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course) => {
            const mcqCount = course.chapters.reduce((sum, ch) =>
              sum + (ch.topics || []).reduce((ts, t) => ts + (t.mcqs?.length || 0), 0), 0);
            return (
              <motion.div key={course.id} variants={itemVariants}>
                <Link
                  to={`/courses/${encodeURIComponent(course.title)}`}
                  className="group flex flex-col bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-slate-800 rounded-2xl
                    shadow-card hover:shadow-card-hover
                    hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {mcqCount > 0 && (
                      <span className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 text-primary-700 dark:text-primary-300 text-xs font-semibold px-2.5 py-1 rounded-lg">
                        {mcqCount} MCQs
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-slate-50 text-lg mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        {course.chapters.length} chapters
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Explore <HiArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </PageWrapper>
  );
}

export default CourseList;
