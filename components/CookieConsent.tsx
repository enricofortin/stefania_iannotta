import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-[#231F20] text-white p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="font-heading text-lg mb-2">Gestione dei Cookie</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito. 
              Continuando la navigazione, accetti l'utilizzo dei cookie secondo la nostra{' '}
              <a href="#" className="text-sage hover:underline">politica sulla privacy</a>.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <button
              onClick={handleDecline}
              className="px-6 py-3 rounded-full border border-gray-400 text-sm font-medium hover:border-white transition-colors"
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 rounded-full bg-sage text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
