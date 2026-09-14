import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS } from '../data/portfolioData';
import { useCursor } from '../context/CursorContext';

interface SocialLinkProps {
  platform: 'github' | 'linkedin' | 'email';
  variant?: 'nav' | 'hero' | 'footer' | 'pill';
  label?: string;
  className?: string;
}

export const SocialLink = ({ platform, variant = 'nav', label, className = '' }: SocialLinkProps) => {
  const { setCursor, resetCursor } = useCursor();

  let href = '#';
  let defaultLabel = '';
  let cursorText = '';
  let Icon = null;

  switch (platform) {
    case 'github':
      href = GITHUB_URL;
      defaultLabel = 'GitHub';
      cursorText = 'GITHUB ↗';
      Icon = GithubIcon;
      break;
    case 'linkedin':
      href = LINKEDIN_URL;
      defaultLabel = 'LinkedIn';
      cursorText = 'LINKEDIN ↗';
      Icon = LinkedinIcon;
      break;
    case 'email':
      href = `mailto:${EMAIL_ADDRESS}`;
      defaultLabel = 'Email';
      cursorText = 'EMAIL ↗';
      Icon = Mail;
      break;
  }

  const displayText = label || defaultLabel;

  if (variant === 'nav') {
    return (
      <a
        href={href}
        target={platform !== 'email' ? '_blank' : undefined}
        rel={platform !== 'email' ? 'noreferrer' : undefined}
        onMouseEnter={() => setCursor(cursorText)}
        onMouseLeave={resetCursor}
        className={`group relative inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-105 ${className}`}
      >
        <Icon size={14} className="shrink-0 transition-transform group-hover:scale-110" />
        <span className="relative">
          {displayText}
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-neutral-950 dark:bg-white transition-all duration-200 group-hover:w-full" />
        </span>
        <ArrowUpRight
          size={12}
          className="shrink-0 text-neutral-400 dark:text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-950 dark:group-hover:text-white"
        />
      </a>
    );
  }

  if (variant === 'hero') {
    return (
      <a
        href={href}
        target={platform !== 'email' ? '_blank' : undefined}
        rel={platform !== 'email' ? 'noreferrer' : undefined}
        onMouseEnter={() => setCursor(cursorText)}
        onMouseLeave={resetCursor}
        className={`group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-300/80 dark:border-neutral-700/80 bg-white/70 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold tracking-wider hover:border-neutral-900 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs ${className}`}
      >
        <Icon size={13} className="shrink-0" />
        <span>{displayText.toUpperCase()}</span>
        <ArrowUpRight
          size={12}
          className="text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-950 dark:group-hover:text-white"
        />
      </a>
    );
  }

  if (variant === 'footer') {
    return (
      <a
        href={href}
        target={platform !== 'email' ? '_blank' : undefined}
        rel={platform !== 'email' ? 'noreferrer' : undefined}
        onMouseEnter={() => setCursor(cursorText)}
        onMouseLeave={resetCursor}
        className={`group relative inline-flex items-center gap-2 text-sm sm:text-base font-mono font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 ${className}`}
      >
        <Icon size={16} className="shrink-0 text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors" />
        <span className="relative">
          {displayText}
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-neutral-950 dark:bg-white transition-all duration-200 group-hover:w-full" />
        </span>
        <ArrowUpRight
          size={14}
          className="text-neutral-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-950 dark:group-hover:text-white"
        />
      </a>
    );
  }

  // Default pill style
  return (
    <a
      href={href}
      target={platform !== 'email' ? '_blank' : undefined}
      rel={platform !== 'email' ? 'noreferrer' : undefined}
      onMouseEnter={() => setCursor(cursorText)}
      onMouseLeave={resetCursor}
      className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-semibold hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-200 transform hover:-translate-y-0.5 ${className}`}
    >
      <Icon size={14} className="shrink-0" />
      <span>{displayText}</span>
      <ArrowUpRight
        size={13}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
};
