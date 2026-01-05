import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Lógica de datas dinâmica
    const getNextDay = (dayIndex, time) => {
      const d = new Date();
      const diff = (7 + dayIndex - d.getDay()) % 7;
      const next = new Date(d);
      next.setDate(d.getDate() + diff);
      return next.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) + ` | ${time}`;
    };

    // Populando eventos (Exemplo com dados fixos para estrutura)
    setEvents([
      { title: 'Culto de Domingo', desc: 'Celebração e adoração', date: getNextDay(0, '19:00'), type: 'Culto' },
      { title: 'Culto de Terça', desc: 'Ensino e comunhão', date: getNextDay(2, '20:00'), type: 'Culto' },
      { title: 'Culto de Quinta', desc: 'Oração e palavra', date: getNextDay(4, '20:00'), type: 'Culto' },
    ]);
  }, []);

  return (
    <section id="programacao" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <SectionHeader label="Agenda" title="Nossa Programação" description="Temos programação para todos os dias da semana." />

        {/* Renderização Condicional de Eventos */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
            {events.map((ev, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-bold uppercase tracking-wider mb-3 self-start">
                    {ev.type}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-dark mb-2 group-hover:text-gold transition-colors">{ev.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{ev.desc}</p>
                </div>
                <div className="bg-bg-light border-t border-gray-100 text-dark px-6 py-4 text-center group-hover:bg-gold/5 transition-colors">
                  <div className="text-xl font-bold font-serif text-gold">{ev.date.split('|')[1]}</div>
                  <div className="text-xs uppercase text-gray-400 tracking-wider mt-1">
                    {ev.date.split('|')[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Mensagem amigável quando não há eventos
          <div className="text-center py-20 bg-bg-light rounded-2xl border border-dashed border-gray-300 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400 text-3xl">
              <i className="far fa-calendar-check"></i>
            </div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-2">Em breve</h3>
            <p className="text-gray-600">Estamos preparando novos eventos e novidades para você. Fique atento!</p>
          </div>
        )}

        {/* Aviso de Horário Especial */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gradient-to-br from-dark to-dark-soft rounded-2xl shadow-2xl p-1 overflow-hidden relative border border-gold/10">
            <div className="relative z-10 bg-dark/40 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3">
              <div className="flex items-center gap-2 text-gold uppercase tracking-[0.2em] text-[10px] font-bold">
                <i className="fas fa-exclamation-circle"></i> Atenção
              </div>
              <h4 className="text-2xl font-serif font-bold text-white leading-tight">Horário Especial</h4>
              <p className="text-gray-400 text-sm font-sans">
                1° e 2° domingo do mês os cultos são às
              </p>
              <div className="relative group cursor-default my-1">
                <div className="absolute -inset-3 bg-gold/20 rounded-full blur-xl opacity-50"></div>
                <div className="relative text-center">
                  <div className="text-5xl font-serif font-bold text-white drop-shadow-md tracking-tight leading-none">10:00</div>
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