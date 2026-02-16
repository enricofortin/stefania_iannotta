
import React from 'react';

const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-[#231F20] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-heading text-6xl mb-12">IL VALORE DI UN SUPPORTO SPECIALISTICO</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="shrink-0 w-1 bg-sage"></div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Sicurezza Normativa</h4>
                  <p className="text-gray-400">Garantisco che ogni atto amministrativo e piano tariffario sia in piena linea con le regolazioni ARERA.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-1 bg-sage"></div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Ottimizzazione delle Risorse</h4>
                  <p className="text-gray-400">Analisi profonda dei modelli operativi per ridurre i tempi di gestione e migliorare il rapporto con il cittadino.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-1 bg-sage"></div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Continuità Gestionale</h4>
                  <p className="text-gray-400">Supporto continuativo nel tempo, non semplici interventi spot, per assicurare risultati duraturi.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="bg-white rounded-3xl p-10 text-black">
            <h3 className="font-heading text-4xl mb-6">PRENOTA UNA CONSULENZA</h3>
            <p className="text-gray-600 mb-8">Definiamo insieme il percorso più adatto alle esigenze della tua amministrazione o azienda.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Nome e Cognome</label>
                <input type="text" className="w-full border-b border-gray-300 py-3 focus:border-sage outline-none transition-colors" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email Professionale</label>
                <input type="email" className="w-full border-b border-gray-300 py-3 focus:border-sage outline-none transition-colors" placeholder="email@ente.it" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Ente / Azienda</label>
                <input type="text" className="w-full border-b border-gray-300 py-3 focus:border-sage outline-none transition-colors" placeholder="Nome organizzazione" />
              </div>
              <button className="w-full bg-sage text-white py-4 rounded-full font-heading text-xl tracking-wide mt-8 hover:opacity-90 transition-opacity">
                INVIA RICHIESTA
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
