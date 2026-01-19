import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { values } from "@/data/values";

export default function SobrePage() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection
        title="Sobre o Espaço Reconectar"
        subtitle="Acolhimento, terapias integrativas e um ambiente seguro para a sua jornada de autoconhecimento."
        showCTA={false}
        height="medium"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionTitle
          title="Nossa Essência"
          subtitle="Unimos cuidado, escuta e práticas integrativas para promover equilíbrio entre corpo, mente e espírito."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2C2C2C]/80 text-base leading-relaxed">
          <p>
            O Espaço Terapêutico Reconectar nasceu para oferecer acolhimento e caminhos de
            transformação pessoal. Aqui, cada pessoa é recebida de forma única, com respeito ao seu
            tempo e à sua história.
          </p>
          <p>
            Trabalhamos com terapias integrativas para apoiar processos de autoconhecimento, redução
            de estresse e equilíbrio emocional. Nosso compromisso é criar um ambiente seguro,
            humano e gentil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-[#F5F1E8] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-3xl mb-3 text-[#4A7C59]">{item.icon === "FaHands" ? "🤝" : item.icon === "FaStar" ? "✨" : "🌱"}</p>
              <h3 className="text-lg font-semibold text-[#4A7C59] mb-2">{item.title}</h3>
              <p className="text-sm text-[#2C2C2C]/75 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}