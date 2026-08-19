import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FocusTimer from './components/FocusTimer';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductPreview from './components/ProductPreview';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProductPreview />
        <FocusTimer />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
