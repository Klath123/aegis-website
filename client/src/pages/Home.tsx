import { useState, useEffect } from "react";
import TerminalLoader from "../components/TerminalLoader";
import LetterGlitch from "../components/LetterGlitch";
import DecryptedText from "../components/DecryptedText";
import { Terminal, TypingAnimation, AnimatedSpan } from "../components/terminal";
import { BorderBeam } from "../components/BorderBeam";

const Home = () => {
    const [isLoading, setIsLoading] = useState(() => {
        const hasSeenLoader = sessionStorage.getItem('aegis-loader-seen');
        return !hasSeenLoader;
    });
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            sessionStorage.setItem('aegis-loader-seen', 'true');

            const timer = setTimeout(() => {
                setShowText(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (isLoading) {
        return <TerminalLoader onComplete={() => setIsLoading(false)} />;
    }

    return (
        <>
            {/* LetterGlitch Background */}
            <div className="fixed inset-0 z-0">
                <LetterGlitch
                    glitchColors={["#5110b2", "#e2e1e5", "#09196d"]}
                    glitchSpeed={30}
                    centerVignette
                    outerVignette
                    smooth
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09196d]/40 to-black/60" />
            </div>

            <div className="relative">
                {/* Hero Section - Full viewport height minus navbar */}
                <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
                    {showText && (
                        <h1 className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono tracking-tighter text-white text-center">
                            <DecryptedText
                                text="Decrypt.Decode.Decipher"
                                animateOn="view"
                                revealDirection="center"
                                speed={75}
                                scrambleSpeed={35}
                                characters="ABCDEFGHJKLMNPQRSTUVWXYZ123456789!@#$%"
                                className="drop-shadow-[0_0_18px_rgba(255,255,255,0.65)]"
                            />
                        </h1>
                    )}
                </div>

                {/* About Us Section with BorderBeam */}
                <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative w-full p-8 sm:p-12 md:p-16 bg-black/40 backdrop-blur-md rounded-3xl border border-purple-500/30 overflow-hidden">
                            {/* Main Heading with Decrypt Animation */}
                            <div className="text-center mb-16">
                                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tighter text-white mb-8">
                                    <DecryptedText
                                        text="ABOUT US"
                                        animateOn="view"
                                        revealDirection="center"
                                        speed={80}
                                        characters="@#$%&*01234567"
                                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                        encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    />
                                </h2>
                            </div>

                            {/* Terminal Content Sections */}
                            <div className="space-y-16">
                                {/* About Us Terminal */}
                                <div className="flex flex-col items-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white mb-6">
                                        <DecryptedText
                                            text="// WHO WE ARE"
                                            animateOn="view"
                                            revealDirection="start"
                                            speed={60}
                                            className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                            encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        />
                                    </h3>
                                    <div className="relative w-full overflow-hidden rounded-xl">
                                        <Terminal className="w-full border border-purple-500/20">
                                            <TypingAnimation duration={30} className="text-purple-400">
                                                $ cat about-aegis.txt
                                            </TypingAnimation>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed">
                                                Aegis is the official cybersecurity club of the Department of Cyber Security, Dayananda College of Engineering, Bengaluru.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                We are a student-driven technical community focused on building strong foundations in cybersecurity through hands-on learning, competitions, and collaborative exploration of real-world security challenges.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                Our goal is to cultivate a practical security mindset by bridging theory with real-world applications across software, systems, and network security.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-green-400 mt-4">
                                                ✓ Mission briefing complete
                                            </AnimatedSpan>
                                        </Terminal>
                                        <BorderBeam
                                            duration={8}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                        <BorderBeam
                                            duration={8}
                                            delay={4}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>

                                {/* Mission Terminal */}
                                <div className="flex flex-col items-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white mb-6">
                                        <DecryptedText
                                            text="// OUR MISSION"
                                            animateOn="view"
                                            revealDirection="start"
                                            speed={60}
                                            className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                            encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        />
                                    </h3>
                                    <div className="relative w-full overflow-hidden rounded-xl">
                                        <Terminal className="w-full border border-purple-500/20">
                                            <TypingAnimation duration={30} className="text-purple-400">
                                                $ read mission.md
                                            </TypingAnimation>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed">
                                                To empower students with practical cybersecurity skills by exploring modern security methodologies, analyzing real-world attack and defense scenarios, and developing technical expertise through projects, competitions, and continuous learning.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-green-400 mt-4">
                                                ✓ Mission statement loaded
                                            </AnimatedSpan>
                                        </Terminal>
                                        <BorderBeam
                                            duration={8}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                        <BorderBeam
                                            duration={8}
                                            delay={4}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>

                                {/* Initiatives & Events Terminal */}
                                <div className="flex flex-col items-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white mb-6">
                                        <DecryptedText
                                            text="// INITIATIVES & FLAGSHIP EVENTS"
                                            animateOn="view"
                                            revealDirection="start"
                                            speed={60}
                                            className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                            encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        />
                                    </h3>
                                    <div className="relative w-full overflow-hidden rounded-xl">
                                        <Terminal className="w-full border border-purple-500/20">
                                            <TypingAnimation duration={30} className="text-purple-400">
                                                $ ls -la events/
                                            </TypingAnimation>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed">
                                                Aegis actively organizes cybersecurity-focused events that bring together students and enthusiasts to learn, compete, and innovate.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                Our flagship events, Sandbox and Decipher, are designed to challenge participants through real-world security scenarios, fostering analytical thinking and hands-on problem-solving skills.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                Through these initiatives, we aim to build a vibrant cybersecurity community that encourages curiosity, technical growth, and innovation.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-green-400 mt-4">
                                                ✓ Event catalog synchronized
                                            </AnimatedSpan>
                                        </Terminal>
                                        <BorderBeam
                                            duration={8}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                        <BorderBeam
                                            duration={8}
                                            delay={4}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>

                                {/* What We Do Terminal */}
                                <div className="flex flex-col items-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white mb-6">
                                        <DecryptedText
                                            text="// WHAT WE DO"
                                            animateOn="view"
                                            revealDirection="start"
                                            speed={60}
                                            className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                            encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        />
                                    </h3>
                                    <div className="relative w-full overflow-hidden rounded-xl">
                                        <Terminal className="w-full border border-purple-500/20">
                                            <TypingAnimation duration={30} className="text-purple-400">
                                                $ cat activities.log
                                            </TypingAnimation>
                                            <AnimatedSpan className="text-gray-100">
                                                → Conduct Capture The Flag (CTF) competitions and hands-on training sessions
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100">
                                                → Organize workshops on cybersecurity tools, techniques, and best practices
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100">
                                                → Promote learning in ethical hacking, cryptography, network, and system security
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100">
                                                → Encourage collaborative problem-solving and peer-to-peer knowledge sharing
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100">
                                                → Support students in building a strong foundation for careers in cybersecurity
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-green-400 mt-4">
                                                ✓ Activity log complete
                                            </AnimatedSpan>
                                        </Terminal>
                                        <BorderBeam
                                            duration={8}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                        <BorderBeam
                                            duration={8}
                                            delay={4}
                                            size={400}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Border Beams for main container */}
                            <BorderBeam
                                duration={10}
                                size={600}
                                borderWidth={3}
                                colorFrom="#8200dfff"
                                colorTo="#c1c0c3ff"
                            />
                            <BorderBeam
                                duration={10}
                                delay={5}
                                size={600}
                                borderWidth={3}
                                colorFrom="#8200dfff"
                                colorTo="#c1c0c3ff"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;