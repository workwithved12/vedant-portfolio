import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SocialLink } from './SocialLinks';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 dark:bg-[#0B0C10]/90 backdrop-blur-md shadow-xs py-3.5 border-b border-neutral-200/60 dark:border-neutral-800/60'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          className="font-bold text-sm sm:text-base tracking-[0.18em] text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity uppercase font-sans flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>{PORTFOLIO_DATA.personal.displayName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[14px] text-neutral-600 dark:text-neutral-400 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 font-sans"
            >
              {link.name}
            </a>
          ))}

          {/* Compact Social Links with subtle hover animation */}
          <div className="flex items-center space-x-4 pl-2 border-l border-neutral-200 dark:border-neutral-800">
            <SocialLink platform="github" variant="nav" label="GitHub" />
            <SocialLink platform="linkedin" variant="nav" label="LinkedIn" />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-900 dark:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 shadow-lg">
          <div className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-4">
              <SocialLink platform="github" variant="nav" label="GitHub" />
              <SocialLink platform="linkedin" variant="nav" label="LinkedIn" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
