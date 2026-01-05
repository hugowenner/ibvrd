import React from 'react';
import Card from './Card';
import SectionHeader from './SectionHeader';

function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <SectionHeader label="Quem Somos" title="Nossa História" />

        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* BLOCO 1: A ORIGEM */}
          <div className="bg-bg-light p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative">
            <div className="absolute -top-4 left-8 bg-gold text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              A Origem
            </div>
            <p className="text-gray-700 text-lg leading-relaxed pt-4">
              A <strong>IBVRD</strong> nasceu dentro de casa, fruto de uma visão física, mas profundamente espiritual. Acatada de prontidão por mim e por minha esposa, largamos nossas profissões para dedicarmos à obra de Deus. O que começou pequeno, em um grupo de estudos aos sábados, logo se transformou em um ministério em movimento.
            </p>
          </div>

          {/* BLOCO 2: O CRESCIMENTO E DESAFIOS */}
          <div className="bg-bg-light p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative">
            <div className="absolute -top-4 left-8 bg-gold text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Crescimento & Fé
            </div>
            <p className="text-gray-700 text-lg leading-relaxed pt-4">
              Ao ouvirmos a voz de Deus para sairmos de casa, abrimos as portas do ministério. Vimos transformações, restaurações, curas e provisões. A jornada não foi fácil: sofremos pelo evangelho e fomos julgados. Não tínhamos cadeiras suficientes, nem pessoas para trabalhar, e o dinheiro era escasso. Mas tínhamos algo inabalável: <em>a fé em Cristo que nos sustentava</em>.
            </p>
          </div>

          {/* BLOCO 3: PROPÓSITO ATUAL */}
          <div className="bg-bg-light p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative">
            <div className="absolute -top-4 left-8 bg-gold text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Hoje
            </div>
            <p className="text-gray-700 text-lg leading-relaxed pt-4">
              Hoje comemoramos <strong>18 anos</strong> de fundação. Ainda não temos toda a estrutura física, mas continuamos a ter Cristo, o autor e consumador da nossa fé. A IBVRD é uma igreja firmada no ensino da Palavra e direcionada pelo Espírito Santo, tendo como base <strong>Atos 2:42</strong>, sendo alimentada e alimentando os santos de Jesus.
            </p>
          </div>

        </div>

        {/* MISSÃO (Caixa Informativa) */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-dark rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 opacity-20 pattern-dots"></div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6 relative z-10">Nossa Missão</h3>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
              Anunciar o Reino de Deus até que Ele venha, através da Bíblia, na qual cremos indiscutivelmente ser a voz de Deus materializada por homens cheios do seu Santo Espírito.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-24">
          <SectionHeader label="Nossos Valores" title="Pilares da Fé" description="Os fundamentos que sustentam nossa caminhada cristã." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-heart', title: 'Amor a Deus', desc: 'Amar a Deus acima de todas as coisas.' },
              { icon: 'fa-bible', title: 'Fidelidade às Escrituras', desc: 'Buscar a verdade na Palavra de Deus.' },
              { icon: 'fa-users', title: 'Comunhão', desc: 'Cultivar relacionamentos genuínos.' },
              { icon: 'fa-globe-americas', title: 'Evangelismo', desc: 'Compartilhar o evangelho com todos.' },
              { icon: 'fa-praying-hands', title: 'Adoração', desc: 'Expressar nosso amor e gratidão a Deus.' },
              { icon: 'fa-hands-helping', title: 'Serviço ao Próximo', desc: 'Servir aos outros com humildade.' }
            ].map((item, index) => (
              <Card key={index} icon={item.icon} title={item.title} description={item.desc} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;