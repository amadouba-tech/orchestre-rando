import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      <div className="relative bg-gradient-to-r from-[#4caf50] via-[#8bc34a] to-[#f9d423] min-h-[260px] sm:min-h-[340px] flex flex-col justify-center px-6 sm:px-10 py-8">

        {/* Étoile rose "Rejoignez-nous" */}
        <Link href="#rejoindre" className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 group" aria-label="Rejoignez-nous">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              <polygon points="50,3 61,38 98,38 68,60 79,95 50,73 21,95 32,60 2,38 39,38" fill="#e879c7" stroke="#c2410c" strokeWidth="1.5" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs sm:text-sm text-center leading-tight px-2">
              Rejoignez-<br />nous
            </span>
          </div>
        </Link>

        {/* Placeholder mains peintes + yeux */}
        <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center">
          <div className="w-44 h-44 rounded-full bg-white/30 border-4 border-dashed border-white/60 flex items-center justify-center text-white text-center text-sm font-medium backdrop-blur-sm">
            🖐️🎨<br />Photo<br />mains peintes
          </div>
          <div className="absolute -right-6 top-2 flex gap-1">
            <div className="w-9 h-9 rounded-full bg-white border-2 border-[#5d2e0a] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#5d2e0a]" />
            </div>
            <div className="w-9 h-9 rounded-full bg-white border-2 border-[#5d2e0a] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#5d2e0a]" />
            </div>
          </div>
        </div>

        {/* Titre manuscrit */}
        <div id="rejoindre" className="relative z-10 max-w-xl">
          <h1 className="font-hand text-4xl sm:text-6xl text-[#1a1a1a] tracking-tight">
            Harmonie Randonnai
          </h1>
          <div className="h-1 w-56 sm:w-72 bg-[#1a1a1a] rounded-full mt-1 mb-6" />
          <Link href="#contact" className="inline-block text-[#1a1a1a] font-semibold text-base sm:text-lg hover:underline underline-offset-4">
            Coordonnées / réseaux
          </Link>
        </div>
      </div>
    </section>
  );
}