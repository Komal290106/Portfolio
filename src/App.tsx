import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import FeaturedProject from './components/FeaturedProject';
import ProjectsGallery from './components/ProjectsGallery';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/animations.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors duration-300">
        {/* Color splash cursor effect */}
        <div 
          className="fixed pointer-events-none z-50 w-8 h-8 rounded-full opacity-20 mix-blend-multiply dark:mix-blend-screen transition-all duration-300 bg-gradient-to-r from-lilac to-mint"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
        />
        
        <Header />
        <Hero />
        <About />
        <Timeline />
        <FeaturedProject />
        <ProjectsGallery />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;