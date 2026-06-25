import Hero from "@/components/Hero";
import CardsSection from "@/components/CardsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdeef0] flex flex-col items-center px-3 py-4 sm:px-6 sm:py-8">
      <div className="w-full max-w-6xl flex flex-col gap-6 sm:gap-10">
        <Hero />
        <CardsSection />
      </div>
      <Footer />
    </main>
  );
}