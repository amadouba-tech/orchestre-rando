import HeroCarousel from '@/components/HeroCarousel';
import Navbar from '@/components/Navbar';
import EventsPopup from '@/components/EventsPopup';
import WhatsAppButton from '@/components/WhatsAppButton';

const CHIFFRES = [
  { valeur: '140', label: "ans d'existence" },
  { valeur: '35', label: 'musiciens à vents' },
  { valeur: '3', label: 'départements : 61, 27, 28' },
];

const FONCTIONNEMENT = [
  { title: "Cours d'ensemble", desc: '2 heures de musique collective chaque semaine.' },
  { title: 'Pédagogie différenciée', desc: 'Un accompagnement adapté au niveau de chacun.' },
  { title: 'Secrétariat permanent', desc: "Une présence continue pour la vie de l'association." },
];

const ROLE = [
  { title: 'Un lien intergénérationnel', desc: 'Des musiciens de tous âges, sur les mêmes pupitres.' },
  { title: 'Un espace de rencontre', desc: 'Amateurs passionnés et musiciens confirmés se retrouvent.' },
  { title: 'Un lieu de transmission', desc: "Le savoir musical passe d'une génération à l'autre." },
];

const REJOINDRE = [
  { title: 'La pratique collective', desc: 'Se fondre dans un son collectif. Un vrai engagement, au service du groupe.' },
  { title: 'Peu importe ton niveau', desc: "Débutant, amateur ou confirmé : notre pédagogie différenciée s'adapte à toi. Tu intègres l'orchestre selon ton niveau." },
  { title: 'Un vrai lien social', desc: 'Un collectif qui perdure depuis près de 140 ans. Répétitions régulières, projets variés, concerts en tout lieu.' },
  { title: "Une ouverture sur l'ailleurs", desc: "Des liens forts avec d'autres musiciens et orchestres, jusqu'à l'échelle européenne." },
  { title: 'Un répertoire varié', desc: "Ouvert à toutes les musiques, sans se fermer à un seul style." },
  { title: 'Transmettre', desc: "Rejoindre la plus ancienne association du territoire, pour la faire vivre et la transmettre." },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="accueil" className="relative flex h-[100svh] min-h-[580px] w-full items-end overflow-hidden md:items-center">
        <HeroCarousel />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-28 pt-40 md:px-10 md:pb-0 md:pt-0">
          <div className="max-w-2xl">
            <p className="animate-rise text-xs font-semibold uppercase tracking-[0.2em] text-brass [text-shadow:0_1px_10px_rgba(255,255,255,0.9)]">
              Randonnai &middot; Tourouvre-au-Perche
            </p>
            <h1 className="display animate-rise mt-5 text-[2.6rem] text-ink [text-shadow:0_2px_18px_rgba(255,255,255,0.75)] sm:text-6xl md:text-[4.25rem]">
              Un orchestre d&rsquo;harmonie
              <br className="hidden sm:block" /> au c&oelig;ur du Perche
            </h1>
            <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-ink/80 [text-shadow:0_1px_12px_rgba(255,255,255,0.8)] md:text-lg">
              35 musiciens  bois, cuivres et percussions  réunis par l&rsquo;envie de
              partager, de progresser et de faire vivre la musique sur le territoire.
              Et certainement bientôt vous.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3">
              <a
                href="#rejoindre"
                className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ink shadow-card transition-transform hover:-translate-y-0.5"
              >
                Nous rejoindre
              </a>
              <a
                href="#identite"
                className="rounded-full border border-ink/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-ink/40"
              >
                Découvrir l&rsquo;orchestre
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-6 py-10 md:px-10">
          {CHIFFRES.map((c) => (
            <div key={c.label}>
              <p className="display text-3xl text-brass md:text-4xl">{c.valeur}</p>
              <p className="mt-1 text-xs text-slate md:text-sm">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section id="identite" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.35fr] md:gap-20">
          <div>
            <span className="staff mb-6 block w-14" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Qui sommes-nous</p>
            <h2 className="display mt-4 text-3xl text-ink md:text-[2.75rem]">
              Une association presque centenaire  et demie
            </h2>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-relaxed text-slate">
            <p>
              Notre orchestre d&rsquo;harmonie est situé au carrefour des départements de
              l&rsquo;Orne, de l&rsquo;Eure et de l&rsquo;Eure-et-Loir. Nous sommes basés à
              Randonnai, sur la commune de Tourouvre-au-Perche.
            </p>
            <p>
              Notre association, qui a bientôt 140 ans, réunit aujourd&rsquo;hui 35 musiciens
              instrumentistes à vents. Des musiciens venant de tous horizons : amateurs
              passionnés, musiciens confirmés, jeunes ou moins-jeunes en devenir, tous animés
              par l&rsquo;envie de partager, de progresser et de diffuser la musique.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {FONCTIONNEMENT.map((item) => (
            <div key={item.title} className="rounded-xl2 border border-ink/10 bg-white p-7 shadow-card">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOTRE ROLE */}
      <section id="role" className="bg-mist py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Notre rôle sur le territoire</p>
          <h2 className="display mt-4 max-w-2xl text-3xl text-ink md:text-[2.75rem]">
            Nous participons à l&rsquo;animation locale
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {ROLE.map((item) => (
              <div key={item.title} className="rounded-xl2 bg-white p-7 shadow-card">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS REJOINDRE */}
      <section id="rejoindre" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <span className="staff mb-6 block w-14" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Pourquoi nous rejoindre</p>
        <h2 className="display mt-4 max-w-2xl text-3xl text-ink md:text-[2.75rem]">
          Nous comptons sur vous, musiciens
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REJOINDRE.map((item) => (
            <div
              key={item.title}
              className="rounded-xl2 border border-ink/10 bg-white p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl rounded-xl2 bg-brass px-8 py-16 text-center md:py-20">
          <h2 className="display mx-auto max-w-3xl text-3xl text-ink md:text-[2.5rem]">
            Rejoindre la plus ancienne association du territoire,
            pour la faire vivre et la transmettre.
          </h2>
          <p className="mt-4 text-sm font-medium text-ink/70">À très bientôt !</p>
          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Nous écrire
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-ink/10 bg-mist px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="display text-lg text-ink">Harmonie de Tourouvre-au-Perche</p>
              <p className="mt-2 text-sm text-slate">Randonnai, Tourouvre-au-Perche (61)</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">Nous écrire</p>
              <a
                href="mailto:contact@harmonie-perche.fr"
                className="mt-2 inline-block text-sm text-slate transition-colors hover:text-brass"
              >
                contact@harmonie-perche.fr
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">Nous suivre</p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de l'orchestre"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-brass hover:bg-brass hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de l'orchestre"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-brass hover:bg-brass hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.8.72 1.47 1.38 2.13.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.3 1.47-.72 2.13-1.38.66-.66 1.08-1.33 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.8-.72-1.47-1.38-2.13-.66-.66-1.33-1.08-2.13-1.38-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm7.85-10.41a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-14 text-xs text-slate/70">
            &copy; {new Date().getFullYear()} Harmonie de Tourouvre-au-Perche. Tous droits réservés.
          </p>
        </div>
      </footer>

      <EventsPopup />
      <WhatsAppButton />
    </>
  );
}
