
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Trusted by <span className="text-purple-500">Leaders</span></h2>
          <p className="text-slate-500 text-lg">Feedback from visionary teams I've helped build the future with.</p>
          <div className="mt-8 flex gap-2">
             {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-yellow-500"></i>)}
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl relative">
              <i className="fa-solid fa-quote-left text-4xl text-indigo-500/20 absolute top-6 right-8"></i>
              <p className="text-slate-300 mb-8 relative z-10 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} className="w-12 h-12 rounded-full border border-indigo-500/50" alt={t.name} />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
