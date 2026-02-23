import React from 'react';

function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Fundo com Overlay Gradiente Escuro */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/90"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        
        {/* --- MENSAGEM REMOVIDA DAQUI --- */}
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          Igreja Batista Vida no Reino de Deus
        </h1>

        {/* Subtítulo Institucional Curto */}        
        <div className="w-24 h-1 bg-gold mx-auto mb-12 shadow-[0_0_15px_rgba(212,175,55,0.8)] rounded-full"></div>
        
        {/* Destaque Central: Atos 2:42 */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -top-6 -left-6 text-6xl text-gold opacity-20 font-serif leading-none">"</div>
          <p className="text-2xl md:text-3xl text-white font-serif italic mb-4 leading-relaxed px-8">
            E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.
          </p>
          <div className="absolute -bottom-6 -right-6 text-6xl text-gold opacity-20 font-serif leading-none transform rotate-180">"</div>
        </div>
        
        <span className="block text-gold font-bold not-italic mt-10 text-sm tracking-[0.3em] uppercase drop-shadow-lg">
          Atos 2:42
        </span>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
          <a href="#programacao" className="bg-gold text-dark px-10 py-4 font-bold uppercase tracking-widest rounded hover:bg-white hover:scale-105 transition shadow-lg shadow-gold/30 duration-300">
            Nossa Programação
          </a>
          <a href="#contato" className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest rounded hover:bg-white hover:text-dark transition duration-300">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;