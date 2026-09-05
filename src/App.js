import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/ui/FadeIn';
import { ThemeProvider } from './components/ui/theme-provider';
import { LanguageProvider } from './components/ui/language-provider.js';

const Chatbot = lazy(() => import('./components/Chatbot'));
const ArticlePage = lazy(() => import('./components/ArticlePage'));

const Home = () => {
  const location = useLocation();

  // Client-side navigation doesn't auto-scroll to a hash the way a full
  // page load does (e.g. coming back from /artigos/:slug via "/#articles").
  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <>
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
        <Projects />
      </FadeIn>
      <FadeIn>
        <Articles />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <LanguageProvider defaultLanguage="en" storageKey="vite-ui-language">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/artigos/:slug"
              element={
                <Suspense fallback={null}>
                  <ArticlePage />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
