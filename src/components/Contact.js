import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import Button from './Button';

function Contact() {
  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Estado apenas para controlar o botão (Enviando... / Enviar)
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Extraímos os dados para enviar conforme sua solicitação
    const { name, email, message } = formData;

    try {
      // Faz o fetch para o arquivo PHP (MUDANÇA AQUI)
      const response = await fetch('/contato.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      const data = await response.json();
      
      // Alerta de sucesso ou erro conforme sua solicitação
      alert(data.message);

      // Se der certo, limpa o formulário
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
      }

    } catch (error) {
      alert('Erro ao enviar mensagem');
    } finally {
      // Libera o botão novamente
      setStatus('idle');
    }
  };

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
                  ibvrd.oficial@gmail.com
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 mt-4">
              <div className="w-full h-64 sm:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4451.958827038099!2d-44.024598024017145!3d-19.83430993533747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6922721fd6e31%3A0x95887b7c143323b4!2sAv.%20Campos%20Gerais%2C%2080%20-%20Parque%20Xangri-L%C3%A1%2C%20Contagem%20-%20MG%2C%2032187-440!5e1!3m2!1spt-BR!2sbr!4v1767701562402!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização IBVRD - Av. Campos Gerais, 80"
                />
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

          {/* Coluna Direita: Formulário */}
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-fit">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8">Envie sua mensagem</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold outline-none transition" 
                  placeholder="Seu nome" 
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold outline-none transition" 
                  placeholder="seu@email.com" 
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-dark rounded-lg focus:ring-2 focus:ring-gold outline-none transition resize-none" 
                  placeholder="Como podemos ajudar?" 
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="primary"
                className={`w-full justify-center ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`} 
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin"></i> Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;