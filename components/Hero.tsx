
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="font-heading text-6xl md:text-8xl leading-none mb-6">
            STRATEGIE E SOLUZIONI<br />
            PER LE <span className="text-sage">PUBLIC UTILITIES</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mb-8 leading-relaxed">
            Consulenza specialistica a supporto di imprese ed amministrazioni pubbliche nella gestione dei servizi idrici e dei rifiuti, con focus su compliance e innovazione operativa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-sage text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Richiedi consulenza
            </a>
            <a 
              href="#services" 
              className="border border-gray-300 px-8 py-4 rounded-full font-medium hover:bg-white transition-all"
            >
              Esplora i servizi
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/fotosito.jpg" 
              alt="Professional architecture and structure" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
