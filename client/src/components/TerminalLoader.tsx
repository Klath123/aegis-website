import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

interface TerminalLoaderProps {
  onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<Terminal | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new Terminal({
      fontFamily: "monospace",
      fontSize: 14,
      theme: {
        background: "#000000",
        foreground: "#00ff88",
      },
      cursorBlink: true,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    termRef.current = term;

    const boot = async () => {
      const lines = [
        "AEGIS SECURITY INTERFACE",
        "",
        "initializing trust boundary...",
        "verifying policy integrity...",
        "loading detection engines...",
        "synchronizing control plane...",
        "",
        "Type 'exit' or click ENTER",
      ];

      for (const line of lines) {
        term.writeln(line);
        await new Promise((r) => setTimeout(r, 120));
      }
    };

    boot();

    const onResize = () => fitAddon.fit();
    window.addEventListener("resize", onResize);

    term.onData((data) => {
      if (data.trim().toLowerCase() === "exit") {
        onComplete();
      }
    });

    return () => {
      window.removeEventListener("resize", onResize);
      term.dispose();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div
        ref={terminalRef}
        className="w-full h-full max-w-5xl max-h-[70vh] border border-green-500/40 rounded-lg"
      />

      <button
        onClick={onComplete}
        className="mt-6 px-6 py-2 bg-green-400 text-black font-mono text-sm tracking-widest hover:bg-green-300 transition"
      >
        ENTER AEGIS →
      </button>
    </div>
  );
}
