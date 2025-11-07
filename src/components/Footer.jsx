import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-white/5" style={{ background: 'linear-gradient(to bottom, rgba(255,77,0,0.05), rgba(0,0,0,0))' }}>
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          © {new Date().getFullYear()} Niranj R — UI/UX Designer
        </p>
        <div className="flex items-center gap-4 text-white/70" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
