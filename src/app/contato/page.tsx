import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";

const WHATSAPP_URL = "https://wa.me/55SEUNUMERO"; // troque pelo seu número
const INSTAGRAM_URL = "https://www.instagram.com/reconectarespacoterapeutico?igsh=MWVqYmNocGEwZmlkcw=="; // troque pelo seu user
const EMAIL = "contato@espacoreconectar.com.br"; // troque pelo seu email

export default function ContatoPage() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection
        title="Fale Conosco"
        subtitle="Estamos aqui para acolher você. Escolha o canal que preferir."
        showCTA
        ctaText="Chamar no WhatsApp"
        ctaHref={WHATSAPP_URL}
        height="medium"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionTitle
          title="Canais de Contato"
          subtitle="WhatsApp para respostas rápidas, Instagram para novidades e email para mensagens detalhadas."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#F5F1E8] bg-white p-5 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all"
          >
            <p className="text-sm font-semibold text-[#4A7C59] mb-1">WhatsApp</p>
            <p className="text-[#2C2C2C]/80 text-sm">Atendimento rápido e acolhedor.</p>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#F5F1E8] bg-white p-5 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all"
          >
            <p className="text-sm font-semibold text-[#4A7C59] mb-1">Instagram</p>
            <p className="text-[#2C2C2C]/80 text-sm">Acompanhe conteúdos e atualizações.</p>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="rounded-lg border border-[#F5F1E8] bg-white p-5 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all"
          >
            <p className="text-sm font-semibold text-[#4A7C59] mb-1">Email</p>
            <p className="text-[#2C2C2C]/80 text-sm">Envie detalhes da sua necessidade.</p>
          </a>
        </div>

        <div className="rounded-lg border border-[#F5F1E8] bg-white p-8 shadow-sm space-y-6">
          <SectionTitle
            title="Envie sua mensagem"
            subtitle="Responderemos o quanto antes."
            align="left"
            className="!mb-2"
          />

          <form
            action={`mailto:${EMAIL}`}
            method="GET"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#2C2C2C]">Nome</label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="rounded-md border border-[#F5F1E8] bg-white px-4 py-2 text-sm text-[#2C2C2C] focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/30 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#2C2C2C]">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="seuemail@dominio.com"
                  className="rounded-md border border-[#F5F1E8] bg-white px-4 py-2 text-sm text-[#2C2C2C] focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/30 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#2C2C2C]">Mensagem</label>
              <textarea
                name="body"
                rows={5}
                required
                placeholder="Conte-nos como podemos ajudar"
                className="rounded-md border border-[#F5F1E8] bg-white px-4 py-3 text-sm text-[#2C2C2C] focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/30 outline-none"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                Enviar mensagem
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}