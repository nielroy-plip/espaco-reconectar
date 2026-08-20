import React from 'react';
import * as Icons from 'react-icons/fa';

interface TherapyCardProps {
    name: string;
    description: string;
    icon: string;
    benefits: string[];
    duration?: string;
}

export const TherapyCard: React.FC<TherapyCardProps> = ({
    name,
    description,
    icon,
    benefits,
    duration,
}) => {
    const IconComponent = (Icons as Record<string, React.ComponentType<any>>)[icon];
    const displayIcon = IconComponent ? <IconComponent /> : <Icons.FaLeaf />;

    return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-[#F5F1E8] shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 overflow-hidden group">
      {/* Icon Container */}
      <div className="bg-gradient-to-b from-[#F5F1E8] to-[#EBE6DC] p-8 flex items-center justify-center group-hover:from-[#4A7C59] group-hover:to-[#3d6a4d] transition-all duration-300">
        <div className="text-5xl text-[#4A7C59] group-hover:text-white transition-colors duration-300">
          {displayIcon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[#4A7C59]">
          {name}
        </h3>

        {/* Description */}
        <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">
          {description}
        </p>

        {/* Benefits List */}
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            Benefícios
          </p>
          <ul className="flex flex-col gap-1.5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#2C2C2C]/70">
                <span className="text-[#4A7C59] font-bold mt-0.5">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        {duration && (
          <div className="pt-4 border-t border-[#F5F1E8] text-sm text-[#4A7C59] font-medium">
            ⏱️ {duration}
          </div>
        )}
      </div>
    </div>
  );
};

export default TherapyCard;