import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';

function Contact() {
  return (
    <section id="contato" className="py-24 bg-bg-light relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          label="Fale Conosco" 
          title="Entre em Contato" 
          description="Estamos aqui para ouvir você. Venha nos fazer uma visita ou envie uma mensagem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Coluna Esquerda: Informações */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-serif font-bold text-dark mb-8 border-b border-gray-100 pb-4">
                Onde Estamos
              </h3>
              
              <div className="space-y-8">
                {/* Endereço */}
                <div className="flex gap-5 items-start group">
                  <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-gold group-hover:text-white transition duration-300">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg mb-1">Endereço</h4>
                    <p className="text-gray-600 font-sans leading-relaxed">
                      Avenida Campos Gerais 80<br />
                      Bairro Xangrilá - Contagem - MG
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex gap-5 items-center group">
                  <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-gold group-hover:text-white transition duration-300">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg mb-1">Telefone & WhatsApp</h4>
                    <a
                      href="tel:31998607491"
                      className="text-gray-600 hover:text-gold transition font-medium"
                    >
                      (31) 99860-7491
                    </a>
                  </div>
                </div>
              </div>

              {/* Card de Horários */}
              <div className="mt-10 bg-bg-light p-8 rounded-2xl shadow-inner border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                
                <h4 className="text-xl font-serif font-bold text-dark mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm">
                    <i className="fas fa-clock"></i>
                  </div>
                  Horários de Culto
                </h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-600 font-medium">Domingo</span>
                    <span className="text-2xl font-serif font-bold text-dark tracking-tight">19:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-600 font-medium">Terça-feira</span>
                    <span className="text-2xl font-serif font-bold text-dark tracking-tight">20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Quinta-feira</span>
                    <span className="text-2xl font-serif font-bold text-dark tracking-tight">20:00</span>
                  </div>
                </div>

                <div className="mt-6 bg-gold/5 p-4 rounded-xl border border-gold/10 flex items-center justify-center gap-2">
                  <i className="fas fa-info-circle text-gold text-sm"></i>
                  <p className="text-sm font-medium text-gray-700">
                    1° e 2° domingo: <strong className="text-gold">10:00</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-fit">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8">
              Envie sua mensagem
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition hover:bg-white" 
                  placeholder="Digite seu nome" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition hover:bg-white" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea 
                  rows="5" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition hover:bg-white resize-none" 
                  placeholder="Como podemos ajudar você?" 
                  required
                />
              </div>
              
              <Button
                type="submit"
                icon="fa-paper-plane"
                className="w-full justify-center"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
