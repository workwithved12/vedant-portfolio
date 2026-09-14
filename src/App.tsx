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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <CursorProvider>
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-neutral-100 selection:bg-amber-300 selection:text-neutral-950 transition-colors duration-300 font-sans cursor-default">
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
