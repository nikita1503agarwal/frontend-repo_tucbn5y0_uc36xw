import React from 'react';

const CTAButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#ff4d00]/70 text-white uppercase tracking-wide overflow-hidden"
      style={{
        fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        textShadow: '0 0 8px rgba(255,77,0,0.35)'
      }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[#ff4d00]/10 blur-xl" />
      <span className="relative z-10">View My Work</span>
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            '0 0 0 1px rgba(255,77,0,0.6) inset, 0 0 18px rgba(255,77,0,0.45), 0 0 40px rgba(255,77,0,0.25)'
        }}
      />
      <span
        aria-hidden
        className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(255,77,0,0.25), rgba(255,77,0,0) 70%)'
        }}
      />
    </button>
  );
};

export default CTAButton;
