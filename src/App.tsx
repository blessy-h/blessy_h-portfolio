import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

export const App: React.FC = () => {
  const sectionIds = [
    'home',
    'about',
    'skills',
    'projects',
    'certifications',
    'education',
    'contact',
  ];
  const activeSection = useScrollSpy(sectionIds, 'home');

  return (
    <div className="portfolio-app">
      <Header activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
