import React from 'react';
import Card from './Card';

function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Elemento decorativo de fundo sutil */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Quem Somos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
            Nossa História
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Bloco de História - Estilo Moderno */}
        <div className="bg-bg-light p-10 md:p-16 border-l-4 border-gold relative mb-24 max-w-5xl mx-auto rounded-r-2xl shadow-sm">
          <div className="absolute top-8 left-6 text-8xl text-gold font-serif opacity-10 leading-none font-bold">"</div>
          <p className="text-gray-700 italic text-lg md:text-xl leading-loose relative z-10 whitespace-pre-line font-serif text-justify">
            Uma igreja que nasceu dentro de casa, através de uma visão física mas espiritual.
            Acatada de prontidão por mim e por minha esposa.
            Largamos nossas profissões pela obra de Deus.
            Nasceu então a IBVRD.
            PEQUENA, dentro de casa....
            Passamos e começamos em um grupo pequeno de estudos aos sábados, até crescermos e escutarmos a voz de Deus para saírmos de casa!
            Abrimos um ministério.
            Vimos transformações, restaurações, curas e provisões.
            Sofremos pelo evangelho, fomos julgados por todos os lados relacionaveis.
            Não tínhamos cadeiras suficientes, não tínhamos pessoas para trabalhar, não tínhamos dinheiro para começar, somente a fé em Cristo que nos sustentava.
            Suportamos a dor das perdas e estamos de Pé.
            Contribuindo com o avanço do Reino !
            Hoje temos 18 anos de idade.
            Ainda não temos toda estrutura, mas continuamos a ter Cristo, o autor e consumador da nossa fé.
            A IBVRD é: Uma igreja em movimento,
            Firmada no ensino da palavra e direcionada pelo Espírito Santo.
            Tendo como base Atos 2:42..... Sendo alimentada e alimentando os santos de Jesus.
          </p>
        </div>

        {/* Aniversário - Destaque Visual (TAMANHO REDUZIDO) */}
        <div className="text-center mb-24">
          <div className="relative inline-block bg-gradient-to-br from-dark to-[#111] p-6 md:p-8 rounded-2xl shadow-xl border border-gold/20 transform hover:scale-105 transition duration-300">
            
            {/* Brilho de fundo */}
            <div className="absolute inset-0 bg-gold/5 rounded-2xl"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gold/20 blur-2xl rounded-full -z-10"></div>

            <span className="relative text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Comemorando</span>
            
            {/* Reduzido de 7xl para 5xl */}
            <h3 className="relative text-4xl md:text-5xl font-serif font-bold mb-2 text-white tracking-tight">
              18 Anos
            </h3>
            
            <div className="relative flex items-center justify-center gap-3 mb-2">
              <div className="w-6 h-px bg-gold"></div>
              <i className="fas fa-star text-gold text-[10px]"></i>
              <div className="w-6 h-px bg-gold"></div>
            </div>

            {/* Texto limpo e elegante, tamanho reduzido */}
            <p className="relative text-gray-200 text-sm font-light tracking-wide">
              Celebrando a fidelidade de Deus em nossa jornada
            </p>
          </div>
        </div>

        {/* Valores - Usando o Componente Card */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
            Nossos Valores
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Os pilares que sustentam nossa fé e comunidade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'fa-heart', title: 'Amor a Deus', desc: 'Amar a Deus acima de todas as coisas.' },
            { icon: 'fa-bible', title: 'Fidelidade', desc: 'Buscar a verdade na Palavra de Deus.' },
            { icon: 'fa-users', title: 'Comunhão', desc: 'Cultivar relacionamentos genuínos.' },
            { icon: 'fa-globe-americas', title: 'Evangelismo', desc: 'Compartilhar o evangelho com todos.' },
            { icon: 'fa-praying-hands', title: 'Adoração', desc: 'Expressar nosso amor e gratidão a Deus.' },
            { icon: 'fa-hands-helping', title: 'Serviço', desc: 'Servir aos outros com humildade.' }
          ].map((item, index) => (
            <Card 
              key={index} 
              icon={item.icon} 
              title={item.title} 
              description={item.desc} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;