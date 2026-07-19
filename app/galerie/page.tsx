import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import GalerieGrid from './GalerieGrid';
import { PHOTOS } from './photos';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Galerie — Harmonie de Tourouvre-au-Perche",
  description:
    "Concerts, défilés, cérémonies et répétitions : les photos de l'orchestre d'harmonie de Randonnai, Tourouvre-au-Perche.",
};

export default function Galerie() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <span className="staff mb-6 block w-14" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Galerie</p>
        <h1 className="display mt-4 max-w-2xl text-4xl text-ink md:text-[3.25rem]">
          L&rsquo;orchestre en images
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
          {PHOTOS.length} photos de concerts, de défilés, de cérémonies et de répétitions.
          Cliquez sur une image pour l&rsquo;agrandir.
        </p>

        <div className="mt-12">
          <GalerieGrid />
        </div>
      </main>

      <footer className="border-t border-ink/10 bg-mist px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2">
          <p className="display text-lg text-ink">Harmonie de Tourouvre-au-Perche</p>
          <p className="text-sm text-slate">Randonnai, Tourouvre-au-Perche (61)</p>
          <a href="/" className="mt-2 text-sm font-medium text-brass hover:underline">
            &larr; Retour à l&rsquo;accueil
          </a>
        </div>
      </footer>
      <WhatsAppButton />
    </>
  );
}
