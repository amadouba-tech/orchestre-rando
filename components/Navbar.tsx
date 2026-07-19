'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#identite', label: "L'orchestre" },
  { href: '/#role', label: 'Notre rôle' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Hors de la page d'accueil il n'y a pas de photo derrière la barre :
  // elle doit rester opaque en permanence.
  const surAccueil = pathname === '/';
  const opaque = scrolled || !surAccueil;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        opaque ? 'border-b border-ink/10 bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="display text-lg text-ink">
          Harmonie <span className="font-normal text-brass">de Tourouvre-au-Perche</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const actif = link.href === '/galerie' && pathname === '/galerie';
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={actif ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-brass ${
                  actif ? 'text-brass' : 'text-ink/70'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#rejoindre"
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brass hover:text-ink"
          >
            Nous rejoindre
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 text-ink md:hidden"
        >
          <span className={`h-0.5 w-6 rounded bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 rounded bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 rounded bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-white px-6 pb-6 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/5 py-3 text-sm font-medium text-ink/80"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#rejoindre"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white"
          >
            Nous rejoindre
          </Link>
        </nav>
      )}
    </header>
  );
}
