import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { TherapyCard } from "@/components/TherapyCard";
import { therapies } from "@/data/therapies";

export default function TerapiasPage() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection
        title="Terapias Integrativas"
        subtitle="Escolha a vivência que melhor acolhe seu momento: meditação, terapias holísticas, yoga terapêutico e mais."
        showCTA={true}
        ctaText="Agendar pelo WhatsApp"
        ctaHref="https://wa.me/55SEUNUMERO" // substitua pelo seu número
        height="medium"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          title="Nossas vivências"
          subtitle="Cuidamos de você com práticas que integram corpo, mente e espírito."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy) => (
            <TherapyCard key={therapy.id} {...therapy} />
          ))}
        </div>
      </section>
    </div>
  );
}