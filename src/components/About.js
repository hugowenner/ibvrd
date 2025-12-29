import React from 'react';

function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 relative inline-block">
            Nossa História
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold block mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">Conheça a trajetória de fé e perseverança da IBVRD.</p>
        </div>

        {/* Bloco de História */}
        <div className="bg-bg-light p-8 md:p-12 border-l-4 border-gold relative mb-16 max-w-4xl mx-auto rounded-r-lg">
          <span className="text-6xl text-gold opacity-20 absolute top-4 left-4 font-serif">"</span>
          <p className="text-gray-600 italic text-lg leading-relaxed relative z-10 whitespace-pre-line">
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

        {/* Aniversário */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-gold to-gold-dark text-white p-8 rounded shadow-lg">
            <h3 className="text-3xl font-serif font-bold mb-2">18 Anos de Fundação</h3>
            <p>Celebrando a fidelidade de Deus em nossa jornada</p>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4 relative inline-block">
            Nossos Valores
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold block mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'fa-heart', title: 'Amor a Deus', desc: 'Amar a Deus acima de todas as coisas.' },
            { icon: 'fa-bible', title: 'Fidelidade às Escrituras', desc: 'Buscar a verdade na Palavra de Deus.' },
            { icon: 'fa-users', title: 'Comunhão', desc: 'Cultivar relacionamentos genuínos.' },
            { icon: 'fa-globe-americas', title: 'Evangelismo', desc: 'Compartilhar o evangelho com todos.' },
            { icon: 'fa-praying-hands', title: 'Adoração', desc: 'Expressar nosso amor e gratidão a Deus.' },
            { icon: 'fa-hands-helping', title: 'Serviço ao Próximo', desc: 'Servir aos outros com humildade.' }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 p-8 rounded hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-gold-light text-gold rounded-full flex items-center justify-center text-2xl mb-6">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h4 className="text-xl font-serif font-bold mb-3 text-dark">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;