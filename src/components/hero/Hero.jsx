import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";

export default function Hero() {
  return (
    <section
      className="relative rounded-2xl overflow-hidden mb-8 h-[420px] md:h-[460px]"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 max-w-2xl h-full flex flex-col justify-end">
        <span className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/20 text-xs w-fit">
          🔥 Now Trending
        </span>

        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs">
            Drama
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs">
            Fantasy
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Dimensional Kids on an Adventure
        </h1>

        <p className="text-sm md:text-base text-gray-300 mb-5">
          When two curious kids stumble into a hidden portal, they travel across
          magical dimensions while trying to find their way home...
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Watch button - always visible */}
          <button
            className="
              flex items-center justify-center gap-2
              bg-purple-500 hover:bg-purple-600 transition
              px-5 py-2 rounded-xl text-black text-sm sm:text-base
              w-full sm:w-auto
            "
          >
            <PlayArrowIcon fontSize="small" />
            Watch Now
          </button>

          {/* Desktop-only buttons */}
          <button className="hidden sm:flex items-center justify-center bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-xl">
            <DownloadIcon fontSize="small" />
          </button>

          <button className="hidden sm:flex items-center justify-center bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-xl">
            ⋯
          </button>
        </div>
      </div>
    </section>
  );
}
