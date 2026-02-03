import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já existe consentimento
    const consent = localStorage.getItem('ibvrd_cookie_consent');
    if (!consent) {
      // Delay de 1.5s para suavidade
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('ibvrd_cookie_consent', 'accepted');
    setIsVisible(false);
    // Aqui você chamaria a função para carregar scripts (ex: initializeGA())
  };

  const rejectCookies = () => {
    localStorage.setItem('ibvrd_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  // Use as classes do Tailwind que você já usa no projeto
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[800px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gold/20 p-6 md:p-8 z-50 transition-all duration-700 animate-fade-in-up">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Ícone Animado */}
        <div className="hidden md:flex w-12 h-12 bg-gold/10 text-gold rounded-full items-center justify-center text-2xl border border-gold/30 shrink-0 animate-bounce-slow">
          <i className="fas fa-cookie-bite"></i>
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-serif font-bold text-dark mb-2">Sua privacidade importa</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site IBVRD. Ao continuar navegando, você concorda com nossa política de privacidade.
          </p>
          <a href="#" className="text-gold text-xs font-bold uppercase tracking-wider hover:underline">Política de Privacidade</a>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={rejectCookies}
            className="flex-1 md:flex-none border border-gray-200 text-gray-500 py-3 px-6 rounded-lg text-sm font-bold uppercase hover:bg-gray-50 transition"
          >
            Recusar
          </button>
          <button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none bg-gold text-dark py-3 px-6 rounded-lg text-sm font-bold uppercase shadow-lg shadow-gold/30 hover:bg-white hover:scale-105 transition duration-300"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;