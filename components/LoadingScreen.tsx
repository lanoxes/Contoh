
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 2));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b0f1a] flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <div className="text-4xl font-black tracking-tighter text-white animate-pulse">
          WARRIOR<span className="text-indigo-500">.</span>
        </div>
      </div>
      
      <div className="w-64 h-1 bg-slate-900 rounded-full overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="mt-4 text-xs font-mono uppercase tracking-[0.3em] text-slate-500 flex gap-2">
        <span>Initializing</span>
        <span className="animate-bounce">.</span>
        <span className="animate-bounce [animation-delay:0.2s]">.</span>
        <span className="animate-bounce [animation-delay:0.4s]">.</span>
      </div>

      <div className="absolute bottom-10 text-[10px] font-mono text-slate-700">
        CORE_V1.2 // ESTABLISHING_AI_SYNC // {progress}%
      </div>
    </div>
  );
};

export default LoadingScreen;
