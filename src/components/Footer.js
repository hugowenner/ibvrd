import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-400 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Coluna 1 */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-6">IBVRD</h3>
            <p className="mb-6 leading-relaxed">Igreja Batista Vida no Reino de Deus. Uma igreja em movimento, firmada no ensino da palavra.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Programação', 'Ministérios', 'Galeria', 'Contato'].map((item, idx) => (
                <li key={idx}><a href={`#${item.toLowerCase().replace('ç','c').replace('ã','a')}`} className="hover:text-gold hover:pl-2 transition-all">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Liderança</h3>
            <p className="mb-2"><strong className="text-white">Pastor Presidente</strong></p>
            <p className="mb-4">Robert Lula Ramos</p>
            <div className="bg-white/5 p-4 border-l-2 border-gold italic">
              "Atos 2:42: E perseveravam na doutrina dos apóstolos..."
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {currentYear} Igreja Batista Vida no Reino de Deus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;