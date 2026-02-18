
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Services from './components/Services';
import Values from './components/Values';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Services />
        <Values />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
