import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dE8ryMHkF0EMjFf3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays for contrast and cosmic glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 50% at 50% 0%, rgba(10,10,10,0.2), rgba(0,0,0,0.65) 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(255,77,0,0.2), rgba(255,77,0,0) 50%)' }} />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.25), rgba(0,0,0,0)), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.18), rgba(0,0,0,0))' }} />
      </div>

      <div className="relative h-full flex items-end md:items-center">
        <div className="mx-auto max-w-7xl px-6 pb-10 md:pb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white drop-shadow-[0_0_24px_rgba(255,77,0,0.25)]" style={{ fontFamily: 'Cinzel, serif' }}>
            A Cosmic Approach to Design
          </h1>
          <p className="mt-4 max-w-2xl text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Crafting immersive, intuitive interfaces that glow with clarity and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
