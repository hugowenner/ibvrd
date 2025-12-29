import React from 'react';

function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 relative inline-block">
            Galeria de Fotos
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold block mt-2"></span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((item) => (
             <img key={item} src={`https://picsum.photos/seed/${item}/400/300`} alt="Foto" className="w-full h-48 object-cover rounded hover:opacity-80 transition cursor-pointer" />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery;