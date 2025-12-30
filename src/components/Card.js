import React from 'react';

const Card = ({ icon, title, description, image, isImageCard = false }) => {
  // Estilo para Cards de Imagem (Ministérios)
  if (isImageCard) {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100 flex flex-col h-full">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        </div>
        <div className="p-8 relative flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-serif font-bold text-dark mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
          <a href="#contato" className="inline-flex items-center text-gold font-bold uppercase text-sm tracking-widest hover:text-gold-dark transition mt-auto">
            Saiba Mais <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    );
  }

  // Estilo para Cards de Ícone (Valores)
  return (
    <div className="bg-white p-10 rounded-2xl shadow-gold-glow hover:shadow-card-hover hover:-translate-y-2 transition duration-300 border border-gray-50 text-center relative overflow-hidden group">
      {/* Efeito de linha superior animada */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition duration-500"></div>
      
      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold-light to-white border border-gold/20 rounded-full flex items-center justify-center text-gold text-3xl mb-6 shadow-inner group-hover:rotate-6 transition duration-500">
        <i className={`fas ${icon}`}></i>
      </div>
      
      <h4 className="text-xl font-serif font-bold mb-4 text-dark">{title}</h4>
      <p className="text-gray-600 font-light leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;