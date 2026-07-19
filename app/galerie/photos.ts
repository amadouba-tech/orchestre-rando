export type Photo = {
  src: string;
  alt: string;
  legende: string;
  categorie: 'Concerts' | 'Défilés & cérémonies' | 'Répétitions';
};

// Les 17 photos de l'orchestre. Pour en ajouter une : dépose le fichier dans
// public/images/galerie/ et ajoute une entrée ici.
export const PHOTOS: Photo[] = [
  {
    src: '/images/galerie/g-1.jpg',
    alt: "Jeunes musiciens en bonnet de Noël tenant leur trompette avant le concert",
    legende: 'Avant le concert de Noël',
    categorie: 'Concerts',
  },
  {
    src: '/images/galerie/g-2.jpg',
    alt: "Le pupitre des clarinettes et des saxophones en concert dans une église",
    legende: 'Clarinettes et saxophones en concert',
    categorie: 'Concerts',
  },
  {
    src: '/images/galerie/g-3.jpg',
    alt: "Le chef dirigeant l'orchestre dans une église baignée d'un éclairage rouge",
    legende: 'Concert du soir en église',
    categorie: 'Concerts',
  },
  {
    src: '/images/galerie/g-4.jpg',
    alt: "Les musiciens réunis avec leurs instruments devant la mairie",
    legende: 'Rassemblement devant la mairie',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-5.jpg',
    alt: "Répétition en plein air, la cheffe dirigeant les musiciens au soleil",
    legende: 'Répétition en plein air',
    categorie: 'Répétitions',
  },
  {
    src: '/images/galerie/g-6.jpg',
    alt: "Les musiciens rassemblés avant un défilé, dans la lumière de fin de journée",
    legende: 'Avant le défilé, en fin de journée',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-7.jpg',
    alt: "Retraite aux flambeaux, l'orchestre en tête du cortège à la nuit tombée",
    legende: 'Retraite aux flambeaux',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-8.jpg',
    alt: "L'orchestre jouant en extérieur près des stands de la fête",
    legende: 'Aubade au milieu de la fête',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-9.jpg',
    alt: "L'orchestre jouant devant l'école, écouté par le public et les officiels",
    legende: "Cérémonie devant l'école",
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-10.jpg',
    alt: "Aubade dans une cour, par un temps gris d'automne, avec le soubassophone",
    legende: 'Aubade un matin d\u2019automne',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-11.jpg',
    alt: "Défilé du 11 novembre dans le bourg, devant le café-restaurant",
    legende: 'Défilé du 11 novembre',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-12.jpg',
    alt: "L'orchestre défilant lors d'une kermesse estivale, sous les tentes et les guirlandes",
    legende: 'Kermesse estivale',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-13.jpg',
    alt: "Les musiciens saluant le public à la fin d'un concert en église",
    legende: 'Les saluts, après le concert',
    categorie: 'Concerts',
  },
  {
    src: '/images/galerie/g-14.jpg',
    alt: "Vue d'ensemble de l'orchestre en concert dans la nef d'une église",
    legende: 'Concert dans la nef',
    categorie: 'Concerts',
  },
  {
    src: '/images/galerie/g-15.jpg',
    alt: "L'orchestre en concert dans un chœur d'église richement décoré",
    legende: "Concert dans le chœur de l'église",
    categorie: 'Concerts',
  },
  {
    src: '/images/galerie/g-16.jpg',
    alt: "Cérémonie du souvenir au soleil, l'orchestre aux côtés des gendarmes",
    legende: 'Cérémonie du souvenir',
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-17.jpg',
    alt: "L'orchestre réuni sur l'herbe en plein soleil, le chef face aux musiciens",
    legende: "Sur l'herbe, avant de jouer",
    categorie: 'Défilés & cérémonies',
  },
  {
    src: '/images/galerie/g-18.jpg',
    alt: "Répétition en salle, la cheffe face aux musiciens et aux pupitres",
    legende: 'Répétition hebdomadaire en salle',
    categorie: 'Répétitions',
  },

];

export const CATEGORIES = ['Toutes', 'Concerts', 'Défilés & cérémonies', 'Répétitions'] as const;
