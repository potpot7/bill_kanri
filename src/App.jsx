import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Service from './components/Service';
import Corporate from './components/Corporate';
import Information from './components/Information';
import Recruit from './components/Recruit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Service />
        <Corporate />
        <Information />
        <Recruit />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
