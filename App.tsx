
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectCard from './components/ProjectCard';
import SkillVisualizer from './components/SkillVisualizer';
import Testimonials from './components/Testimonials';
import DigitalTwinChat from './components/DigitalTwinChat';
import LoadingScreen from './components/LoadingScreen';
import { PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen relative">
      {/* Global Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[150px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] -z-10 pointer-events-none"></div>

      <Navbar />
      <Hero />
      <About />
      <Services />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Selected <span className="text-indigo-500">Work</span></h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Crafting premium digital products with focus on AI integration and performant architectures.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter">Technical <br /><span className="text-purple-500">Blueprint</span></h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              I specialize in complex frontend ecosystems, leveraging the latest in AI and reactive programming to build tools that users love.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {SKILLS.map(skill => (
                <div key={skill.name} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    <i className={skill.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{skill.name}</h4>
                    <div className="w-24 h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-3xl p-8 border-slate-800/50 shadow-inner relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 -z-10 animate-pulse"></div>
            <h3 className="text-center font-bold text-slate-400 uppercase tracking-widest text-xs mb-4">Competency Radar</h3>
            <SkillVisualizer />
          </div>
        </div>
      </section>

      <Testimonials />
      <DigitalTwinChat />

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Ready to <span className="gradient-text">Evolve</span>?</h2>
            <p className="text-slate-500 text-xl font-light">Join forces with high-end engineering expertise.</p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <a href="mailto:hello@warrior.dev" className="text-2xl md:text-4xl font-bold hover:text-indigo-400 transition-all underline decoration-indigo-500/30 underline-offset-[12px] hover:underline-offset-[16px]">
              hello@warrior.dev
            </a>
            <div className="flex gap-8 text-2xl text-slate-600">
              <a href="#" className="hover:text-white transition-all transform hover:-translate-y-1"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="hover:text-white transition-all transform hover:-translate-y-1"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="hover:text-white transition-all transform hover:-translate-y-1"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="hover:text-white transition-all transform hover:-translate-y-1"><i className="fa-brands fa-dribbble"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-slate-900 text-center text-slate-700 text-[10px] font-mono uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} WARRIOR Engineering Lab // Distributed via AI // warrior_v_portfolio.bin
        </div>
      </footer>
    </div>
  );
};

export default App;
