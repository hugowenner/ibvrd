import React from 'react';

function Ministries() {
  const ministries = [
    { name: "Louvor", img: "https://picsum.photos/seed/louvor/400/300" },
    { name: "Jovens", img: "https://picsum.photos/seed/jovens/400/300" },
    { name: "Mulheres", img: "https://picsum.photos/seed/mulheres/400/300" },
  ];

  return (
    <section id="ministerios" className="py-20 md:py-32 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 relative inline-block">
            Áreas de Ministério
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold block mt-2"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministries.map((m, i) => (
            <div key={i} className="bg-white rounded overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <img src={m.img} alt={m.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-dark mb-2">Ministério de {m.name}</h3>
                <p className="text-gray-600 mb-4">Descrição genérica do Ministério de {m.name}...</p>
                <a href="#contato" className="text-gold font-bold hover:text-gold-dark">Saiba mais <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Ministries;