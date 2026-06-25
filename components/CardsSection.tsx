import Link from "next/link";

type Card = { num: string; title: string; href: string; bg: string; imgBg: string };

const cards: Card[] = [
  { num: "01", title: "Qui sommes-nous ?", href: "/qui-sommes-nous", bg: "bg-[#f4756b]", imgBg: "bg-[#f9b24a]" },
  { num: "02", title: "Galerie", href: "/galerie", bg: "bg-[#5b9bd5]", imgBg: "bg-[#3a6fb0]" },
  { num: "03", title: "Témoignages", href: "/temoignages", bg: "bg-[#9b8cc4]", imgBg: "bg-[#7a6bb0]" },
];

export default function CardsSection() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 px-2 sm:px-8">
      {cards.map((card) => (
        <Link key={card.num} href={card.href} className={`${card.bg} rounded-xl p-5 flex flex-col items-center gap-4 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}>
          <div className="relative w-14 h-14 self-start">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,3 61,38 98,38 68,60 79,95 50,73 21,95 32,60 2,38 39,38" fill="white" stroke="#1a1a1a" strokeWidth="2" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-bold text-[#1a1a1a] text-sm">{card.num}</span>
          </div>
          <div className={`${card.imgBg} w-full aspect-[4/3] rounded-lg flex items-center justify-center text-white/90 text-center text-sm font-medium border-2 border-dashed border-white/50`}>
            🖼️ Image
          </div>
          <h2 className="text-white font-semibold text-lg self-start">{card.title}</h2>
        </Link>
      ))}
    </section>
  );
}