import React from 'react';
import { Link } from 'react-router-dom';
import { HiAcademicCap } from 'react-icons/hi2';
import { FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home',    to: '/'        },
  { label: 'Courses', to: '/courses' },
  { label: 'About',   to: '/about'   },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  { icon: <FaEnvelope />, href: 'mailto:anmol1616jha@gmail.com',   label: 'Email'     },
  { icon: <FaGithub />,   href: 'https://github.com/anmol1616jha', label: 'GitHub'    },
  { icon: <FaGlobe />,    href: 'https://anmol1616jha.netlify.app', label: 'Portfolio' },
];

function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-3 w-fit">
              <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                <HiAcademicCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-50 text-base">
                NEC<span className="text-primary-400"> Prep</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Free study platform for the Nepal Engineering Council licensing exam. Study smarter, pass faster.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-primary-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-sm mt-4">Built by <a href="https://anmol1616jha.netlify.app" className="text-primary-400 hover:underline" target="_blank" rel="noopener noreferrer">Anmol Jha</a></p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} NEC Exam Prep. Free to use.</p>
          <p>Made with ❤️ for Nepali engineers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
