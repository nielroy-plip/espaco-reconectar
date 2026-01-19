import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TestmonialCardProps {
    name: string;
    profession: string;
    message: string;
    rating: number;
    image?: string;
}

export const TestmonialCard: React.FC<TestmonialCardProps> = ({
    name,
    profession,
    message,
    rating,
    image,
}) => {
    const stars = Array.from({ length: 5 }, (_, i) => i < rating);

    return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-[#F5F1E8] shadow-sm p-6 gap-4 hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#F5F1E8] overflow-hidden flex items-center justify-center text-[#4A7C59] font-semibold">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-[#2C2C2C]">{name}</p>
          <p className="text-sm text-[#2C2C2C]/70">{profession}</p>
        </div>
      </div>

      {/* Message */}
      <p className="text-sm text-[#2C2C2C]/80 leading-relaxed italic">“{message}”</p>

      {/* Rating */}
      <div className="flex items-center gap-1 pt-2">
        {stars.map((filled, index) => (
          <FaStar
            key={index}
            size={16}
            className={filled ? 'text-[#D4AF37]' : 'text-[#F5F1E8]'}
          />
        ))}
      </div>
    </div>
  );
};

export default TestmonialCard;