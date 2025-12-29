import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Ministries from './components/Ministries';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Importa o Tailwind

function App() {
  return (
    <div className="font-sans text-dark bg-bg-light antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Ministries />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;