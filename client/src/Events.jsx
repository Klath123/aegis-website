import React, { useState, useEffect } from 'react';
import { Terminal, Lock, Code, Zap, KeyRound, Target } from 'lucide-react';

const GlitchText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = '!<>-_\\/[]{}—=+*^?#________';
      let iterations = 0;
      
      const glitchTimer = setInterval(() => {
        setDisplayText(
          text.split('').map((char, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );
        
        iterations += 1/2;
        
        if (iterations >= text.length) {
          clearInterval(glitchTimer);
          setDisplayText(text);
        }
      }, 30);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, [text]);
  
  return <span className={className}>{displayText}</span>;
};

const EventsPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,150,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <section className="min-h-[35vh] flex flex-col items-center justify-center px-4 py-10 md:py-14">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {mounted ? <GlitchText text="EVENTS" /> : "EVENTS"}
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 md:gap-6 text-lg md:text-xl font-mono text-cyan-300/80 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span className="tracking-widest">SANDBOX</span>
              <span className="text-cyan-600">●</span>
              <span className="tracking-widest">GLITCHCRAFT</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
        </section>
        
        <section className="px-4 pt-4 md:pt-8 pb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            <div
              className={`group relative transition-all duration-700 ${
                activeCard === 'sandbox' ? 'lg:scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setActiveCard('sandbox')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 group-hover:border-cyan-400/50 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Terminal className="w-7 h-7 text-cyan-400" />
                      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 tracking-tight">
                        SANDBOX
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-600">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                      <span>MISSION_ID: SBX-002</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-mono">
                    ACTIVE
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  Premier 24-hour national-level cybersecurity hackathon that challenges participants to defend and attack simulated networks in a controlled environment.
                </p>
                
                <div className="bg-gray-950/80 border border-cyan-900/40 rounded-lg p-4 mb-6 font-mono text-xs md:text-sm">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-2 text-gray-500">root@aegis:~$</span>
                  </div>
                  <div className="text-green-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">→</span>
                      <span>Initializing sandbox environment...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">→</span>
                      <span>Ready for deployment</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 animate-pulse">█</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-cyan-950/20 border border-cyan-900/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-cyan-400" />
                      <p className="text-xs text-gray-400 uppercase">Type</p>
                    </div>
                    <p className="text-sm font-semibold text-white">Cyber Security</p>
                  </div>
                  
                  <div className="bg-cyan-950/20 border border-cyan-900/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <p className="text-xs text-gray-400 uppercase">Difficulty</p>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            i < 3 ? 'bg-cyan-400' : 'bg-gray-700'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-cyan-300/60 font-mono">Offline - Team</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-mono">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Web Security', 'Networking', 'System Hardening', 'Hackathon'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-cyan-500/5 border border-cyan-500/20 rounded text-xs text-cyan-300 font-mono hover:bg-cyan-500/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="mt-auto w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-cyan-500/20">
                  <span>ENTER SANDBOX</span>
                  <Code className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div
              className={`group relative transition-all duration-700 ${
                activeCard === 'decipher' ? 'lg:scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setActiveCard('decipher')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 md:p-8 group-hover:border-purple-400/50 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Lock className="w-7 h-7 text-purple-400" />
                      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 tracking-tight">
                        GLITCHCRAFT
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-600">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                      <span>MISSION_ID: DCP-002</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400 font-mono">
                    ACTIVE
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  Glitchcraft — Decode the glitch. Defend the future.
                </p>
                
                <div className="bg-gray-950/80 border border-purple-900/40 rounded-lg p-4 mb-6 font-mono text-xs md:text-sm">
                  <div className="flex items-center gap-2 mb-3 text-purple-400">
                    <KeyRound className="w-4 h-4" />
                    <span className="text-xs tracking-widest">ENCRYPTED_MSG</span>
                  </div>
                  <div className="space-y-2 text-purple-300/60">
                    <div>01001000 01100101 01101100 01101100</div>
                    <div>4A 6F 69 6E 20 74 68 65 20 6D</div>
                    <div className="text-green-400">▓▓▓▓▓▓▓▓▓▓ Glitched...</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-purple-950/20 border border-purple-900/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <KeyRound className="w-4 h-4 text-purple-400" />
                      <p className="text-xs text-gray-400 uppercase">Type</p>
                    </div>
                    <p className="text-sm font-semibold text-white">Cyber Security</p>
                  </div>
                  
                  <div className="bg-purple-950/20 border border-purple-900/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <p className="text-xs text-gray-400 uppercase">Difficulty</p>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            i < 2 ? 'bg-purple-400' : 'bg-gray-700'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-purple-300/60 font-mono">In Person</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-mono">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Cryptography', 'Pattern Analysis', 'Logic Puzzles', 'Reverse Thinking'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-purple-500/5 border border-purple-500/20 rounded text-xs text-purple-300 font-mono hover:bg-purple-500/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="mt-auto w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-purple-500/20">
                  <span>BEGIN DECIPHER</span>
                  <Lock className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
          </div>
        </section>
        
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default Events;