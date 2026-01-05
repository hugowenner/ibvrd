import React from 'react';
import SectionHeader from './SectionHeader';

function Gallery() {
  const galleryImages = [
    { id: 1, seed: 'worship', category: 'Cultos' },
    { id: 2, seed: 'baptism', category: 'Batismos' },
    { id: 3, seed: 'event', category: 'Eventos' },
    { id: 4, seed: 'charity', category: 'Ação Social' },
    { id: 5, seed: 'prayer', category: 'Oração' },
    { id: 6, seed: 'music', category: 'Louvor' },
    { id: 7, seed: 'family', category: 'Comunhão' },
    { id: 8, seed: 'preach', category: 'Ensino' },
  ];

  return (
    <section id="galeria" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          label="Nossos Momentos" 
          title="Galeria de Fotos" 
          description="Confira um pouco da nossa caminhada, celebrações e comunhão."
        />

        {/* Slider Horizontal */}
        <div className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory px-2 md:px-0 scrollbar-hide">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer shrink-0 
                      w-[260px] h-[340px] md:w-[300px] md:h-[400px] lg:w-[320px] lg:h-[420px]
                      snap-center border border-gray-100"
            >
              <img 
                src={`https://picsum.photos/seed/${img.seed}/600/800`} 
                alt={`Foto da galeria IBVRD - ${img.category}`} 
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center text-2xl transform translate-y-4 group-hover:translate-y-0 transition duration-300 shadow-lg">
                  <i className="fas fa-plus"></i>
                </div>
                <span className="mt-3 font-medium uppercase text-xs tracking-widest transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
          <div className="w-4 shrink-0 hidden md:block"></div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/ibvrd_oficial/" 
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