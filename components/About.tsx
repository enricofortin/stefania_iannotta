
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sage font-semibold tracking-widest text-sm uppercase mb-4 block">Profilo Professionale</span>
            <h2 className="font-heading text-5xl mb-8">COMPETENZA AL SERVIZIO DELLE AMMINISTRAZIONI</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Sono lauerata in Giurisprudenza, ho un master in Diritto Tributario e sono un Project Manager certificato.
                Sono una consulente dedicata a supporto di imprese ed amministrazioni pubbliche, specializzata nel settore delle <strong>public utilities</strong>, al quale mi rivolgo in modo quasi esclusivo.
              </p>
              <p>
                La mia esperienza si è consolidata nel supporto strategico alle amministrazioni comunali, con un focus particolare sulla gestione dei servizi pubblici e dei processi legati al rapporto con l’utenza.
              </p>
              <p>
                Il mio fattore distintivo risiede nella capacità di ascolto e nella comprensione profonda delle specifiche esigenze territoriali, anticipando le sfide normative e operative dei miei clienti.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img src="/foto_stefania.JPG" alt="Persona che lavora in ufficio" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="aspect-square bg-sage rounded-2xl flex items-center justify-center p-8 text-white">
              <p className="font-heading text-3xl text-center leading-tight">ESPERIENZA PLURIENNALE NEGLI ENTI LOCALI</p>
            </div>
            <div className="col-span-2 aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden">
              <img src="/foto2.JPG" alt="Paesaggio natura" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
