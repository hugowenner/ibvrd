import React from 'react';

function Hero() {
  return (
    <section id="inicio" className="h-screen min-h-[700px] bg-hero-pattern bg-cover bg-center flex items-center justify-center text-white relative">
      <div className="container mx-auto px-6 text-center animate-fade-in relative z-10">
        <span className="inline-block bg-gold/20 border border-gold/40 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
          Bem-vindo ao Lar
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Igreja Batista<br />Vida no Reino de Deus
        </h1>
        <p className="text-xl md:text-2xl font-light italic mb-10 max-w-2xl mx-auto opacity-90">
          "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações." - Atos 2:42
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#programacao" className="bg-gold text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gold-dark transition shadow-lg">
            Nossa Programação
          </a>
          <a href="#contato" className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-gold transition">
            Fale Conosco
          </a>
        </div>
      </div>
      {/* Gradiente suave no fundo para mesclar com a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-light to-transparent"></div>
    </section>
  );
}

export default Hero;