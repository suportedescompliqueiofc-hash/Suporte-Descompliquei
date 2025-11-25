import React from 'react';
import { Hero } from './components/Hero';
import { Mistakes } from './components/Mistakes';
import { Insight } from './components/Insight';
import { Pillars } from './components/Pillars';
import { Guide } from './components/Guide';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="font-sans antialiased text-brand-black bg-brand-black selection:bg-brand-orange selection:text-white">
      <Hero />
      <Mistakes />
      <Insight />
      <Pillars />
      <Guide />
      <CaseStudies />
      <Footer />
    </main>
  );
}

export default App;