import { useEffect, useState } from "react";
import AegisRobot from "../components/robot/AegisRobot";

/* ---------------- DATA ---------------- */

const missions = [
  {
    name: "Rohan K",
    image: "/Achievmembers/",
    achievements: ["GSoC 2025", "SIH Finalist", "National Level CTF Winner"],
  },
  {
    name: "Ananya S",
    image: "/achivmembers/tiger.png",
    achievements: ["Hackathon Winner", "Core Security Team", "Bug Bounty Hunter"],
  },
  {
    name: "Vikram R",
    image: "/members/vikram.jpg", // Placeholder
    achievements: ["Kernel Dev", "Exploit Researcher", "Hardware Hacking"],
  },
];

/* ---------------- PAGE ---------------- */

export default function Achievements() {
  return (
    <div className="min-h-screen px-4 pt-32 pb-24 max-w-7xl mx-auto font-mono text-white overflow-x-hidden">
      {/* TITLE */}
      <AchievementTitle />

      {/* GRID */}
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
        {missions.map((agent, index) => (
          <MissionCard key={index} agent={agent} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- TITLE WITH ROBOT (Mobile Optimized) ---------------- */
function AchievementTitle() {
  const [index, setIndex] = useState(0);
  const TITLE = "ACHIEVEMENT LOG";
  
  // OPTIMIZATION: Smaller width for mobile (w-7), larger for desktop (w-14)
  // This ensures the robot steps correctly on all screens.
  const CHAR_WIDTH_CLASS = "w-7 sm:w-10 md:w-14"; 
  const TEXT_SIZE = "text-xl sm:text-3xl md:text-5xl";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLE.length);
    }, 400);

    return () => clearInterval(interval);
  }, [TITLE.length]);

  return (
    <div className="flex flex-col items-center mb-28 relative z-10 scale-90 sm:scale-100 transition-transform">
      
      {/* CONTAINER */}
      <div className="relative inline-flex">
        
        {/* ROBOT WRAPPER */}
        <div
          className={`absolute -top-12 sm:-top-16 left-0 h-16 flex flex-col justify-end items-center transition-transform duration-300 ease-in-out ${CHAR_WIDTH_CLASS}`}
          style={{ transform: `translateX(${index * 100}%)` }}
        >
          {/* Robot */}
          <AegisRobot small />
          
          {/* Scanner Beam */}
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 w-full h-16 sm:h-24 bg-gradient-to-b from-cyan-400/30 to-transparent blur-sm -z-10 animate-pulse" 
            style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
          />
        </div>

        {/* TEXT ROW */}
        <h1 className={`flex font-bold tracking-widest text-cyan-400 font-mono select-none ${TEXT_SIZE}`}>
          {TITLE.split("").map((char, i) => (
            <span
              key={i}
              className={`
                ${CHAR_WIDTH_CLASS} 
                flex justify-center 
                transition-all duration-300
                ${i === index 
                  ? "text-cyan-200 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-110 -translate-y-1" 
                  : "opacity-30 text-cyan-900"
                }
              `}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

/* ---------------- 3D CARD (Robot on Right + New Effect) ---------------- */

function MissionCard({ agent }: { agent: any }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      className="perspective-container relative z-0 hover:z-50 transition-all duration-0" 
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={resetRotation}
    >
      <div
        className={`
          relative group rounded-2xl p-8
          border border-white/10
          bg-black/90 backdrop-blur-xl
          overflow-visible
          transition-all duration-200 ease-out
        `}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovering 
            ? "0 0 50px -10px rgba(34,211,238,0.15)" 
            : "0 0 0 0 rgba(0,0,0,0)"
        }}
      >
        {/* --- NEW EFFECT: Circuit Grid Background --- */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee 1px, transparent 1px),
              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)"
          }}
        />

        {/* --- NEW EFFECT: Cyberpunk Corner Brackets --- */}
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

        
        {/* --- FIX: ROBOT MOVED TO TOP RIGHT CORNER --- */}
        <div
          className="absolute -top-10 -right-4 w-16 h-16
                     opacity-0 group-hover:opacity-100
                     transition-all duration-500 delay-75
                     group-hover:-translate-y-2
                     pointer-events-none"
          style={{ 
            transform: "translateZ(60px) rotate(10deg)", // Pops out & rotates slightly
          }} 
        >
          <AegisRobot small />
        </div>

        {/* LABEL */}
        <div
          className="absolute -top-3 left-6 px-3 py-1 text-[10px] tracking-[0.2em] font-bold
                     bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full
                     shadow-[0_0_10px_rgba(34,211,238,0.2)]"
          style={{ transform: "translateZ(30px)" }}
        >
          STATUS: ACTIVE
        </div>

        <div className="flex flex-col items-center gap-6 mt-4" style={{ transform: "translateZ(20px)" }}>
          <div className="relative group-hover:scale-105 transition-transform duration-300">
            {/* Image Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img
              src={agent.image}
              alt={agent.name}
              className="relative w-24 h-24 rounded-full object-cover border-2 border-white/10 group-hover:border-transparent transition-colors bg-neutral-900"
            />
          </div>

          <div className="text-center w-full">
            <h2 className="text-xl mb-1 font-bold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              {agent.name}
            </h2>

            <p className="text-xs font-mono text-emerald-400 mb-5 tracking-widest opacity-80">
               // MISSION ACCOMPLISHED
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {agent.achievements.map((badge: string, idx: number) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-[10px] uppercase font-semibold tracking-wider rounded bg-white/5 text-white/60 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}