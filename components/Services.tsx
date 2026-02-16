
import React from 'react';

const servicesList = [
  { title: "Compliance Normativa", desc: "Adeguamento costante alle direttive nazionali e regionali." },
  { title: "Software Selection", desc: "Scelta delle migliori soluzioni tecnologiche per la gestione dati." },
  { title: "Analisi Organizzativa", desc: "Efficientamento dei flussi tra Front Office e Back Office." },
  { title: "Fatturazione & Credito", desc: "Supporto continuativo nel ciclo attivo e nel recupero crediti." },
  { title: "Piani Tariffari", desc: "Predisposizione e consolidamento piani finanziari e tariffari." },
  { title: "Attività ARERA", desc: "Supporto specifico per i settori Idrico e Gestione Rifiuti." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-6xl leading-none">AMBITI DI<br />INTERVENTO</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-right hidden md:block">
            Supporto tecnico e strategico per affrontare la complessità dei servizi a rete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div key={idx} className="group relative bg-[#F9F9F9] rounded-2xl p-8 hover:bg-sage transition-colors duration-500 overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-heading text-2xl mb-3 group-hover:text-gray-900 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">{service.desc}</p>
                <div className="mt-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-sage group-hover:text-gray-900 transition-colors cursor-pointer">Approfondisci →</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-sage/5 rounded-full group-hover:bg-white/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
