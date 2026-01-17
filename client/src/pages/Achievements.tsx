import { useEffect, useRef, useState } from "react";

/* ---------------- BOOT DATA ---------------- */

const bootLines = [
  "> Boot sequence started",
  "> Verifying club integrity...",
  "> Loading historical data...",
  "> System ready",
];

const achievements = [
  {
    year: "2022",
    title: "SYSTEM ONLINE",
    description: "AEGIS Tech Club officially established.",
  },
  {
    year: "2023",
    title: "SKILL MODULE LOADED",
    description:
      "Hands-on cybersecurity workshops and peer learning sessions initiated.",
  },
  {
    year: "2024",
    title: "COMPETITIVE MODE ENABLED",
    description:
      "CTF challenges, hackathons, and inter-college competitions participated.",
  },
  {
    year: "2025",
    title: "NETWORK EXPANSION",
    description:
      "Industry expert talks and cybersecurity awareness programs conducted.",
  },
];

const word = "Achievements";

/* ---------------- PAGE ---------------- */

export default function Achievements() {
  const [step, setStep] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [robotX, setRobotX] = useState(0);

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  /* Boot sequence */
  useEffect(() => {
    if (step < bootLines.length) {
      const timer = setTimeout(() => setStep(step + 1), 700);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowContent(true), 500);
    }
  }, [step]);

  /* Robot hop aligned to letters */
  useEffect(() => {
    if (!showContent) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % word.length;
        const el = letterRefs.current[next];

        if (el) {
          setRobotX(el.offsetLeft + el.offsetWidth / 2 - 20);
        }

        return next;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [showContent]);

  return (
    <div className="min-h-screen px-6 pt-42 pb-28 max-w-5xl mx-auto font-mono text-white relative">
      {/* BOOT SCREEN */}
      {!showContent && (
        <div className="space-y-3 text-lg">
          <div className="text-cyan-400 tracking-wider">
            INITIALIZING AEGIS SYSTEM...
          </div>
          <div className="mt-6 space-y-2 text-gray-300">
            {bootLines.slice(0, step).map((line, index) => (
              <div key={index}>{line}</div>
            ))}
            <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse ml-1" />
          </div>
        </div>
      )}

      {/* CONTENT */}
      {showContent && (
        <div className="space-y-10">
          <header className="mb-12">
            {/* ROBOT + TITLE */}
            <div className="relative inline-block">
              <div
                className="absolute -top-12 transition-transform duration-300"
                style={{ transform: `translateX(${robotX}px)` }}
              >
                <Robot />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-wide flex">
                {word.split("").map((char, index) => (
                  <span
                    key={index}
                  ref={(el) => {
  letterRefs.current[index] = el;
}}

                    className={`inline-block transition-all duration-300 ${
                      index === activeIndex
                        ? "scale-125 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                        : "opacity-80"
                    }`}
                    style={{ width: "1.2em", textAlign: "center" }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>

            <p className="mt-4 text-gray-400">
              System log of AEGIS milestones
            </p>
          </header>

          <div className="space-y-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl p-6 bg-white/[0.02]"
              >
                <div className="flex justify-between mb-2 text-sm text-gray-400">
                  <span>[{item.year}]</span>
                  <span>STATUS: OK</span>
                </div>

                <h2 className="text-lg text-cyan-400 font-semibold">
                  {item.title}
                </h2>

                <p className="mt-2 text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- ROBOT ---------------- */

function Robot() {
  return (
    <div className="animate-bounce">
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
        <rect x="14" y="14" width="36" height="28" rx="6" fill="#22d3ee" />
        <circle cx="26" cy="28" r="3" fill="#000" />
        <circle cx="38" cy="28" r="3" fill="#000" />
        <path
          d="M26 34 Q32 38 38 34"
          stroke="#000"
          strokeWidth="2"
          fill="none"
        />
        <line x1="32" y1="8" x2="32" y2="14" stroke="#22d3ee" strokeWidth="2" />
        <circle cx="32" cy="6" r="3" fill="#22d3ee" />
      </svg>
    </div>
  );
}
