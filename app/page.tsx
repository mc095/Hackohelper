export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center gap-8 sm:p-20">
      {/* Main Heading */}
      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-wider"
        style={{
          fontFamily: "'Oxygen', sans-serif",
          letterSpacing: "0.1em",
          textShadow: "0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.2)",
        }}
      >
        Hackohelper
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 tracking-wide font-light">
        The ultimate platform to evaluate your hackathon ideas
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-700 text-white gap-2 hover:bg-blue-600 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-xl hover:shadow-blue-500/50"
          href="#submit"
        >
          Submit Idea
        </a>
        <a
          className="rounded-full border border-solid border-white transition-colors flex items-center justify-center text-white gap-2 hover:bg-white hover:text-black text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-xl hover:shadow-white/50"
          href="#learn-more"
        >
          Create a team
        </a>
      </div>
    </div>
  );
}
