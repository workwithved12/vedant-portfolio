import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const HackathonJourney = () => {
  const { setCursor, resetCursor } = useCursor();

  const journeyMilestones = [
    {
      title: "SUNHACKS 2025 Core Team & Tech Lead",
      badge: "Flagship Hackathon",
      description: "Served as Core Team Member and Tech Lead for SUNHACKS 2025 (large-scale GenAI hackathon hosted by Sandip University). Led technical operations, hackathon platform stability, and sprint execution.",
      cursor: "TECH LEAD",
      tags: ["Tech Lead", "GenAI", "Hackathon Operations"]
    },
    {
      title: "Team Nest Collaboration",
      badge: "Founding Member",
      description: "Founding member contributing to collaborative sprint team formations, peer architecture discussions, and competitive building.",
      cursor: "CORE MEMBER",
      tags: ["Team Nest", "Collaboration", "Community"]
    }
  ];

  return (
    <section id="journey" className="py-20 md:py-32 relative bg-neutral-900/5 dark:bg-black/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] font-semibold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
              <Flame size={14} className="text-amber-500" />
              <span>LEADERSHIP JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Tech Leadership & <br />
              <span className="font-serif italic font-normal text-neutral-700 dark:text-neutral-300">
                pressure-tested building.
              </span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md leading-relaxed">
            "Focusing on technical leadership, experimenting and collaborating under pressure."
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {journeyMilestones.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setCursor(m.cursor)}
              onMouseLeave={resetCursor}
              className="rounded-[32px] bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 p-7 sm:p-8 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-amber-500/50 transition-all duration-300 shadow-xs hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
                    {m.badge}
                  </span>
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
                    {m.cursor}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-3">
                  {m.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6 font-normal">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
