"use client";

import * as React from "react";
import Image from "next/image";
import { Download, Heart, ArrowUp, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useDownload } from "./download-provider";

export function Footer() {
  const { openDownload } = useDownload();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5EFED] text-[#053225] pt-16 pb-12 border-t border-[#053225]/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#D96C06]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#053225]/10">

          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo de Xiri"
                width={96}
                height={96}
                className="h-[72px] w-[72px] sm:h-[88px] sm:w-[88px] object-contain"
              />
            </div>

            <p className="text-sm text-[#053225]/70 max-w-sm leading-relaxed mb-6">
              La plataforma comunitaria creada para revalorizar nuestra comida tradicional, conectar con comiderías locales y redescubrir los sabores de cada departamento nicaragüense.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#053225]/80 bg-white px-3.5 py-2 rounded-xl border border-[#053225]/10">
              <MapPin className="h-4 w-4 text-[#D96C06]" />
              <span>Nicaragua, Centroamérica</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2292A4] mb-4">
              Explorar
            </h4>
            <ul className="space-y-2.5 text-sm text-[#053225]/70">
              <li>
                <a href="#que-es" className="hover:text-[#053225] transition-colors">
                  ¿Qué es Xiri?
                </a>
              </li>
              <li>
                <a href="#platillos" className="hover:text-[#053225] transition-colors">
                  Platillos Típicos
                </a>
              </li>
              <li>
                <a href="#rutas" className="hover:text-[#053225] transition-colors">
                  Rutas Culinarias
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-[#053225] transition-colors">
                  Pasaporte & Colección
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Community */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2292A4] mb-4">
              Comunidad & Negocios
            </h4>
            <ul className="space-y-2.5 text-sm text-[#053225]/70">
              <li>
                <a href="#negocios" className="hover:text-[#053225] transition-colors">
                  Verificación de Comiderías
                </a>
              </li>
              <li>
                <a href="#negocios" className="hover:text-[#053225] transition-colors">
                  Directorio de Fritangas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#053225] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#descargar" className="hover:text-[#053225] transition-colors">
                  Descargar APK Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Download CTA Card in Footer */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D96C06] mb-2">
                Instalá la App
              </h4>
              <p className="text-xs text-[#053225]/70 mb-4">
                Llevá la guía culinaria contigo a todos lados.
              </p>
              <Button
                variant="orange"
                size="sm"
                onClick={openDownload}
                className="w-full text-xs font-bold"
              >
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Descargar Gratis
              </Button>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-1.5 text-xs text-[#053225]/60 hover:text-[#053225] transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Volver arriba</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#053225]/60 text-center sm:text-left">
          <p>© 2026 Xiri Nicaragua. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5 justify-center">
            Hecho con mucho <Heart className="h-3.5 w-3.5 fill-[#D96C06] text-[#D96C06]" /> y orgullo en Nicaragua 🇳🇮
          </p>
        </div>
      </div>
    </footer>
  );
}
