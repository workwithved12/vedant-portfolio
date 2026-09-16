import { useState, useEffect } from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutBento } from './components/AboutBento';
import { Work } from './components/Work';
import { Achievements } from './components/Achievements';
import { HackathonJourney } from './components/HackathonJourney';
import { EcosystemTimeline } from './components/EcosystemTimeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // default: dark
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <CursorProvider>
      <div className="min-h-screen relative overflow-hidden bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-neutral-100 selection:bg-amber-300 selection:text-neutral-950 transition-colors duration-300 font-sans cursor-default">
        {/* Attractive Rotating Background Motion */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] animate-spin-slow opacity-20 dark:opacity-5 pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-amber-500/40 via-transparent to-transparent rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/20 via-transparent to-transparent rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten" />
        </div>
        
        <CustomCursor />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          {/* 1. Hero: Vedant Lokhande */}
          <Hero />

          {/* 2. About: Profile, Education & Skills */}
          <AboutBento />

          {/* 3. Work / Real Projects (Movable Projects completely removed) */}
          <Work />

          {/* 4. Achievements */}
          <Achievements />

          {/* 5. Hackathon Journey */}
          <HackathonJourney />

          {/* 6. Leadership / Communities */}
          <EcosystemTimeline />

          {/* 7. Contact */}
          <Contact />
        </main>
        {/* 8. Footer */}
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
