import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 text-2xl font-bold font-serif ${scrolled ? 'text-gold' : 'text-white'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${scrolled ? 'bg-gold text-white' : 'bg-white text-gold'}`}>
            <i className="fas fa-church"></i>
          </div>
          <span>IBVRD</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {['Início', 'Sobre', 'Programação', 'Ministérios', 'Galeria', 'Contato'].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`} 
              className={`font-medium hover:text-gold transition-colors relative ${scrolled ? 'text-dark' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className={`md:hidden focus:outline-none ${scrolled ? 'text-dark' : 'text-white'}`}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-6 flex flex-col items-center gap-6">
          {['Início', 'Sobre', 'Programação', 'Ministérios', 'Galeria', 'Contato'].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`} 
              onClick={toggleMenu}
              className="text-dark font-medium hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;