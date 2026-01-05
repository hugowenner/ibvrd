import React from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';

function Contact() {
  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          label="Fale Conosco" 
          title="Entre em Contato" 
          description="Estamos aqui para ouvir você. Venha nos fazer uma visita ou envie uma mensagem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Coluna Esquerda: Informações Visuais */}
          <div className="flex flex-col gap-6">
            
            {/* Endereço */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gold flex gap-6 items-start">
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center text-2xl shrink-0">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="font-bold text-dark text-lg mb-1">Endereço</h4>
                <p className="text-gray-600 font-sans leading-relaxed">
                  Avenida Campos Gerais, 80<br />
                  Bairro Xangrilá - Contagem - MG
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gold flex gap-6 items-center">
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center text-2xl shrink-0">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 className="font-bold text-dark text-lg mb-1">Telefone & WhatsApp</h4>
                <a href="tel:31998607491" className="text-xl font-serif font-bold text-dark hover:text-gold transition">
                  31 99860-7491
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gold flex gap-6 items-center">
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center text-2xl shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-bold text-dark text-lg mb-1">E-mail</h4>
                <a href="mailto:igrejabatistavidanoreinodedeus@gmail.com" className="text-gray-600 hover:text-gold transition font-medium break-all">
                  igrejabatistavidanoreinodedeus@gmail.com
                </a>
              </div>
            </div>

            {/* Card de Horários (Compacto) */}
            <div className="mt-4">
              <h4 className="text-lg font-serif font-bold text-dark mb-4 px-2">Horários de Culto</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-bg-light p-4 rounded-xl text-center border border-gray-100">
                  <span className="block text-xs text-gold font-bold uppercase tracking-widest mb-1">Domingos</span>
                  <span className="text-xl font-serif font-bold text-dark">19:00</span>
                  <span className="block text-xs text-gray-400 mt-1">*(1° e 2°: 10:00)</span>
                </div>
                <div className="bg-bg-light p-4 rounded-xl text-center border border-gray-100">
                  <span className="block text-xs text-gold font-bold uppercase tracking-widest mb-1">Terças e Quintas</span>
                  <span className="text-xl font-serif font-bold text-dark">20:00</span>
                </div>
                <div className="bg-bg-light p-4 rounded-xl text-center border border-gray-100">
                  <span className="block text-xs text-gold font-bold uppercase tracking-widest mb-1">Segunda (Online)</span>
                  <span className="text-xl font-serif font-bold text-dark">20:00</span>
                </div>
                <div className="bg-bg-light p-4 rounded-xl text-center border border-gray-100">
                  <span className="block text-xs text-gold font-bold uppercase tracking-widest mb-1">Quarta (Visita)</span>
                  <span className="text-xl font-serif font-bold text-dark">20:00</span>
                </div>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Formulário e Botões de Ação */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-fit">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8">Envie sua mensagem</h3>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold outline-none transition" placeholder="Seu nome" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold outline-none transition" placeholder="seu@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea rows="5" className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold outline-none transition resize-none" placeholder="Como podemos ajudar?" required />
              </div>
              <Button type="submit" icon="fa-paper-plane" className="w-full justify-center">Enviar Mensagem</Button>
            </form>

            {/* Botões de Ação: Instagram e WhatsApp */}
            <div className="mt-10 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-sm mb-4 font-medium">Entre em contato direto:</p>
              <div className="flex flex-col gap-3 justify-center">
                <a 
                  href="https://www.instagram.com/ibvrd_oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-3 border-2 border-dark text-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-dark hover:text-gold transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                  Siga-nos no Instagram
                </a>
                
                <a 
                  href="https://wa.me/5531998607491?text=Oi%2C%20eu%20queria%20mais%20informa%C3%A7%C3%B5es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-dark text-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-dark hover:text-gold transition duration-300"
                >
                  <i className="fab fa-whatsapp"></i>
                  Fale no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;