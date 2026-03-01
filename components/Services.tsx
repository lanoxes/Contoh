
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">What I <span className="text-indigo-500">Deliver</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Providing high-value technical solutions that drive engagement and performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="glass-card p-10 rounded-3xl border border-slate-800/50 group hover:bg-indigo-600/5 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-3xl text-indigo-500 mb-8 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-indigo-500 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
