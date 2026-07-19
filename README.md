# Site de l'orchestre — Page d'accueil

Projet Next.js (App Router) avec Tailwind CSS. Pour l'instant, une seule page :
la page d'accueil, avec :

- un carrousel plein écran des 5 photos de concerts (`components/HeroCarousel.tsx`),
  qui alterne automatiquement toutes les 5 secondes ;
- une barre de navigation fixe (`components/Navbar.tsx`) qui devient opaque au scroll ;
- un petit encart flottant "Prochains concerts" (`components/EventsPopup.tsx`), avec
  des dates d'exemple à remplacer par les vrais événements ;
- le contenu (qui sommes-nous, identité, fonctionnement, rôle sur le territoire,
  pourquoi nous rejoindre) directement repris du PDF fourni, dans `app/page.tsx`.

## Où modifier quoi

- **Nom de l'orchestre** : remplacez "Harmonie de Tourouvre-au-Perche" dans
  `app/layout.tsx` et `components/Navbar.tsx` — c'est un nom provisoire, à
  remplacer par le vrai nom officiel de l'association.
- **Événements à venir** : tableau `EVENTS` en haut de `components/EventsPopup.tsx`.
- **Textes** : tout est dans `app/page.tsx` (tableaux `FONCTIONNEMENT`, `ROLE`,
  `REJOINDRE`, et les paragraphes de la section "Qui sommes-nous").
- **Photos** : `public/images/hero-1.jpg` à `hero-5.jpg`. Remplacez-les en gardant
  les mêmes noms de fichiers, ou modifiez les chemins dans `HeroCarousel.tsx`.
- **Couleurs / typographies** : `tailwind.config.js` (couleurs `ink`, `paper`,
  `brass`, `burgundy`, `stone`) et `app/globals.css` (polices système, pas de
  dépendance à Google Fonts pour que le build fonctionne hors-ligne).

## Développement local

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Déploiement sur ton VPS OVH (HestiaCP + Nginx + PM2)

1. Copie le dossier du projet sur le VPS (scp ou git), par ex. dans
   `/home/amadou/web/orchestre-perche`.
2. Sur le VPS : `npm install && npm run build`.
3. Lance l'app avec PM2 :
   `pm2 start npm --name orchestre-site -- start -- -p 3000`
   (ou fixe le port via la variable d'env `PORT=3000`).
4. Configure Nginx (via HestiaCP ou un vhost custom) en reverse proxy vers
   `127.0.0.1:3000`, comme prévu dans ton architecture (Nginx devant, PM2
   derrière). C'est la même logique que pour ton futur backend Spring Boot,
   sur un port différent.
5. `pm2 save` pour que l'app redémarre après un reboot du VPS.

Pour l'instant seule la page d'accueil existe : les liens du menu (`L'orchestre`,
`Notre rôle`, `Nous rejoindre`, `Contact`) pointent vers des sections de cette
même page (ancres `#identite`, `#role`, etc.), pas vers de nouvelles pages.
