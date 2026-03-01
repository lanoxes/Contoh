
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-card rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-12">
            <div className="text-center">
              <div className="text-9xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-700">🚀</div>
              <h3 className="text-3xl font-black text-white">Alex Vanguard</h3>
              <p className="text-indigo-400 font-mono text-sm tracking-widest mt-2 uppercase">Senior Creative Engineer</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>Experience: 8+ Years</span>
                <span>Location: Remote / SF</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-indigo-500 font-mono text-sm tracking-widest uppercase mb-4 block">Our Story</span>
          <h2 className="text-5xl font-black mb-8 leading-tight">Driven by <span className="text-white">Design</span>,<br /> Powered by <span className="text-white">Intelligence</span>.</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            I believe that the web should be more than just static pages. My mission is to build digital environments that feel alive, responsive, and intuitive. 
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-indigo-400">
                <i className="fa-solid fa-check"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">Human-Centric Approach</h4>
                <p className="text-sm text-slate-500">Focusing on empathy-driven development to solve real user problems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-indigo-400">
                <i className="fa-solid fa-code-branch"></i>
              </div>
              <div>
                <h4 className="font-bold text-white">Scalable Architecture</h4>
                <p className="text-sm text-slate-500">Writing clean, modular code that grows alongside your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
