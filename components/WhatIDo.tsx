
import React from 'react';

const WhatIDo: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F4F4] px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-heading text-5xl md:text-6xl mb-4 uppercase">COSA FACCIO PER IL TUO ENTE</h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic">
          Ottimizzazione dei processi, garanzia di compliance e supporto decisionale continuo.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "RAPPORTO CON L'UTENZA",
            desc: "Dalla software selection all'analisi organizzativa di front e back office, definendo compiti e responsabilità per un servizio efficiente."
          },
          {
            title: "MESSA A PUNTO MODELLI",
            desc: "Interventi mirati sui processi gestionali, sia dal punto di vista formativo che nella creazione di modelli di funzionamento ottimali."
          },
          {
            title: "SUPPORTO NORMATIVO",
            desc: "Assistenza costante e aggiornata per la gestione del contenzioso tributario e civile, procedure concorsuali e regolazione contrattuale."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-sage transition-all group">
            <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mb-6 group-hover:bg-sage/80 group-hover:text-gray-900 transition-colors">
              <span className="font-heading text-xl">{idx + 1}</span>
            </div>
            <h3 className="font-heading text-2xl mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
