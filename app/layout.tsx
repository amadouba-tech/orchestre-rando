import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Harmonie de Tourouvre-au-Perche — Orchestre d'harmonie",
  description:
    "Orchestre d'harmonie associatif basé à Randonnai, au cœur du Perche (61-27-28). Près de 140 ans de musique, de transmission et de vie collective.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
