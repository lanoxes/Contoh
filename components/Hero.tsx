
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight mb-6">
          Building the <span className="gradient-text">Future</span> of <br />
          Interactive Web Apps
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          I am a Senior Software Architect specializing in AI-integrated interfaces and ultra-performant React architectures.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2 group">
            View My Portfolio
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
          <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-all">
            Read My Blog
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
