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
    <section id="programacao" className="py-20 md:py-32 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 relative inline-block">
            Nossa Programação
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold block mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-16 max-w-4xl mx-auto">
          {events.map((ev, index) => (
            <div key={index} className="bg-white rounded shadow-sm hover:shadow-md transition p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-dark mb-2">{ev.title}</h3>
                <p className="text-gray-600 mb-2">{ev.desc}</p>
                <span className="text-gold font-bold uppercase text-sm tracking-wider">{ev.type}</span>
              </div>
              <div className="bg-gold-light text-gold px-6 py-3 rounded text-center min-w-[140px]">
                <div className="font-bold">{ev.date.split('|')[1]}</div>
                <div className="text-sm text-gray-500">{ev.date.split('|')[0]}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-dark text-white p-8 rounded text-center max-w-2xl mx-auto">
          <h4 className="text-xl font-serif font-bold mb-2">Horário Especial</h4>
          <p className="opacity-90">1° e 2° domingo do mês os cultos são às <strong className="text-gold">10:00</strong></p>
        </div>
      </div>
    </section>
  );
}

export default Events;