import { useState, useEffect } from 'react';
import { Clock, Code2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutBento = () => {
  const { personal, skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['All', ...Object.keys(skills)];

  const allSkills = Object.entries(skills).flatMap(([cat, items]) =>
    items.map((item) => ({ ...item, category: cat }))
  );

  const filteredSkills =
    activeCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const genuineHighlights = [
    { label: "Competitive Sprints", value: "10+", detail: "Hackathons Completed" },
    { label: "Flagship Hackathon", value: "2025", detail: "SUNHACK Participant" },
    { label: "Squad Leadership", value: "Nest", detail: "Founding Member" },
    { label: "Academic Focus", value: "MSc", detail: "Data Science Student" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] font-semibold text-neutral-400 dark:text-neutral-500 mb-2">
              ABOUT & TECHNICAL TOOLKIT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Data Science rigor, <br />
              <span className="font-serif italic font-normal text-neutral-700 dark:text-neutral-300">
                fast prototype velocity.
              </span>
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-sm">
            Bridging analytical data methods with modern GenAI frameworks and relentless hackathon execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Story & Core Philosophy (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 rounded-[32px] bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 p-8 sm:p-10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">
                  Personal Profile · Vedant Kisan Lokhande
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                Driven by curiosity, tested in competitions, grounded in Data Science.
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                I am an MSc Data Science student and avid technologist who thrives in high-tempo collaborative building. From participating in <span className="font-semibold text-neutral-900 dark:text-white">SUNHACK 2025</span> (Asia's largest GenAI hackathon) to co-founding <span className="font-semibold text-neutral-900 dark:text-white">Team Nest</span> and competing in <span className="font-semibold text-neutral-900 dark:text-white">10+ hackathons</span>, I focus on turning data insights and AI models into working software.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                  <span>MSc Data Science (Pursuing)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                  <span>Bachelor's from Sandip University</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                  <span>SUNHACK 2025 GenAI Sprint</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                  <span>Founding Member — Team Nest</span>
                </div>
              </div>
            </div>

            {/* Mindset pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                ⚡ Rapid GenAI Prototyper
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
                📊 Data Science & Analytics
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                🤝 Hackathon Team Player
              </span>
            </div>
          </motion.div>

          {/* Card 2: Live Timezone & Availability (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 rounded-[32px] bg-[#121316] text-white p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                  LIVE LOCAL TIME
                </span>
                <Clock size={16} className="text-amber-400" />
              </div>

              <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-white mb-1">
                {currentTime || '14:30:00'}
              </div>
              <div className="text-xs font-mono text-neutral-400 mb-6">
                India · {personal.timezone}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-400">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Available for internships, AI hackathons & developer collaborations.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Interactive Skills Grid (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12 rounded-[32px] bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 p-7 sm:p-9 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Code2 size={18} className="text-neutral-900 dark:text-white" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">
                  Technical Competencies & Tooling
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                      activeCategory === cat
                        ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2.5">
              {filteredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-neutral-50 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                    · {skill.level}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Factual Milestone Stat Cards (4 columns) */}
          {genuineHighlights.map((st, i) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="md:col-span-3 rounded-2xl bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 p-6 shadow-xs flex flex-col justify-between"
            >
              <div className="text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white font-mono mb-1">
                {st.value}
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                  {st.label}
                </div>
                <div className="text-[11px] text-neutral-500 font-mono">
                  {st.detail}
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
