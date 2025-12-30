import React from 'react';

const SectionHeader = ({ label, title, align = "center", description = null }) => {
  return (
    <div className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
        {title}
      </h2>
      <div className={`${align === "center" ? "mx-auto" : ""} w-24 h-1 bg-gold rounded-full`}></div>
      {description && (
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;