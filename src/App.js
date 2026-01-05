import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Ministries from './components/Ministries';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import fundo from './assets/fundo.jpg';
import './index.css';

function App() {
  return (
    <div
      className="min-h-screen font-sans text-dark antialiased"
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay para leitura */}
      <div className="min-h-screen bg-white/70">
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
    </div>
  );
}

export default App;
