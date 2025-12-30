import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-400 pt-20 pb-8 relative overflow-hidden">
      {/* Decoração de Fundo Sutil (Glow Dourado) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Coluna 1: Identidade e Redes Sociais */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold text-white mb-2 tracking-wide">IBVRD</h3>
              <div className="w-12 h-1 bg-gold rounded-full"></div>
            </div>
            
            <p className="mb-8 leading-relaxed text-gray-400">
              Igreja Batista Vida no Reino de Deus. Uma igreja em movimento, firmada no ensino da palavra e direcionada pelo Espírito Santo.
            </p>
            
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-8 uppercase tracking-wider text-sm border-b border-white/10 pb-4">
              Navegação
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Programação', href: '#programacao' },
                { label: 'Ministérios', href: '#ministerios' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Contato', href: '#contato' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="group flex items-center text-gray-400 hover:text-gold transition-all duration-300 transform hover:translate-x-2"
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

          {/* Coluna 3: Liderança e Versículo */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-8 uppercase tracking-wider text-sm border-b border-white/10 pb-4">
              Liderança
            </h3>
            
            <div className="mb-8">
              <p className="mb-1 text-white font-medium">Pastor Presidente</p>
              <p className="text-gold italic text-lg">Robert Lula Ramos</p>
            </div>

            <div className="relative bg-white/5 p-6 rounded-xl border-l-4 border-gold backdrop-blur-sm">
              <i className="fas fa-quote-left text-gold/20 text-4xl absolute top-4 left-4"></i>
              <p className="text-gray-300 italic font-serif relative z-10 text-sm leading-relaxed">
                "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações."
              </p>
              <div className="mt-4 text-right">
                <span className="text-gold font-bold text-xs uppercase tracking-widest">Atos 2:42</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} <span className="text-white font-semibold">IBVRD</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;