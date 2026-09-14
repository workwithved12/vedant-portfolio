import { useState } from 'react';
import { Trophy, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';

export const Achievements = () => {
  const { hierarchy } = PORTFOLIO_DATA;
  const { setCursor, resetCursor } = useCursor();
  const [activeTab, setActiveTab] = useState<'ALL' | 'ACHIEVEMENTS' | 'LEADERSHIP' | 'COMMUNITY'>('ALL');

  const allItems = [
    ...hierarchy.achievements.map((item) => ({ ...item, section: 'ACHIEVEMENTS' })),
    ...hierarchy.leadership.map((item) => ({ ...item, section: 'LEADERSHIP' })),
    ...hierarchy.community.map((item) => ({ ...item, section: 'COMMUNITY' })),
  ];

  const filteredItems = activeTab === 'ALL'
    ? allItems
    : allItems.filter((item) => item.section === activeTab);

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'LEADERSHIP':
        return <ShieldCheck size={20} className="text-amber-500" />;
      case 'COMMUNITY':
        return <Users size={20} className="text-blue-500" />;
      case 'ACHIEVEMENTS':
      default:
        return <Trophy size={20} className="text-emerald-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] font-semibold text-neutral-400 dark:text-neutral-500 mb-2">
              CREDIBILITY & ROLES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Achievements & <br />
              <span className="font-serif italic font-normal text-neutral-700 dark:text-neutral-300">
                organizational hierarchy.
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            {(['ALL', 'ACHIEVEMENTS', 'LEADERSHIP', 'COMMUNITY'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid: Automatically adapts to any number of items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onMouseEnter={() => setCursor(item.cursorLabel)}
              onMouseLeave={resetCursor}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-[32px] bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-amber-400/60 dark:hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon, Section Badge, and Year (Year ONLY if known) */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getSectionIcon(item.section)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                      {item.section}
                    </span>
                    {item.year && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-1.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Role / Subtitle */}
                <div className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4">
                  {item.roleOrCategory}
                </div>

                {/* Description strictly based on user's facts */}
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Footer Details */}
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{item.badge || 'Verified Profile'}</span>
                </span>

                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Hover for "{item.cursorLabel}"
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
