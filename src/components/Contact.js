import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaGithub, FaGlobe, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { SITE_URL } from '../constants/seoConfig';

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'anmol1616jha@gmail.com',
    href: 'mailto:anmol1616jha@gmail.com',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/anmol1616jha',
    href: 'https://github.com/anmol1616jha',
    color: 'text-gray-800',
    bg: 'bg-gray-100',
  },
  {
    icon: <FaGlobe />,
    label: 'Portfolio',
    value: 'anmol1616jha.netlify.app',
    href: 'https://anmol1616jha.netlify.app',
    color: 'text-[#ad6d9b]',
    bg: 'bg-purple-50',
  },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  return (
    <div className="bg-gray-100 py-10">
      <Helmet>
        <title>Contact | NEC Exam Preparation</title>
        <meta name="description" content="Get in touch with the NEC Exam Prep team. Send feedback, report errors, or suggest new topics for the Nepal Engineering Council exam preparation platform." />
        <meta property="og:title" content="Contact | NEC Exam Preparation" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-5xl">

        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#2c3e50] mb-3">Get in Touch</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have feedback, found an error, or want to suggest a new topic?<br />I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* ── Contact form ── */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-6">Send a Message</h2>

            {submitted ? (
              <div className="text-center py-10">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Your email client should have opened. Thanks for reaching out!
                </p>
                <button
                  onClick={handleReset}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Feedback / Error Report / Topic Suggestion"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400">Opens your email client</p>
                </div>
              </form>
            )}
          </div>

          {/* ── Contact info sidebar ── */}
          <div className="flex flex-col gap-4">

            {/* Links card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-[#2c3e50] mb-5">Contact Info</h2>
              <div className="space-y-4">
                {contactLinks.map(({ icon, label, value, href, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <span className={`${bg} ${color} p-2.5 rounded-lg text-base mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                      <p className={`text-sm font-medium ${color} group-hover:underline break-all`}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-[#2c3e50] text-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Typically replies within 1–2 days. For quick issues, feel free to open a ticket on GitHub.
              </p>
            </div>

            {/* What to ask card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-[#2c3e50] mb-3">What to reach out about</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Incorrect MCQ answer or explanation',
                  'Suggest a missing topic or chapter',
                  'Broken link or resource',
                  'General feedback',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#ad6d9b] mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
