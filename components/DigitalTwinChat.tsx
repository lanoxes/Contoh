
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const DigitalTwinChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey there! I'm Alex's digital twin. Ask me anything about his projects, coding philosophy, or just say hi!", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await getGeminiResponse(input, history);
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <div id="ai-assistant" className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Talk to my Digital Twin</h2>
        <p className="text-slate-400">Powered by Gemini 3 Flash. He knows everything I know (almost).</p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px] border border-slate-800">
        <div className="bg-slate-900/50 p-6 flex items-center gap-4 border-b border-slate-800">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold">
            A
          </div>
          <div>
            <h4 className="font-bold text-white">Alex AI</h4>
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online & Thinking
            </span>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/20">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
                <p className="text-[10px] opacity-50 mt-2 text-right">
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-900/50 border-t border-slate-800">
          <div className="flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-slate-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white p-3 rounded-xl transition-all"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinChat;
