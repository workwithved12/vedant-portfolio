import { useState } from 'react';
import { CheckCircle2, Award, Zap, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';

export const EcosystemTimeline = () => {
  const { ecosystemTimeline } = PORTFOLIO_DATA;
  const { setCursor, resetCursor } = useCursor();
  const [activeId, setActiveId] = useState<string>(ecosystemTimeline[0].id);

  return (
    <section id="ecosystem" className="py-20 md:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] font-semibold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
              <Zap size={14} className="text-amber-500" />
              <span>WHERE I BUILD · THE ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Leadership, Communities & <br />
              <span className="font-serif italic font-normal text-neutral-700 dark:text-neutral-300">
                high-stakes sprints.
              </span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md leading-relaxed">
            Real responsibilities across university flagship hackathons and collaborative builder collectives.
          </p>
        </div>

        {/* Interactive Vertical Timeline Layout */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          
          {ecosystemTimeline.map((item, index) => {
            const isHovered = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => {
                  setActiveId(item.id);
                  setCursor(item.cursorLabel);
                }}
                onMouseLeave={() => resetCursor()}
                className={`relative rounded-[32px] p-6 sm:p-9 transition-all duration-300 border cursor-pointer ${
                  isHovered
                    ? 'bg-white dark:bg-[#12141C] border-amber-400/80 dark:border-amber-500/60 shadow-xl'
                    : 'bg-white/70 dark:bg-neutral-900/40 border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[59px] top-8 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                    isHovered
                      ? 'bg-amber-500 border-white dark:border-neutral-950 ring-4 ring-amber-500/20 scale-125'
                      : 'bg-neutral-300 dark:bg-neutral-700 border-white dark:border-neutral-950'
                  }`}
                />

                {/* Card Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
                      {item.type}
                    </span>
                    {item.year && (
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                        {item.year}
                      </span>
                    )}
                  </div>

                  {/* Reactive Cursor Tag badge */}
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold border border-amber-500/20">
                    Hover Label: "{item.cursorLabel}"
                  </span>
                </div>

                {/* Entity & Role Title */}
                <div className="mb-4">
                  <span className="text-xs font-mono font-semibold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase block mb-1">
                    {item.entity}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors ${
                    isHovered ? 'text-amber-600 dark:text-amber-400' : 'text-neutral-950 dark:text-white'
                  }`}>
                    {item.role}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* IMPORTANT: Rigorously distinct EVENT CONTEXT for SUNHACKS 2025 */}
                {item.eventContext && (
                  <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldAlert size={16} className="text-blue-500" />
                      <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400">
                        {item.eventContext.title}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 font-mono">
                      *Note: The statistics below represent official Sandip University event-level records and are reported as external event context, distinct from personal claims.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-3">
                      {item.eventContext.metrics.map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                          {m}
                        </div>
                      ))}
                    </div>

                    {item.eventContext.recordNote && (
                      <div className="text-xs font-medium text-amber-700 dark:text-amber-300 flex items-center gap-1.5 pt-2 border-t border-neutral-200 dark:border-neutral-800 font-mono">
                        <Award size={14} className="text-amber-500 shrink-0" />
                        <span>{item.eventContext.recordNote}</span>
                      </div>
                    )}
                  </div>
                )}

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
