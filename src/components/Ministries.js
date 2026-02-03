import React from 'react';
import Card from './Card';
import SectionHeader from './SectionHeader';
import louvorImage from '../assets/louvor.jpeg';
import criancasImage from '../assets/criancas.jpeg';

function Ministries() {
  const ministries = [
    { name: "Louvor", desc: "Levando a igreja aos pés do Pai através da adoração genuína.", img: louvorImage },
    { name: "Jovens", desc: "Gerando uma nova geração de discípulos de Cristo firmados na Palavra.", img: criancasImage },
    // CORREÇÃO FEITA ABAIXO: "cuidando umas das outras"
    { name: "Mulheres", desc: "Mulheres fortes na fé, cuidando umas das outras em amor.", img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop" },
    { name: "Homens", desc: "Homens firmados na fé, construindo laços de amizade e crescendo juntos na palavra de Deus.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" },
    { name: "Dança", desc: "Expressando a arte e a devoção através do movimento.", img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000&auto=format&fit=crop" },
    { name: "Evangelismo", desc: "Levando a mensagem de salvação a todos os lugares.", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1000&auto=format&fit=crop" },
    { name: "Tecnologia", desc: "Dando suporte e visibilidade à obra de Deus.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" },
    // NOVO MINISTÉRIO ADICIONADO: Diaconia
    { 
      name: "Diaconia", 
      desc: "Servir com alegria e excelência, auxiliando nas necessidades práticas da igreja e cuidando bem uns dos outros.", 
      img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" // Imagem de mãos ajudando/servindo
    }
  ];

  return (
    <section id="ministerios" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <SectionHeader 
          label="Onde servir" 
          title="Áreas de Ministério" 
          description="Conheça os espaços onde você pode usar seus talentos para o Reino."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic text-sm">
            * A descrição detalhada de cada ministério será adicionada em breve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ministries;