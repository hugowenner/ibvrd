import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Função para rolagem suave ajustada à altura do menu fixo
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Altura aproximada do header + margem de segurança
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    // Fecha o menu mobile se estiver aberto
    if (isOpen) setIsOpen(false);
  };

  // Lista explícita de IDs para garantir que correspondam às seções
  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Programação', id: 'programacao' },
    { label: 'Ministérios', id: 'ministerios' },
    { label: 'Galeria', id: 'galeria' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 text-2xl font-bold font-serif transition-colors ${scrolled ? 'text-gold' : 'text-white'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled ? 'bg-gold text-white' : 'bg-white text-gold'}`}>
            <i className="fas fa-church"></i>
          </div>
          <span>IBVRD</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`font-medium hover:text-gold transition-colors bg-transparent border-none cursor-pointer ${scrolled ? 'text-dark' : 'text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className={`md:hidden ${scrolled ? 'text-dark' : 'text-white'} focus:outline-none bg-transparent border-none cursor-pointer`}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-6 flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-dark font-medium hover:text-gold transition-colors bg-transparent border-none cursor-pointer text-lg"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;