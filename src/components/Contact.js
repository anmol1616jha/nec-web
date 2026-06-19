import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaGlobe } from 'react-icons/fa';
import { HiPaperAirplane, HiCheckCircle, HiChatBubbleLeftRight } from 'react-icons/hi2';
import { SITE_URL } from '../constants/seoConfig';
import PageWrapper from './ui/PageWrapper';

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'anmol1616jha@gmail.com',
    href: 'mailto:anmol1616jha@gmail.com',
    bg: 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/anmol1616jha',
    href: 'https://github.com/anmol1616jha',
    bg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
  },
  {
    icon: <FaGlobe />,
    label: 'Portfolio',
    value: 'anmol1616jha.netlify.app',
    href: 'https://anmol1616jha.netlify.app',
    bg: 'bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400',
  },
];

const reachOutItems = [
  'Incorrect MCQ answer or explanation',
  'Suggest a missing topic or chapter',
  'Broken link or resource',
  'General feedback or ideas',
];

function InputLabel({ children, required }) {
  return (
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
      {children}{required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
  );
}

function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const mailtoLink = `mailto:anmol1616jha@gmail.com?subject=${encodeURIComponent(form.subject || 'NEC Web — Contact')}&body=${encodeURIComponent(`Hi Anmol,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setTimeout(() => {
      window.location.href = mailtoLink;
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  const inputClass = 'input-base w-full';

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact | Nepal Engineering Council (NEC) Exam Preparation</title>
        <meta name="description" content="Contact the Nepal Engineering Council (NEC) Exam Prep team. Send feedback, report errors, or suggest new topics for the free NEC licensing exam study platform." />
        <meta property="og:title" content="Contact | Nepal Engineering Council Exam Prep" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>

      {/* Page header */}
      <div className="mb-10 max-w-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-2.5 rounded-xl">
            <HiChatBubbleLeftRight className="w-6 h-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-50">Get in Touch</h1>
        </div>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          Have feedback, found an error, or want to suggest a topic? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* ── Contact form ── */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-card p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-6">Send a Message</h2>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{   opacity: 0, y: 10 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-5">
                  <HiCheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Message Sent!</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
                  Your email client should have opened. Thanks for reaching out — I'll get back to you soon.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors text-sm"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{   opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <InputLabel required>Full Name</InputLabel>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <InputLabel required>Email Address</InputLabel>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <InputLabel required>Subject</InputLabel>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Feedback / Error Report / Suggestion" className={inputClass} />
                </div>

                <div>
                  <InputLabel required>Message</InputLabel>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Write your message here..." className={`${inputClass} resize-none`} />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors text-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 dark:text-slate-500">Opens your email client</p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* ── Sidebar ── */}
        <div className="flex flex-col gap-4">

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-card p-6">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-4">Contact Info</h2>
            <div className="space-y-4">
              {contactLinks.map(({ icon, label, value, href, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <span className={`${bg} p-2.5 rounded-xl text-base mt-0.5 flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-2xl p-6">
            <h3 className="font-bold mb-2">Response Time</h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Typically replies within 1–2 days. For quick issues, open a ticket on GitHub.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-card p-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50 mb-3">What to reach out about</h3>
            <ul className="space-y-2">
              {reachOutItems.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="text-accent-500 mt-0.5 flex-shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;
