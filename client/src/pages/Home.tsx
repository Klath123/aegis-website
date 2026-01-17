import LetterGlitch from "../components/LetterGlitch";
import DecryptedText from "../components/DecryptedText";
import { Terminal, TypingAnimation, AnimatedSpan } from "../components/terminal";
import { BorderBeam } from "../components/BorderBeam";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { InfiniteMovingImages } from "../components/InfiniteMovingImages";

const Home = () => {
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
                <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 md:pt-24">
                    <div className="z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
                        {/* Eyebrow Line - Small, Uppercase, Cyan - In Box */}
                        <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-black/50 backdrop-blur-sm border border-cyan-400/40 rounded-lg shadow-lg shadow-cyan-500/10">
                            <p className="text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-400 font-mono text-center animate-fade-in">
                                »Official Cybersecurity Club of Dayananda College of Engineering«
                            </p>
                        </div>

                        {/* Split Main Heading */}
                        <div className="flex flex-col items-center gap-1 sm:gap-2">
                            {/* Line 1: "Welcome to" - Lighter */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light font-mono tracking-wide text-gray-300 text-center">
                                Welcome to
                            </h1>

                            {/* Line 2: "AEGIS" - Strong with DecryptedText effect */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black font-mono tracking-tighter text-purple-500 text-center leading-none">
                                <DecryptedText
                                    text="AEGIS"
                                    animateOn="view"
                                    revealDirection="center"
                                    speed={100}
                                    scrambleSpeed={35}
                                    characters="ABCDEFGHJKLMNPQRSTUVWXYZ123456789!@#$%&*^"
                                    className="drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
                                />
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 text-center max-w-3xl leading-relaxed px-4 sm:px-6 md:px-8 mt-2 sm:mt-4">
                            The official cybersecurity community of Dayananda College of Engineering.
                            We organize workshops, CTFs, and flagship events like Sandbox and Decipher to build real-world security skills.
                        </p>

                        {/* Tagline at the bottom - Motto style */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-mono tracking-tighter text-white text-center mt-4 sm:mt-6 md:mt-8">
                            <DecryptedText
                                text="Decrypt.Decode.Decipher"
                                animateOn="view"
                                revealDirection="center"
                                speed={75}
                                scrambleSpeed={35}
                                characters="ABCDEFGHJKLMNPQRSTUVWXYZ123456789!@#$%"
                                className="drop-shadow-[0_0_18px_rgba(255,255,255,0.65)]"
                            />
                        </h2>
                    </div>

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
                                {/* // WHO WE ARE Terminal */}
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
                                            duration={18}
                                            size={225}
                                            borderWidth={1}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>

                                {/* // OUR MISSION Terminal */}
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
                                            duration={18}
                                            size={200}
                                            borderWidth={1}
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
                                            duration={18}
                                            size={225}
                                            borderWidth={1}
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
                                            duration={18}
                                            size={225}
                                            borderWidth={1}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Border Beams for main container */}
                            <BorderBeam
                                duration={12}
                                size={500}
                                borderWidth={2}
                                colorFrom="#8200dfff"
                                colorTo="#c1c0c3ff"
                            />
                        </div>
                    </div>
                </section>

                {/* Event Highlights Gallery */}
                <section className="py-20 px-4 sm:px-6 md:px-8 z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tighter text-white mb-4">
                                <DecryptedText
                                    text="EVENT HIGHLIGHTS"
                                    animateOn="view"
                                    revealDirection="center"
                                    speed={70}
                                    characters="@#$%&*01234567"
                                    className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                    encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                />
                            </h2>
                            <p className="text-gray-200 font-mono text-sm md:text-base bg-black/30 px-4 py-2 rounded-lg inline-block">
                                // Capturing moments from our cybersecurity journey
                            </p>
                        </div>
                        <InfiniteMovingCards
                            items={[
                                {
                                    quote: "An intense 48-hour cybersecurity competition featuring penetration testing, cryptography challenges, and real-world attack scenarios. Teams competed to identify and exploit vulnerabilities in a simulated enterprise environment.",
                                    name: "Sandbox CTF 2024",
                                    title: "Annual Capture The Flag Competition"
                                },
                                {
                                    quote: "A comprehensive workshop series covering ethical hacking fundamentals, from reconnaissance and scanning to exploitation and post-exploitation techniques. Participants gained hands-on experience with industry-standard penetration testing tools.",
                                    name: "Ethical Hacking Workshop",
                                    title: "Penetration Testing Bootcamp"
                                },
                                {
                                    quote: "Our flagship cryptography challenge event where participants decode encrypted messages, break classical and modern ciphers, and solve cryptographic puzzles. This year featured advanced challenges in RSA, AES, and blockchain security.",
                                    name: "Decipher 2024",
                                    title: "Cryptography Challenge Event"
                                },
                                {
                                    quote: "Interactive sessions on network security fundamentals, covering packet analysis, intrusion detection systems, and secure network architecture. Students analyzed real network traffic and identified security threats using Wireshark and Snort.",
                                    name: "Network Security Series",
                                    title: "Advanced Network Defense Training"
                                },
                                {
                                    quote: "Team Aegis competed in national-level cybersecurity competitions, placing in the top 10 among 100+ teams. Our members demonstrated exceptional skills in web exploitation, reverse engineering, and forensics challenges.",
                                    name: "National CTF Championship",
                                    title: "Competitive Achievement 2024"
                                }
                            ]}
                            direction="left"
                            speed="slow"
                        />
                    </div>
                </section>

                {/* Event Photos Gallery */}
                <section className="py-20 px-4 sm:px-6 md:px-8 z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tighter text-white mb-4">
                                <DecryptedText
                                    text="EVENT GALLERY"
                                    animateOn="view"
                                    revealDirection="center"
                                    speed={70}
                                    characters="@#$%&*01234567"
                                    className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                    encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                />
                            </h2>
                            <p className="text-gray-200 font-mono text-sm md:text-base bg-black/30 px-4 py-2 rounded-lg inline-block">
                                // Moments captured from our cybersecurity events
                            </p>
                        </div>
                        <InfiniteMovingImages
                            images={[
                                {
                                    src: "/event-1.png",
                                    alt: "CTF Competition Hall",
                                    caption: "Intense 48-hour CTF Competition"
                                },
                                {
                                    src: "/event-2.png",
                                    alt: "Cybersecurity Stage Setup",
                                    caption: "Futuristic Event Stage"
                                },
                                {
                                    src: "/event-3.jpg",
                                    alt: "Aegis CTF Venue",
                                    caption: "National Level CTF Championship"
                                },
                                {
                                    src: "/event-4.jpg",
                                    alt: "Hackers at Work",
                                    caption: "Participants Solving Challenges"
                                },
                                {
                                    src: "/event-5.jpg",
                                    alt: "Team Aegis at CTF",
                                    caption: "Capture The Flag - Team Achievement"
                                }
                            ]}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </section >
            </div >
        </>
    );
};

export default Home;