import React, { useState, useEffect } from 'react'
import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark.jpg'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (e, id) => {
    e.preventDefault()

    const element = document.getElementById(id)
    if (!element) return

    const headerOffset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    if (isOpen) setIsOpen(false)
  }

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Programação', id: 'programacao' },
    { label: 'Ministérios', id: 'ministerios' },
    { label: 'Galeria', id: 'galeria' },
    { label: 'Contato', id: 'contato' },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={(e) => scrollToSection(e, 'inicio')}
          className="flex items-center transition-transform hover:scale-105 duration-300 bg-transparent border-none cursor-pointer shrink-0"
          aria-label="Voltar ao topo"
        >
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Logo IBVRD"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled
                ? 'h-12 sm:h-14 md:h-12 rounded-full shadow-md'
                : 'h-12 sm:h-16 md:h-20 rounded-none shadow-none'
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`font-medium hover:text-gold transition-colors bg-transparent border-none cursor-pointer ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none bg-transparent border-none cursor-pointer shrink-0 ${
            scrolled ? 'text-dark' : 'text-white'
          }`}
          aria-label="Abrir menu"
        >
          <i
            className={`fas ${
              isOpen ? 'fa-times' : 'fa-bars'
            } text-2xl`}
          />
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
  )
}

export default Header