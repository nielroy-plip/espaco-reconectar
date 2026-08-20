import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { TestmonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function ExperienciasPage() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection
        title="Experiências Reais"
        subtitle="Histórias de quem já vivenciou nossos atendimentos terapêuticos e encontrou acolhimento."
        showCTA={false}
        height="medium"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          title="O que dizem sobre nós"
          subtitle="Depoimentos sinceros que refletem cuidado, presença e transformação."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestmonialCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}