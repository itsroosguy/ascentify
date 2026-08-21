import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyAscentify from './components/WhyAscentify';
import Ecosystem from './components/Ecosystem';
import Capabilities from './components/Capabilities';
import Solutions from './components/Solutions';
import ComparisonTable from './components/ComparisonTable';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Book a Demo');

  const handleOpenModal = (type = 'Book a Demo') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section & Voice Simulator */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Why Ascentify & Communication Gap */}
        <WhyAscentify onOpenModal={handleOpenModal} />

        {/* Ascentify Ecosystem & Proprietary Voice Tech */}
        <Ecosystem onOpenModal={handleOpenModal} />

        {/* Platform Capabilities */}
        <Capabilities onOpenModal={handleOpenModal} />

        {/* Industry Solutions */}
        <Solutions onOpenModal={handleOpenModal} />

        {/* Traditional LMS vs Ascentify Comparison */}
        <ComparisonTable onOpenModal={handleOpenModal} />

        {/* Closing High Impact CTA */}
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Lead Capture Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
      />

    </div>
  );
}
