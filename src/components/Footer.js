import React from 'react';
import pastorImage from '../assets/pastor.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Função auxiliar (mantida para compatibilidade)
  const normalizeId = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/ç/g, "c") 
      .replace(/\s+/g, "-") 
      .replace("nós", "nos"); 
  };

  // 🔧 CORREÇÃO AQUI: Adicionei o campo 'id' para garantir que aponte exatamente para o ID da seção
  const menuItems = [
    { label: 'Início', id: 'inicio' },              // Aponta para id="inicio"
    { label: 'Sobre Nós', id: 'sobre' },            // Aponta para id="sobre" (Corrigido)
    { label: 'Programação', id: 'programacao' },   // Aponta para id="programacao"
    { label: 'Ministérios', id: 'ministerios' },   // Aponta para id="ministerios"
    { label: 'Galeria', id: 'galeria' },            // Aponta para id="galeria"
    { label: 'Contato', id: 'contato' }            // Aponta para id="contato"
  ];

  return (
    <footer className="pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pt-16 pb-12 px-6 md:px-12 border-t border-gray-100">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {/* Coluna 1: Identidade e Ações Rápidas */}
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-serif font-bold text-dark mb-2 tracking-wide">IBVRD</h3>
                <div className="w-12 h-1 bg-gold rounded-full"></div>
              </div>
              <p className="mb-8 leading-relaxed text-gray-500 font-sans">
                Igreja Batista Vida no Reino de Deus. Uma igreja em movimento, firmada no ensino da palavra e direcionada pelo Espírito Santo.
              </p>
              
              {/* Botões de Ação (Instagram e WhatsApp) */}
              <div className="flex flex-col gap-2 w-full">
                <a 
                  href="https://www.instagram.com/ibvrd_oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-dark text-dark px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-dark hover:text-gold transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                  Siga-nos no Instagram
                </a>
                
                <a 
                  href="https://wa.me/5531998607491?text=Oi%2C%20eu%20queria%20mais%20informa%C3%A7%C3%B5es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-dark text-dark px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-dark hover:text-gold transition duration-300"
                >
                  <i className="fab fa-whatsapp"></i>
                  Fale no WhatsApp
                </a>
              </div>
            </div>

            {/* Coluna 2: Navegação */}
            <div>
              <h3 className="text-lg font-serif font-bold text-dark mb-8 uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
                Navegação
              </h3>
              <ul className="space-y-4">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      // 🔧 CORREÇÃO AQUI: Usa item.id se existir, senão usa a função normal
                      href={`#${item.id || normalizeId(item.label)}`} 
                      className="group flex items-center text-gray-500 hover:text-gold transition-all duration-300 transform hover:translate-x-2"
                    >
                      <span className="w-0 group-hover:w-4 transition-all duration-300 text-gold opacity-0 group-hover:opacity-100">
                        <i className="fas fa-chevron-right text-xs"></i>
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Liderança (Destacado) */}
            <div>
              <h3 className="text-lg font-serif font-bold text-dark mb-8 uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
                Liderança
              </h3>
              
              <div className="bg-bg-light rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gold/30 shadow-sm">
                  <img
                    src={pastorImage}
                    alt="Pastor Presidente Robert Lula Ramos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gold font-bold uppercase tracking-widest mb-1">Pastor Presidente</p>
                <h4 className="text-2xl font-serif font-bold text-dark mb-4">Robert Lula Ramos</h4>
                
                <div className="relative bg-white p-4 rounded-xl shadow-inner border border-gold/10">
                  <i className="fas fa-quote-left text-gold/10 text-2xl absolute top-2 left-2"></i>
                  <p className="text-gray-600 italic font-serif text-sm leading-relaxed relative z-10">
                    "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações."
                  </p>
                  <div className="mt-3 text-right border-t border-gray-100 pt-2">
                    <span className="text-gold font-bold text-xs uppercase tracking-widest">Atos 2:42</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé Inferior */}
          <div className="border-t border-gray-100 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} <span className="text-dark font-semibold">IBVRD</span>. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition">Política de Privacidade</a>
              <a href="#" className="hover:text-gold transition">Termos de Uso</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;