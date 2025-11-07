import React from 'react';
import FontLoader from './components/FontLoader';
import HeroCover from './components/HeroCover';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <FontLoader />
      <HeroCover />
      <main id="about">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
