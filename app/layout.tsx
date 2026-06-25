import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" });
const caveat = Caveat({ subsets: ["latin"], weight: ["700"], variable: "--font-hand" });

export const metadata: Metadata = {
  title: "Harmonie de Randonnai",
  description: "Orchestre d'harmonie de Randonnai (Tourouvre au Perche). 35 musiciens, près de 140 ans d'histoire. Rejoignez-nous !",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${nunito.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full font-body antialiased">{children}</body>
    </html>
  );
}