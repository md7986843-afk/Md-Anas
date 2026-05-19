import React from 'react';

const Logo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center p-1.5 bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-black/20 ${className}`}>
      <img 
        src="https://dev-newsiteeeee.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_1-1.png" 
        alt="Md Anas Logo" 
        referrerPolicy="no-referrer"
        className="h-full w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
  );
};

export default Logo;
