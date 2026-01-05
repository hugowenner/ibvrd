import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", icon = null }) => {
  const baseStyle = "font-bold uppercase tracking-widest py-4 rounded-lg transition duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold text-dark hover:bg-white hover:scale-105 shadow-lg shadow-gold/30",
    secondary: "bg-gold text-dark hover:bg-gold-dark hover:text-white hover:shadow-gold/30",
    outline: "bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-gold",
    outlineLight: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <i className={`fas ${icon} text-sm`}></i>}
    </button>
  );
};

export default Button;