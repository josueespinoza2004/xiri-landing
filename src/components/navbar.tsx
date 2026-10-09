"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, UtensilsCrossed, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface NavbarProps {
  onOpenDownload: () => void;
}

export function Navbar({ onOpenDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Qué es Xiri?", href: "#que-es" },
    { name: "Características", href: "#caracteristicas" },
    { name: "Platillos Típicos", href: "#platillos" },
    { name: "Rutas", href: "#rutas" },
    { name: "Para Comerciantes", href: "#negocios" },
    { name: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5EFED]/90 backdrop-blur-md shadow-sm border-b border-[#053225]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-[#053225] p-2 flex items-center justify-center shadow-md shadow-[#053225]/20 group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.png"
              alt="Logo de Xiri"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-[#053225]">
                Xiri
              </span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-[#BDBF09]/30 text-[#6f7004]">
                NICARAGUA
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#053225]/70 -mt-1 hidden sm:block">
              Gastronomía en tu bolsillo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#053225]/10 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-[#053225]/80 hover:text-[#053225] hover:bg-[#053225]/5 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="orange"
            size="default"
            onClick={onOpenDownload}
            className="group shadow-md hover:shadow-lg"
          >
            <Download className="h-4 w-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            <span>Descargar App</span>
          </Button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-2xl border border-[#053225]/15 bg-white text-[#053225] hover:bg-[#053225]/5 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#053225]/10 bg-[#F5EFED] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-[#053225] hover:bg-[#053225]/5"
              >
                <span>{link.name}</span>
                <span className="text-[#D96C06]">→</span>
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="orange"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full"
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar Xiri Gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
