import React from 'react';

function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 relative inline-block">
            Entre em Contato
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold block mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-bg-light p-8 rounded">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8">Informações</h3>
            
            <div className="flex gap-4 mb-8 items-start">
              <div className="w-12 h-12 bg-gold-light text-gold rounded-full flex items-center justify-center text-xl shrink-0"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4 className="font-bold text-dark">Endereço</h4>
                <p className="text-gray-600">Avenida Campos Gerais 80- Xangrilá - Contagem - MG</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8 items-center">
              <div className="w-12 h-12 bg-gold-light text-gold rounded-full flex items-center justify-center text-xl shrink-0"><i className="fas fa-phone"></i></div>
              <div>
                <h4 className="font-bold text-dark">Telefone</h4>
                <p className="text-gray-600">31 99860-7491</p>
              </div>
            </div>

            <div className="bg-dark text-white p-8 rounded mt-8">
              <h4 className="text-xl font-serif font-bold text-white mb-4">Horários de Culto</h4>
              <div className="space-y-2 border-b border-gray-700 pb-2 mb-2 flex justify-between"><span>Domingo</span><span className="text-gold font-bold">19:00</span></div>
              <div className="space-y-2 border-b border-gray-700 pb-2 mb-2 flex justify-between"><span>Terça-feira</span><span className="text-gold font-bold">20:00</span></div>
              <div className="space-y-2 flex justify-between"><span>Quinta-feira</span><span className="text-gold font-bold">20:00</span></div>
              <p className="text-xs mt-4 opacity-70 text-center"><i className="fas fa-info-circle mr-1"></i> 1° e 2° domingo do mês: 10:00</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 p-8 rounded shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8">Envie sua mensagem</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block font-bold text-dark mb-2">Nome</label>
                <input type="text" className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition" placeholder="Digite seu nome completo" required />
              </div>
              <div>
                <label className="block font-bold text-dark mb-2">E-mail</label>
                <input type="email" className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition" placeholder="seu@email.com" required />
              </div>
              <div>
                <label className="block font-bold text-dark mb-2">Mensagem</label>
                <textarea rows="5" className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition" placeholder="Como podemos ajudá-lo?" required></textarea>
              </div>
              <button className="w-full bg-gold text-white font-bold uppercase tracking-wider py-4 hover:bg-gold-dark transition shadow-md">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;