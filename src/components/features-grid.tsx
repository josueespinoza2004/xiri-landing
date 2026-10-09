"use client";

import * as React from "react";
import Image from "next/image";
import {
  Compass,
  BookmarkCheck,
  Store,
  MapPin,
  Sparkles,
  ShieldCheck,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export function FeaturesGrid() {
  return (
    <section id="caracteristicas" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal" className="mb-3 uppercase tracking-wider text-xs">
            Experiencia Inmersiva
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#053225] tracking-tight">
            Todo lo que necesitás para explorar la cocina nica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#053225]/70">
            Diseñada especialmente para conectar a comensales, viajeros y familias con las tradiciones culinarias y las comiderías más queridas de Nicaragua.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Rutas Gastronómicas (Large) */}
          <div className="lg:col-span-2 rounded-3xl bg-white border border-[#053225]/10 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#2292A4]/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2292A4]/15 text-[#2292A4]">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="teal" className="text-[11px]">Itinerarios Guiados</Badge>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#053225]">
                    Rutas Gastronómicas Temáticas
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#053225]/70 max-w-lg leading-relaxed">
                No des vueltas sin rumbo. Xiri organiza paradas consecutivas optimizadas: recorré la <strong className="text-[#053225]">Ruta del Quesillo</strong> entre Nagarote y La Paz Centro, o la <strong className="text-[#053225]">Ruta del Baho y Vigorón</strong> en Granada y Masaya con información detallada de cada negocio.
              </p>
            </div>

            {/* Visual Route Preview inside Card */}
            <div className="mt-6 pt-6 border-t border-[#053225]/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#F5EFED] p-3.5 border border-[#053225]/5">
                <div className="flex items-center justify-between text-xs font-bold text-[#053225] mb-1">
                  <span>Parada 1</span>
                  <span className="text-[#D96C06]">★ 4.9</span>
                </div>
                <p className="text-xs font-semibold text-[#053225]">Quesillos Gourmet La Paz</p>
                <p className="text-[10px] text-[#053225]/60 mt-0.5">León • Carretera Vieja</p>
              </div>

              <div className="rounded-2xl bg-[#F5EFED] p-3.5 border border-[#053225]/5">
                <div className="flex items-center justify-between text-xs font-bold text-[#053225] mb-1">
                  <span>Parada 2</span>
                  <span className="text-[#D96C06]">★ 4.8</span>
                </div>
                <p className="text-xs font-semibold text-[#053225]">Típicos El Granadino</p>
                <p className="text-[10px] text-[#053225]/60 mt-0.5">Parque Central, Granada</p>
              </div>

              <div className="rounded-2xl bg-[#053225] p-3.5 text-white">
                <div className="flex items-center justify-between text-xs font-bold text-[#BDBF09] mb-1">
                  <span>Tu Ruta</span>
                  <span>+4 paradas</span>
                </div>
                <p className="text-xs font-semibold">Trazá tu propio viaje</p>
                <p className="text-[10px] text-white/70 mt-0.5">Guardalo en tu perfil</p>
              </div>
            </div>
          </div>

          {/* Card 2: Pasaporte & Colección Culinaria */}
          <div className="rounded-3xl bg-gradient-to-b from-white to-[#F5EFED] border border-[#053225]/10 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#D96C06]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D96C06]/15 text-[#D96C06] mb-4">
                <BookmarkCheck className="h-6 w-6" />
              </div>
              <Badge variant="orange" className="mb-2 text-[11px]">Gamificación & Pasaporte</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-[#053225]">
                Colección Gastronómica
              </h3>
              <p className="text-sm text-[#053225]/70 mt-2 leading-relaxed">
                Marcá cada comida nicaragüense que hayas probado. Completá tu álbum culinario personal y ganá insignias que demuestran tu pasión por la gastronomía local.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-4 border border-[#053225]/10 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-[#053225] mb-2">
                <span>Tu progreso culinario</span>
                <span className="text-[#D96C06]">18 / 50 probados</span>
              </div>
              <div className="w-full bg-[#F5EFED] rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-[#D96C06] to-[#BDBF09] h-2.5 rounded-full w-[36%]" />
              </div>
              <p className="text-[11px] text-[#053225]/60 mt-2">
                🏆 Próximo nivel: <strong className="text-[#053225]">Cazador de Fritangas Pro</strong>
              </p>
            </div>
          </div>

          {/* Card 3: Negocios Locales Verificados */}
          <div className="rounded-3xl bg-white border border-[#053225]/10 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#053225]/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#053225]/10 text-[#053225] mb-4">
                <ShieldCheck className="h-6 w-6 text-[#053225]" />
              </div>
              <Badge variant="dark" className="mb-2 text-[11px]">Comercio 100% Real</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-[#053225]">
                Negocios Verificados
              </h3>
              <p className="text-sm text-[#053225]/70 mt-2 leading-relaxed">
                Fritangas familiares, comiderías tradicionales de mercado y restaurantes emblemáticos verificados para asegurar horarios reales, ubicación exacta y menús actualizados.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 p-3 bg-[#F5EFED] rounded-2xl">
              <div className="h-10 w-10 rounded-xl bg-[#053225] text-white flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <div>
                <p className="text-xs font-bold text-[#053225]">Sello de Verificación Xiri</p>
                <p className="text-[10px] text-[#053225]/60">Sin comisiones excesivas a comiderías</p>
              </div>
            </div>
          </div>

          {/* Card 4: Exploración por Departamento */}
          <div className="lg:col-span-2 rounded-3xl bg-[#053225] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#BDBF09]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="olive" className="text-[11px] bg-[#BDBF09]/20 text-[#d6d81e]">
                    Cobertura Nacional
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    17 Departamentos y Regiones Autónomas
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                Nicaragua es vasta y llena de sabores únicos: el Baho de Masaya, el Gallo Pinto con coco y el Rondón de la Costa Caribe, las Rosquillas de Somoto, y las Güirilas de Matagalpa. Xiri te permite filtrar y explorar cada plato según su departamento natal.
              </p>
            </div>

            {/* Department tags carousel */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs">
              {[
                "Managua",
                "Granada",
                "León",
                "Masaya",
                "Matagalpa",
                "Rivas",
                "Estelí",
                "Carazo",
                "Chinandega",
                "Costa Caribe Norte & Sur",
                "Madriz (Somoto)",
                "Chontales",
              ].map((dep) => (
                <span
                  key={dep}
                  className="rounded-full bg-white/10 hover:bg-[#D96C06] px-3 py-1 text-white text-xs font-medium transition-colors cursor-default"
                >
                  📍 {dep}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
