import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from './Button';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    showCTA?: boolean;
    ctaText?: string;
    ctaHref?: string;
    backgroundImage?: string;
    height?: 'small' | 'medium' | 'large';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    showCTA = true,
    ctaText = 'Agendar Consulta',
    ctaHref = 'https://wa.me/5511999999999',
    backgroundImage,
    height = 'large',
})=> {
    const heightClasses = {
        small: 'min-h-[300px]',
        medium: 'min-h-[400opx]',
        large: 'min-h-[500px] md:min-h-[600px]',
    };

    const backgroundStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(rgba(74, 124, 89, 0.7), rgba(74, 124, 89, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    : {
        background: 'linear-gradient(135deg, #F5F1E8 0%, #E8E3D6 50%, #F5F1E8 100%)',
    };

    return (
    <section
      className={`relative flex items-center justify-center ${heightClasses[height]} px-4 sm:px-6 lg:px-8`}
      style={backgroundStyle}
    >
      {/* Overlay sutil (opcional, se tiver imagem) */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-[#4A7C59]/20 backdrop-blur-[1px]" />
      )}

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex flex-col gap-6">
          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A7C59] leading-tight">
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#2C2C2C]/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Call-to-Action */}
          {showCTA && (
            <div className="pt-4">
              <Button
                href={ctaHref}
                variant="whatsapp"
                size="lg"
                className="flex items-center gap-3 mx-auto"
                ariaLabel="Agendar consulta via WhatsApp"
              >
                <FaWhatsapp size={22} />
                {ctaText}
              </Button>
            </div>
          )}
        </div>

        {/* Decoração visual */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-12 h-[2px] bg-[#D4AF37] rounded-full" />
          <span className="text-2xl">🌿</span>
          <div className="w-12 h-[2px] bg-[#D4AF37] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;