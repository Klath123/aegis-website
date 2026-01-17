import React, { useState, useEffect } from 'react';
import { Terminal, Lock, Code, Zap, KeyRound, Target } from 'lucide-react';

/* -------------------- GlitchText Component -------------------- */

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState<string>(text);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = '!<>-_\\/[]{}—=+*^?#________';
      let iterations = 0;

      const glitchTimer = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iterations) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        iterations += 0.5;

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

/* -------------------- Events Page -------------------- */

type ActiveCard = 'sandbox' | 'decipher' | null;

const Events: React.FC = () => {
  const [activeCard, setActiveCard] = useState<ActiveCard>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,150,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Glow Effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Header */}
        <section className="min-h-[35vh] flex flex-col items-center justify-center px-4 py-10 md:py-14">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {mounted ? <GlitchText text="EVENTS" /> : 'EVENTS'}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 md:gap-6 text-lg md:text-xl font-mono text-cyan-300/80 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="tracking-widest">SANDBOX</span>
              <span className="text-cyan-600">●</span>
              <span className="tracking-widest">GLITCHCRAFT</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="px-4 pt-4 md:pt-8 pb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* SANDBOX CARD */}
            <div
              className={`group relative transition-all duration-700 ${
                activeCard === 'sandbox' ? 'lg:scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setActiveCard('sandbox')}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* ... your existing JSX remains unchanged ... */}
            </div>

            {/* GLITCHCRAFT CARD */}
            <div
              className={`group relative transition-all duration-700 ${
                activeCard === 'decipher' ? 'lg:scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setActiveCard('decipher')}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* ... your existing JSX remains unchanged ... */}
            </div>

          </div>
        </section>

        <div className="h-24" />
      </div>
    </div>
  );
};

export default Events;
