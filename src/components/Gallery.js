import React from 'react';
import SectionHeader from './SectionHeader';

// ========================
// IMPORTAÇÃO DOS ASSETS
// ========================
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';
import foto6 from '../assets/foto6.jpg';
import foto7 from '../assets/foto7.jpg';
import foto8 from '../assets/foto8.jpg';
import foto9 from '../assets/foto9.jpg';
import foto10 from '../assets/foto10.jpg';
import foto11 from '../assets/foto11.jpg';
import foto12 from '../assets/foto12.jpg';
import foto13 from '../assets/foto13.jpg';
import foto14 from '../assets/foto14.jpg';
import foto15 from '../assets/foto15.jpg';
import foto16 from '../assets/foto16.jpg';
import foto17 from '../assets/foto17.jpg';
import foto18 from '../assets/foto18.jpg';

import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

function Gallery() {
  // ========================
  // LISTA DE ITENS DA GALERIA
  // Você pode reorganizar ou alterar as categorias aqui
  // ========================
  const galleryItems = [
    { id: 1, src: foto1, category: 'Momento Especial', type: 'image' },
    { id: 2, src: foto2, category: 'Momento Especial', type: 'image' },
    { id: 3, src: foto3, category: 'Momento Especial', type: 'image' },
    { id: 4, src: foto4, category: 'Momento Especial', type: 'image' },
    { id: 5, src: foto5, category: 'Momento Especial', type: 'image' },
    { id: 6, src: foto6, category: 'Momento Especial', type: 'image' },
    { id: 7, src: foto7, category: 'Momento Especial', type: 'image' },
    { id: 8, src: foto8, category: 'Momento Especial', type: 'image' },
    { id: 9, src: foto9, category: 'Momento Especial', type: 'image' },
    { id: 10, src: foto10, category: 'Momento Especial', type: 'image' },
    { id: 11, src: foto11, category: 'Momento Especial', type: 'image' },
    { id: 12, src: foto12, category: 'Momento Especial', type: 'image' },
    { id: 13, src: foto13, category: 'Momento Especial', type: 'image' },
    { id: 14, src: foto14, category: 'Momento Especial', type: 'image' },
    { id: 15, src: foto15, category: 'Momento Especial', type: 'image' },
    { id: 16, src: foto16, category: 'Momento Especial', type: 'image' },
    { id: 17, src: foto17, category: 'Momento Especial', type: 'image' },
    { id: 18, src: foto18, category: 'Momento Especial', type: 'image' },
    { id: 19, src: video1, category: 'Vídeo', type: 'video' },
    { id: 20, src: video2, category: 'Vídeo', type: 'video' },
  ];

  return (
    <section id="galeria" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          label="Nossos Momentos" 
          title="Galeria de Fotos e Vídeos" 
          description="Confira um pouco da nossa caminhada, celebrações e comunhão."
        />

        {/* Slider Horizontal */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-10 snap-x snap-mandatory px-2 sm:px-0 scrollbar-hide mx-auto w-full max-w-[100vw]">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer shrink-0 
                      w-[260px] h-[340px] sm:w-[280px] sm:h-[360px] md:w-[300px] md:h-[400px] lg:w-[320px] lg:h-[420px]
                      snap-center border border-gray-100"
            >
              {/* Renderização Condicional: Imagem ou Vídeo */}
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={`Foto da galeria IBVRD - ${item.category}`} 
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                />
              ) : (
                <video 
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              )}

              {/* Overlay de Hover */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center text-2xl transform translate-y-4 group-hover:translate-y-0 transition duration-300 shadow-lg">
                  <i className={`fas ${item.type === 'video' ? 'fa-play' : 'fa-plus'}`}></i>
                </div>
                <span className="mt-3 font-medium uppercase text-[10px] sm:text-xs tracking-widest transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
          <div className="w-4 shrink-0 hidden md:block"></div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a 
            href="https://www.instagram.com/ibvrd_oficial/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 border-2 border-dark text-dark px-6 sm:px-8 py-3 rounded-full font-bold uppercase text-[10px] sm:text-xs tracking-widest hover:bg-dark hover:text-gold transition duration-300"
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