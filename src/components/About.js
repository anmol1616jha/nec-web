import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiBookOpen, HiClipboardDocumentList, HiDocumentText, HiAcademicCap } from 'react-icons/hi2';
import { SITE_URL } from '../constants/seoConfig';
import { containerVariants, itemVariants } from '../constants/animations';
import PageWrapper from './ui/PageWrapper';

const features = [
  {
    icon: <HiBookOpen className="w-6 h-6" />,
    title: 'Chapter-wise Study',
    description: 'Browse NEC disciplines with chapter-wise coverage so you can focus on the exact syllabus.',
    color: 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400',
  },
  {
    icon: <HiDocumentText className="w-6 h-6" />,
    title: 'Study Materials',
    description: 'Access reference notes and PDF resources consolidated from various reliable sources.',
    color: 'bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400',
  },
  {
    icon: <HiClipboardDocumentList className="w-6 h-6" />,
    title: 'Practice Questions',
    description: 'Test yourself with MCQs and exam-style problems to gauge your preparation level.',
    color: 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
  },
];

function About() {
  return (
    <PageWrapper>
      <Helmet>
        <title>About | Nepal Engineering Council (NEC) Exam Preparation Platform</title>
        <meta name="description" content="Learn about NEC Exam Prep — a free study platform by Anmol Jha for the Nepal Engineering Council (NEC) licensing exam. Chapter notes, MCQs, and video lectures for Nepali engineers." />
        <meta property="og:title" content="About | Nepal Engineering Council Exam Preparation Platform" />
        <link rel="canonical" href={`${SITE_URL}/about`} />
      </Helmet>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl mb-12
        bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black
        p-8 md:p-14">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative flex items-start gap-4">
          <div className="flex-shrink-0 bg-primary-600 text-white p-3 rounded-2xl">
            <HiAcademicCap className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">About NEC Prep</h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              A free, open study platform for the{' '}
              <span className="text-primary-300 font-semibold">Nepal Engineering Council</span> licensing exam —
              built so every engineer can prepare efficiently without hunting across dozens of resources.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="mb-12 max-w-3xl">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">The Story</h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            NEC Prep is a personal project by{' '}
            <a
              href="https://anmol1616jha.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Anmol Jha
            </a>
            , aimed at helping fellow engineers prepare for the Nepal Engineering Council licensing exam.
          </p>
          <p>
            Here you'll find curated chapters, study materials and practice questions for a range of engineering
            disciplines recognized by the NEC. The goal is to be a one-stop resource so you spend more time
            learning and less time searching for materials.
          </p>
          <p>
            The site is still growing — new topics and questions are added regularly. If you notice any issues
            or want to contribute, feel free to reach out!
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">What's Inside</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-card"
            >
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-2">{f.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tech stack */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-card">
        <h2 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Built With</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          React · React Router · Tailwind CSS · Framer Motion · react-helmet-async
        </p>
      </div>
    </PageWrapper>
  );
}

export default About;
