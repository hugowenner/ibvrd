import React from 'react';
import Card from './Card';

function Ministries() {
  const ministries = [
    { name: "Louvor", desc: "Levando a igreja aos pés do Pai através da adoração genuína.", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000&auto=format&fit=crop" },
    { name: "Jovens", desc: "Gerando uma nova geração de discípulos de Cristo firmados na Palavra.", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1000&auto=format&fit=crop" },
    { name: "Mulheres", desc: "Mulheres fortes na fé, cuidando umas das outras em amor.", img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <section id="ministerios" className="py-24 bg-bg-light relative">
      {/* Decoração de fundo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Onde servir</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
            Áreas de Ministério
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ministries.map((m, i) => (
            <Card 
              key={i} 
              isImageCard={true}
              title={`Ministério de ${m.name}`}
              description={m.desc}
              image={m.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ministries;