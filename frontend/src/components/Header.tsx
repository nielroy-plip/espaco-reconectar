'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Button } from './Button';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    {label: 'Início', href: '/'},
    {label: 'Sobre', href: '/sobre'},
    {label: 'Terapias', href: '/terapias'},
    {label: 'Experiências', href: '/experiencias'},
    {label: 'Contato', href: '/contato'},    
];

const WHATSAPP_URL = 'https://wa.me/5511999999999';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#F5F1E8]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-[#4A7C59] hover:text-[#3d6a4d] transition-colors"
          >
            <span className="text-[#D4AF37]">🌿</span>
            <span>Reconectar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2C2C2C] font-medium hover:text-[#4A7C59] transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              href={WHATSAPP_URL}
              variant="whatsapp"
              size="md"
              ariaLabel="Enviar mensagem no WhatsApp"
              className="flex items-center gap-2"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#F5F1E8] transition-colors"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-[#4A7C59]" />
            ) : (
              <FaBars size={24} className="text-[#4A7C59]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-[#F5F1E8]/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-[#2C2C2C] hover:bg-[#F5F1E8] hover:text-[#4A7C59] rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 pt-4 border-t border-[#D4AF37]">
                <Button
                  href={WHATSAPP_URL}
                  variant="whatsapp"
                  size="md"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};