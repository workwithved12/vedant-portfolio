import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SocialLink } from './SocialLinks';
import { useCursor } from '../context/CursorContext';

export const Hero = () => {
  const { personal, heroStats, heroRolePills } = PORTFOLIO_DATA;
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic atmospheric lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-blue-500/10 to-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col items-start max-w-5xl">
          
          {/* Subtitle / Category Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/5 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-neutral-800 dark:text-neutral-200 uppercase">
              {personal.primaryIdentity}
            </span>
          </motion.div>

          {/* MAIN FOCUS: VEDANT LOKHANDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="select-none mb-6 relative inline-block w-full"
          >
            <div className="relative inline-block">
              <h1 className="text-[3.75rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold tracking-[-0.045em] leading-[0.92] text-neutral-950 dark:text-white uppercase font-sans">
                VEDANT <br />
                <span className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300">
                  LOKHANDE
                </span>
              </h1>
              
              {/* Hello Tech Cute Cat */}
              <div className="absolute top-4 right-0 translate-x-[110%] hidden md:flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-4xl mb-1 animate-bounce">🐱💻</div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/10 px-2 py-1 rounded-full whitespace-nowrap">
                  hello tech cute cat
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-700 dark:text-neutral-300 max-w-2xl leading-snug mb-8"
          >
            {personal.supportingLine}{' '}
            <span className="text-neutral-400 dark:text-neutral-500 font-normal block sm:inline text-base sm:text-lg mt-1 sm:mt-0 font-sans">
              {personal.alternativeLine}
            </span>
          </motion.p>

          {/* Role Badges with Custom Cursor Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12"
          >
            {heroRolePills.map((pill) => (
              <a
                key={pill.target}
                href="#ecosystem"
                onMouseEnter={() => setCursor(pill.cursor)}
                onMouseLeave={resetCursor}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 hover:border-amber-500/60 dark:hover:border-amber-400/60 transition-all duration-200 shadow-xs"
              >
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {pill.role}
                </span>
                <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {pill.target}
                </span>
                <ArrowUpRight size={12} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </motion.div>

          {/* Action CTAs: VIEW MY WORK ↗, GITHUB ↗, LINKEDIN ↗ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            {/* Primary Action */}
            <a
              href="#work"
              onMouseEnter={() => setCursor('WORK ↗')}
              onMouseLeave={resetCursor}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-bold tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-md font-mono"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Small Minimal GitHub & LinkedIn Links */}
            <SocialLink platform="github" variant="hero" label="GitHub" />
            <SocialLink platform="linkedin" variant="hero" label="LinkedIn" />

            <a
              href="#contact"
              onMouseEnter={() => setCursor('CONTACT')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white text-xs font-mono font-medium transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight size={13} />
            </a>
          </motion.div>

          {/* Hero Metadata Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-neutral-200/80 dark:border-neutral-800/80"
          >
            {heroStats.map((st) => (
              <div
                key={st.label}
                onMouseEnter={() => setCursor(st.cursor)}
                onMouseLeave={resetCursor}
                className="rounded-2xl p-5 bg-white/70 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/80 backdrop-blur-xs hover:border-neutral-400 dark:hover:border-neutral-600 transition-all cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-neutral-950 dark:text-white mb-1">
                  {st.value}
                </div>
                <div className="text-xs font-mono font-bold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase">
                  {st.label}
                </div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono mt-0.5">
                  {st.detail}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
