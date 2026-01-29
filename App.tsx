import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ServicesOverview from './components/ServicesOverview';
import ServiceDetails from './components/ServiceDetails';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ServicesOverview />
        <ServiceDetails />
        <WhyUs />
        <Process />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;