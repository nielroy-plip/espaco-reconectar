'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'whatsapp';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    onClick?: () => void;
    ariaLabel?: string;
    className?: string;
    type?: 'button' | 'submit';
}

function getVariantClasses(variant: ButtonVariant): string {
    switch (variant) {
        case 'primary':
      return 'bg-[#4A7C59] text-white hover:bg-[#3d6a4d] focus-visible:ring-[#4A7C59]';
    case 'secondary':
      return 'bg-[#F5F1E8] text-[#2C2C2C] hover:bg-[#ebe6dc] border border-[#D4AF37]';
    case 'outline':
      return 'bg-transparent text-[#4A7C59] border border-[#4A7C59] hover:bg-[#F5F1E8]';
    case 'whatsapp':
      return 'bg-[#25D366] text-white hover:bg-[#1ebe5a] focus-visible:ring-[#25D366]';
    default:
      return 'bg-[#4A7C59] text-white';
    }
}

function getSizeClasses(size: ButtonSize): string {
    switch (size) {
        case 'sm':
      return 'px-4 py-2 text-sm';
    case 'md':
      return 'px-5 py-2.5 text-base';
    case 'lg':
      return 'px-6 py-3 text-lg';
    default:
      return 'px-5 py-2.5 text-base';
    }
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    ariaLabel,
    className = '',
    type = 'button',
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

    const classes = `${baseClasses} ${getVariantClasses(variant)} ${getSizeClasses(size)} ${className}`;

    // Link externo (WhatsApp, Instagram, etc.)
    if (href) {
        return (
            <a
            href={href}
            aria-label={ariaLabel}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }


    // Botão padrão
    return (
        <button
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        >
            {children}
        </button>
    );
};