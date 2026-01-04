import { useState } from "react";
import FaultyTerminal from "../components/FaultyTerminal";
import TerminalLoader from "../components/TerminalLoader";
import DecryptedText from "../components/DecryptedText";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <TerminalLoader onComplete={() => setIsLoading(false)} />;
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-8">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <FaultyTerminal
                    tint="#3b82f6"
                    className="w-full h-full"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter text-white">
                    <DecryptedText
                        text="Decrypt.Decode.Decipher"
                        animateOn="view"
                        revealDirection="center"
                        speed={100}
                        maxIterations={20}
                        characters="ABCD1234!?"
                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                        encryptedClassName="text-green-500 opacity-80"
                    />
                </h1>
            </div>
        </div>
    );
};

export default Home;
