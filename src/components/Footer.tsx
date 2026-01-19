import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/55SEUNUMERO';
const INSTAGRAM_URL = 'https://www.instagram.com/reconectarespacoterapeutico?igsh=MWVqYmNocGEwZmlkcw==';
const EMAIL = 'contato@espacoreconectar.com.br';

const quickLinks = [
    { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Terapias', href: '/terapias' },
  { label: 'Experiências', href: '/experiencias' },
  { label: 'Contato', href: '/contato' },
];

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="bg-[#F5F1E8] border-t border-[#D4AF37]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <h3 className="font-bold text-lg text-[#4A7C59]">Espaço Reconectar</h3>
            </div>
            <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">
              Um espaço de acolhimento para sua jornada de autoconhecimento e cura integral.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#4A7C59] mb-4">Links Rápidos</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#2C2C2C]/70 hover:text-[#4A7C59] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-[#4A7C59] mb-4">Conecte-se</h4>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-[#2C2C2C]/70 hover:text-[#4A7C59] transition-colors text-sm"
              >
                <FaEnvelope size={16} className="text-[#D4AF37]" />
                {EMAIL}
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#4A7C59] text-[#4A7C59] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#25D366] text-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#2C2C2C]/70 text-sm">
              &copy; {currentYear} Espaço Terapêutico Reconectar. Todos os direitos reservados.
            </p>
            <p className="text-[#2C2C2C]/60 text-xs">
              Desenvolvido com <span className="text-[#D4AF37]">💛</span> para seu bem-estar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}