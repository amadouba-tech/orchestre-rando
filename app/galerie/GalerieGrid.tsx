'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { PHOTOS, CATEGORIES } from './photos';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function GalerieGrid() {
  const [filtre, setFiltre] = useState<string>('Toutes');
  const [ouverte, setOuverte] = useState<number | null>(null);

  const visibles =
    filtre === 'Toutes' ? PHOTOS : PHOTOS.filter((p) => p.categorie === filtre);

  const fermer = useCallback(() => setOuverte(null), []);
  const suivante = useCallback(
    () => setOuverte((i) => (i === null ? null : (i + 1) % visibles.length)),
    [visibles.length]
  );
  const precedente = useCallback(
    () => setOuverte((i) => (i === null ? null : (i - 1 + visibles.length) % visibles.length)),
    [visibles.length]
  );

  useEffect(() => {
    if (ouverte === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fermer();
      if (e.key === 'ArrowRight') suivante();
      if (e.key === 'ArrowLeft') precedente();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [ouverte, fermer, suivante, precedente]);

  const photo = ouverte !== null ? visibles[ouverte] : null;

  return (
    <>
      {/* Filtres */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const actif = filtre === c;
          const nb =
            c === 'Toutes' ? PHOTOS.length : PHOTOS.filter((p) => p.categorie === c).length;
          return (
            <button
              key={c}
              onClick={() => {
                setFiltre(c);
                setOuverte(null);
              }}
              aria-pressed={actif}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                actif
                  ? 'bg-ink text-white'
                  : 'border border-ink/15 bg-white text-ink/70 hover:border-ink/40'
              }`}
            >
              {c} <span className={actif ? 'text-white/60' : 'text-ink/40'}>{nb}</span>
            </button>
          );
        })}
      </div>

      {/* Mosaique */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {visibles.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setOuverte(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl2 bg-mist shadow-card"
            aria-label={`Agrandir : ${p.legende}`}
          >
            <Image
              src={`${prefix}${p.src}`}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-8 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {p.legende}
            </span>
          </button>
        ))}
      </div>

      {visibles.length === 0 && (
        <p className="mt-10 text-sm text-slate">Aucune photo dans cette catégorie pour l&rsquo;instant.</p>
      )}

      {/* Visionneuse */}
      {photo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photo.legende}
          onClick={fermer}
        >
          <button
            onClick={fermer}
            aria-label="Fermer"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
          >
            &#10005;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              precedente();
            }}
            aria-label="Photo précédente"
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 md:left-8"
          >
            &#8249;
          </button>

          <figure
            className="relative max-h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={`${prefix}${photo.src}`}
                alt={photo.alt}
                fill
                sizes="100vw"
                quality={90}
                className="rounded-xl2 object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {photo.legende}
              <span className="ml-3 text-white/40">
                {ouverte! + 1} / {visibles.length}
              </span>
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation();
              suivante();
            }}
            aria-label="Photo suivante"
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 md:right-8"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
