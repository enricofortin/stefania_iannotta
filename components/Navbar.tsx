
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F4F4]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo_stefania_iannotta.png" alt="Stefania Iannotta logo" className="w-20 h-20 rounded-full object-cover" />
          <span className="font-heading text-2xl tracking-wider">Stefania Iannotta</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-sage transition-colors">CHI SONO</a>
          <a href="#services" className="hover:text-sage transition-colors">SERVIZI</a>
          <a href="#contact" className="hover:text-sage transition-colors border border-sage px-4 py-2 rounded-full">CONTATTI</a>
        </div>

        <div className="md:hidden">
          <button className="text-2xl font-heading">MENU</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
