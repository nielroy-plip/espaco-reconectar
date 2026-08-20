import React from 'react';

type Align = 'center' | 'left';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: Align;
    className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    align = 'center',
    className = '',
}) => {
    const isCenter = align === 'center';
    const baseAlignment = isCenter ? 'text-center items-center' : 'text-left items-start';

    return (
        <div className={`flex flex-col gap-2 ${baseAlignment} ${className}`}>
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4A7C59]">
          {title}
        </h2>
        <div
          className={`h-[3px] w-16 rounded-full bg-[#D4AF37] ${
            isCenter ? 'mx-auto' : ''
          }`}
        />
      </div>
      {subtitle ? (
        <p className={`text-base md:text-lg text-[#2C2C2C]/80 max-w-3xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
    );
};