import React from 'react';

function Gallery() {
  // Simulação de dados reais com seeds para garantir imagens consistentes
  const galleryImages = [
    { id: 1, seed: 'worship' },
    { id: 2, seed: 'church' },
    { id: 3, seed: 'bible' },
    { id: 4, seed: 'community' },
    { id: 5, seed: 'prayer' },
    { id: 6, seed: 'music' },
    { id: 7, seed: 'family' },
    { id: 8, seed: 'preach' },
  ];

  return (
    <section id="galeria" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Cabeçalho Padronizado */}
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Nossos Momentos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
            Galeria de Fotos
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Confira um pouco da nossa caminhada, celebrações e comunhão.
          </p>
        </div>

        {/* Grid da Galeria */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer aspect-[4/5] md:aspect-square"
            >
              {/* Imagem */}
              <img 
                src={`https://picsum.photos/seed/${img.seed}/600/800`} 
                alt="Foto da galeria IBVRD" 
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
              
              {/* Overlay ao passar o mouse */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center text-2xl transform translate-y-4 group-hover:translate-y-0 transition duration-300 shadow-lg">
                  <i className="fas fa-plus"></i>
                </div>
                <span className="mt-3 font-medium uppercase text-xs tracking-widest transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">
                  Ver Mais
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Ação (Simulado para Redes Sociais) */}
        <div className="text-center mt-16">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 border-2 border-dark text-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-dark hover:text-gold transition duration-300"
          >
            <i className="fab fa-instagram"></i>
            Siga-nos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;