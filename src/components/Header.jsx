import React from 'react';

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50/" style={{ backdropFilter: 'saturate(120%) blur(8px)', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))' }}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#ff4d00', boxShadow: '0 0 16px rgba(255,77,0,0.9)' }} />
          <span className="text-white/90 tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>Niranj R</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-white/70" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
