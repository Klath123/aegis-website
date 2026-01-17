const achievements = [
  {
    title: "National Hackathon Finalists",
    description:
      "Aegis team qualified for the finals of a national-level hackathon focused on cybersecurity and ethical hacking.",
    year: "2024",
  },
  {
    title: "Cybersecurity Workshops Series",
    description:
      "Conducted multiple hands-on workshops on Linux, networking, and ethical hacking tools for students.",
    year: "2024",
  },
  {
    title: "CTF Competition Winners",
    description:
      "Club members secured top positions in inter-college Capture The Flag (CTF) competitions.",
    year: "2023",
  },
  {
    title: "Industry Expert Sessions",
    description:
      "Organized guest lectures and sessions with cybersecurity professionals from the industry.",
    year: "2023",
  },
  {
    title: "Club Establishment",
    description:
      "Aegis Tech Club was officially formed to promote cybersecurity awareness and technical skills.",
    year: "2022",
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide">
        Achievements
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-cyan-500/20 bg-black/60 backdrop-blur-xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-cyan-400">
              {item.title}
            </h2>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>

            <span className="text-xs font-mono text-gray-500">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}