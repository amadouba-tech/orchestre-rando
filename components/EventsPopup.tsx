'use client';

import { useEffect, useState } from 'react';

// Données d'exemple — à remplacer par les vrais concerts de l'orchestre.
const EVENTS = [
  { day: '14', month: 'SEPT', title: 'Rentrée & répétition ouverte', place: 'Salle de musique, Randonnai' },
  { day: '02', month: 'NOV', title: 'Concert de la Sainte-Cécile', place: 'Église de Tourouvre-au-Perche' },
  { day: '20', month: 'DÉC', title: 'Concert de Noël', place: 'Église, à préciser' },
];

export default function EventsPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) {
    return (
      <button
        onClick={() => setDismissed(false)}
        aria-label="Afficher les prochains concerts"
        className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-brass text-ink shadow-lift transition-transform hover:scale-105"
      >
        <span className="text-lg leading-none">&#9834;</span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-30 w-[19.5rem] max-w-[calc(100vw-3rem)] overflow-hidden rounded-xl2 border border-ink/10 bg-white shadow-lift transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="flex items-center justify-between px-5 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
          Prochains concerts
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Fermer"
          className="text-ink/40 transition-colors hover:text-ink"
        >
          &#10005;
        </button>
      </div>

      <ul className="px-5 py-3">
        {EVENTS.map((ev) => (
          <li key={ev.title} className="flex items-start gap-4 border-t border-ink/10 py-3 first:border-t-0">
            <div className="flex w-11 flex-none flex-col items-center rounded-lg bg-brassSoft py-1.5 leading-none">
              <span className="text-base font-bold text-ink">{ev.day}</span>
              <span className="mt-0.5 font-mono text-[10px] tracking-wider text-brass">{ev.month}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{ev.title}</p>
              <p className="mt-0.5 text-xs text-slate">{ev.place}</p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="block bg-mist px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-brass"
      >
        Voir tous les concerts
      </a>
    </div>
  );
}
