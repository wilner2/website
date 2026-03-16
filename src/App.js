import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/ui/FadeIn';
import { ThemeProvider } from './components/ui/theme-provider';
import { LanguageProvider } from './components/ui/language-provider.js';

function App() {
  return (
    <LanguageProvider defaultLanguage="en" storageKey="vite-ui-language">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <Education />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App; 