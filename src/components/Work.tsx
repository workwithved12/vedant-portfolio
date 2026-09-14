import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SocialLink } from './SocialLinks';

export const Work = () => {


  return (
    <section id="work" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] font-semibold text-neutral-400 dark:text-neutral-500 mb-2">
              CODEBASES & BUILDS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Work, Repositories & <br />
              <span className="font-serif italic font-normal text-neutral-700 dark:text-neutral-300">
                open source experiments.
              </span>
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-sm">
            Explore my code repositories, data science notebooks, and sprint builds directly on GitHub.
          </p>
        </div>

        {/* Real Developer Workspace Card (No Fake Projects) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[34px] bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 p-8 sm:p-12 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-semibold mb-4 border border-neutral-200 dark:border-neutral-700">
                <Code2 size={14} />
                <span>PUBLIC CODEBASES</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mb-3">
                GitHub Development Hub
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                All my active engineering work, hackathon codebases, and experimental AI pipelines are hosted publicly on GitHub. From data analysis notebooks to competitive hackathon MVP architectures.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Python', 'Data Science', 'Generative AI', 'Hackathons', 'Prompt Engineering', 'Web Builds'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <SocialLink platform="github" variant="hero" label="Explore on GitHub" />
              <span className="text-[11px] font-mono text-neutral-400">
                Updated with ongoing sprints
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
