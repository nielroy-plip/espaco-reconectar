import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { TherapyCard } from "@/components/TherapyCard";
import { TestmonialCard } from "@/components/TestimonialCard";
import { therapies } from "@/data/therapies";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection
        title="Bem-vindo ao Espaço Reconectar"
        subtitle="Acolhimento, terapias integrativas e autoconhecimento em um espaço seguro e acolhedor."
        showCTA
        ctaText="Agende seu atendimento"
        ctaHref="https://wa.me/55SEUNUMERO" // troque para seu número
      />

      {/* Seção Terapias */}
      <section id="terapias" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          title="Nossas Terapias"
          subtitle="Vivências integrativas para acalmar a mente, equilibrar o corpo e despertar o autoconhecimento."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy) => (
            <TherapyCard key={therapy.id} {...therapy} />
          ))}
        </div>
      </section>

      {/* Seção Experiências */}
      <section id="experiencias" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          title="Experiências Reais"
          subtitle="Depoimentos de quem já vivenciou nossos atendimentos terapêuticos."
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