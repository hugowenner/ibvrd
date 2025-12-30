import React from 'react';

function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Fundo com Overlay Gradiente Escuro */}
      <div className="absolute inset-0 z-0">
        {/* Nota: Certifique-se de ter a classe bg-hero-pattern configurada ou use uma imagem inline */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/90"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        <span className="inline-block border border-gold/50 text-gold px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm bg-gold/10">
          Bem-vindo ao Lar Espiritual
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          IBVRD
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-4">
          Igreja Batista Vida no Reino de Deus
        </p>
        
        <div className="w-24 h-1 bg-gold mx-auto mb-10 shadow-[0_0_15px_rgba(212,175,55,0.8)] rounded-full"></div>
        
        <p className="text-lg md:text-xl text-gray-300 italic mb-12 max-w-2xl mx-auto font-serif">
          "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações." 
          <span className="block text-gold font-bold not-italic mt-2 text-sm tracking-widest uppercase">Atos 2:42</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
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