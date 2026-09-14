import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SocialLink } from './SocialLinks';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-neutral-200/70 dark:border-neutral-800/70 transition-colors bg-white/40 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* LET'S CONNECT Section in Footer */}
        <div className="pb-12 mb-12 border-b border-neutral-200/60 dark:border-neutral-800/60 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.24em] uppercase text-amber-600 dark:text-amber-400 block mb-2">
              LET'S CONNECT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Open to conversations, code & AI sprints.
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <SocialLink platform="github" variant="footer" label="GitHub" />
            <SocialLink platform="linkedin" variant="footer" label="LinkedIn" />
            <SocialLink platform="email" variant="footer" label="Email" />
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-bold text-sm tracking-widest uppercase font-mono text-neutral-950 dark:text-white">
              {PORTFOLIO_DATA.personal.fullName}
            </span>
            <span className="hidden sm:inline text-neutral-400 dark:text-neutral-600 font-mono text-xs">/</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              MSc Data Science · {new Date().getFullYear()}
            </span>
          </div>

          <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-1.5 font-mono">
            <span>Engineered with precision for real-world impact</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
