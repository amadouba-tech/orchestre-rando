'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/images/hero-1.jpg', alt: "L'orchestre réuni sur l'herbe en plein soleil, le chef face aux musiciens" },
  { src: '/images/hero-2.jpg', alt: "Les musiciens rassemblés avant un défilé, dans la lumière de fin de journée" },
  { src: '/images/hero-3.jpg', alt: "L'orchestre défilant lors d'une kermesse estivale, sous les tentes et les guirlandes" },
  { src: '/images/hero-4.jpg', alt: "Défilé du 11 novembre dans le bourg, devant le café-restaurant" },
];

const INTERVAL_MS = 5500;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-mist">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            quality={90}
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Voile lumineux : la photo est éclaircie, le texte est écrit en encre foncée. */}
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-white/[0.92] via-white/55 to-transparent md:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent md:hidden" />

      {/* Indicateurs : des notes posées sur une portée */}
      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-4 md:left-10">
        <span className="staff hidden w-16 opacity-70 sm:block" aria-hidden="true" />
        <div className="flex items-center gap-2.5">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => setActive(i)}
              aria-label={`Aller à l'image ${i + 1}`}
              aria-current={i === active}
              className="group flex h-7 w-7 items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active
                    ? 'h-3 w-3 bg-brass'
                    : 'h-1.5 w-1.5 bg-ink/30 group-hover:bg-ink/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
