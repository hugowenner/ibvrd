import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pt-16 pb-12 px-6 md:px-12 border-t border-gray-100">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {/* Coluna 1 */}
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-serif font-bold text-dark mb-2 tracking-wide">IBVRD</h3>
                <div className="w-12 h-1 bg-gold rounded-full"></div>
              </div>
              <p className="mb-8 leading-relaxed text-gray-500 font-sans">
                Igreja Batista Vida no Reino de Deus. Uma igreja em movimento, firmada no ensino da palavra e direcionada pelo Espírito Santo.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-gray-100 text-dark border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition duration-300 shadow-sm">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-gray-100 text-dark border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition duration-300 shadow-sm">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full bg-gray-100 text-dark border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition duration-300 shadow-sm">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Coluna 2 */}
            <div>
              <h3 className="text-lg font-serif font-bold text-dark mb-8 uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
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

            {/* Coluna 3 */}
            <div>
              <h3 className="text-lg font-serif font-bold text-dark mb-8 uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
                Liderança
              </h3>
              <div className="mb-8">
                <p className="mb-1 text-dark font-medium">Pastor Presidente</p>
                <p className="text-gold italic text-lg">Robert Lula Ramos</p>
              </div>
              <div className="relative bg-bg-light p-6 rounded-xl border-l-4 border-gold shadow-inner">
                <i className="fas fa-quote-left text-gold/10 text-4xl absolute top-4 left-4"></i>
                <p className="text-gray-600 italic font-serif relative z-10 text-sm leading-relaxed">
                  "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações."
                </p>
                <div className="mt-4 text-right">
                  <span className="text-gold font-bold text-xs uppercase tracking-widest">Atos 2:42</span>
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