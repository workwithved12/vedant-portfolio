import { useState } from 'react';
import { Copy, Check, Send, Sparkles, MessageSquare, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SocialLink } from './SocialLinks';


export const Contact = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899'],
    });

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-200/20 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="rounded-[38px] bg-white dark:bg-[#12141C] border border-neutral-200/90 dark:border-neutral-800 p-8 sm:p-12 md:p-16 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold mb-6 border border-emerald-200/60 dark:border-emerald-800/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LET'S CONNECT</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.06] mb-6">
                  Have an ambitious idea? <br />
                  <span className="font-serif italic font-normal text-neutral-700 dark:text-neutral-300">
                    Let’s build it.
                  </span>
                </h2>

                <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
                  Whether you're looking for an enthusiastic Data Science & GenAI builder, assembling a competitive hackathon squad, or discussing internships — feel free to reach out directly.
                </p>

                {/* Direct Contact Buttons */}
                <div className="space-y-4 mb-8">
                  
                  {/* Email Button */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Mail size={13} />
                      <span>DIRECT EMAIL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleCopyEmail}
                        className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 shadow-xs"
                      >
                        <span>{personal.email}</span>
                        {copiedEmail ? (
                          <Check size={16} className="text-emerald-500" />
                        ) : (
                          <Copy size={16} className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                        )}
                      </button>
                      {copiedEmail && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium"
                        >
                          Copied! 🚀
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Phone Button */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Phone size={13} />
                      <span>DIRECT PHONE</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleCopyPhone}
                        className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 shadow-xs"
                      >
                        <span>{personal.phone}</span>
                        {copiedPhone ? (
                          <Check size={16} className="text-emerald-500" />
                        ) : (
                          <Copy size={16} className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                        )}
                      </button>
                      {copiedPhone && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium"
                        >
                          Copied! 📞
                        </motion.span>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Developer Links */}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold mb-3">
                  CONNECT ON PROFILES
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <SocialLink platform="github" variant="pill" label="GitHub Profile" />
                  <SocialLink platform="linkedin" variant="pill" label="LinkedIn Profile" />
                </div>
              </div>


            </div>

            {/* Right Column: Direct Message Form */}
            <div className="lg:col-span-6 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-8">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out! I'll get back to you promptly at {formData.email || 'your email'}.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold mb-2 flex items-center gap-1.5">
                    <MessageSquare size={13} />
                    <span>DROP A MESSAGE</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Message / Opportunity
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project, hackathon sprint, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <Send size={15} />
                    <span>Send Message & Celebrate 🚀</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
