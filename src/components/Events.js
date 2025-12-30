import React, { useState, useEffect } from 'react';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Lógica simplificada de datas para o exemplo
    const getNextDay = (dayIndex, time) => {
      const d = new Date();
      const diff = (7 + dayIndex - d.getDay()) % 7;
      const next = new Date(d);
      next.setDate(d.getDate() + diff);
      return next.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) + ` | ${time}`;
    };

    setEvents([
      { title: 'Culto de Domingo', desc: 'Culto de celebração e adoração', date: getNextDay(0, '19:00'), type: 'Culto' },
      { title: 'Culto de Terça-feira', desc: 'Culto de ensino e comunhão', date: getNextDay(2, '20:00'), type: 'Culto' },
      { title: 'Culto de Quinta-feira', desc: 'Culto de oração e libertação', date: getNextDay(4, '20:00'), type: 'Culto' },
      { title: 'Estudo Bíblico Online', desc: 'Estudo da Palavra de Deus online', date: getNextDay(1, '20:00'), type: 'Estudo' },
    ]);
  }, []);

  return (
    <section id="programacao" className="py-24 bg-bg-light relative">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        {/* Cabeçalho Padronizado */}
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Agenda</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
            Nossa Programação
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* Lista de Eventos */}
        <div className="grid grid-cols-1 gap-6 mb-20 max-w-5xl mx-auto">
          {events.map((ev, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8">
              
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  {ev.type}
                </span>
                <h3 className="text-2xl font-serif font-bold text-dark mb-1 group-hover:text-gold transition-colors">{ev.title}</h3>
                <p className="text-gray-500">{ev.desc}</p>
              </div>

              {/* Badge de Data/Hora */}
              <div className="mt-4 md:mt-0 bg-bg-light border border-gray-200 text-dark px-6 py-4 rounded-lg text-center min-w-[160px] md:ml-6 group-hover:border-gold/50 transition-colors">
                <div className="text-2xl font-bold font-serif text-gold">{ev.date.split('|')[1]}</div>
                <div className="text-xs uppercase text-gray-400 tracking-wider mt-1">
                  {ev.date.split('|')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horário Especial - Destaque Elaborado */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-dark to-[#151515] rounded-2xl shadow-2xl p-1 overflow-hidden relative">
            {/* Borda Dourada Sutil */}
            <div className="absolute inset-0 border border-gold/20 rounded-2xl pointer-events-none"></div>
            
            <div className="relative z-10 bg-dark/50 backdrop-blur-sm rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Lado Esquerdo: Texto */}
              <div className="text-center md:text-left space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2">
                  <i className="fas fa-exclamation-circle"></i> Atenção
                </div>
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-white">Horário Especial</h4>
                <p className="text-gray-400 text-lg">
                  1° e 2° domingo do mês os cultos são às
                </p>
              </div>

              {/* Lado Direito: Grande Horário */}
              <div className="relative group cursor-default">
                {/* Brilho de fundo do horário */}
                <div className="absolute -inset-4 bg-gold/20 rounded-full blur-2xl group-hover:bg-gold/30 transition duration-500"></div>
                
                <div className="relative text-center">
                  <div className="text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg tracking-tight">
                    10:00
                  </div>
                  <div className="text-gold text-xs font-bold uppercase tracking-widest mt-1">Manhã</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Events;