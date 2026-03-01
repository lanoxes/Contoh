
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass-card bg-opacity-90 py-3 shadow-lg' : 'bg-transparent'}`}>
      <div className="text-2xl font-black tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        WARRIOR<span className="text-indigo-500">.</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
        <a href="#ai-assistant" className="hover:text-white transition-colors">AI Twin</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#contact" className="hidden sm:block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-[11px] font-bold uppercase tracking-widest transition-all transform hover:scale-105">
          Contact
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-950 z-[-1] transition-transform duration-500 flex flex-col items-center justify-center space-y-8 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {['home', 'about', 'services', 'projects', 'skills', 'testimonials', 'ai-assistant'].map(item => (
          <a 
            key={item}
            href={`#${item}`} 
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-black text-slate-700 hover:text-white transition-colors uppercase tracking-tighter"
          >
            {item.replace('-', ' ')}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
