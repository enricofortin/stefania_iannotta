
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#F4F4F4] px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-sage rounded-full"></div>
          <span className="font-heading text-xl tracking-wider">CONSULENTE UTILITIES</span>
        </div>
        
        <div className="flex gap-8 text-xs font-bold tracking-widest text-gray-500">
          <a href="#" className="hover:text-sage transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-sage transition-colors">COOKIES</a>
          <a href="#" className="hover:text-sage transition-colors">LINKEDIN</a>
        </div>

        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} - Consulenza Specialistica Public Utilities. Tutti i diritti riservati.
        </div>
      </div>
      
      {/* Visual reference to the big text in the GreenBloom footer */}
      <div className="max-w-7xl mx-auto mt-20 opacity-5">
        <h1 className="font-heading text-[12vw] leading-none text-center select-none">PUBLIC UTILITIES</h1>
      </div>
    </footer>
  );
};

export default Footer;
