"use client";

import * as React from "react";
import Image from "next/image";
import {
  Download,
  MapPin,
  Star,
  Award,
  Compass,
  Utensils,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HeroSectionProps {
  onOpenDownload: () => void;
}

export function HeroSection({ onOpenDownload }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background radial gradients matching brand colors */}
      <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-[#2292A4]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-[#D96C06]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#053225]/5 blur-3xl pointer-events-none" />

      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#053225]/15 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#D96C06] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#053225]">
                🇳🇮 La Primera App Gastronómica de Nicaragua
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight text-[#053225] leading-[1.08]">
              Explorá el auténtico{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96C06] via-[#BDBF09] to-[#2292A4]">
                sabor nicaragüense
              </span>{" "}
              en tu bolsillo.
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#053225]/75 max-w-2xl font-normal leading-relaxed">
              Descubrí comidas típicas de los 17 departamentos, recorré rutas culinarias con negocios locales verificados y coleccioná tus experiencias culinarias como un verdadero explorador del sabor.
            </p>

            {/* CTA Group */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                variant="orange"
                size="xl"
                onClick={onOpenDownload}
                className="w-full sm:w-auto shadow-xl shadow-[#D96C06]/25 hover:shadow-2xl hover:shadow-[#D96C06]/40 text-base"
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar Gratis Ahora
              </Button>
              <a
                href="#platillos"
                className="inline-flex items-center justify-center h-14 rounded-2xl px-6 text-sm sm:text-base font-bold text-[#053225] bg-white/80 hover:bg-white border border-[#053225]/15 shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
              >
                <Utensils className="h-4 w-4 mr-2 text-[#2292A4]" />
                Ver Platillos Típicos
              </a>
            </div>

            {/* Direct Download Badge */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-[#053225]/70">
              <div
                onClick={onOpenDownload}
                className="cursor-pointer flex items-center gap-2 rounded-xl bg-white/90 border border-[#053225]/10 px-3 py-2 hover:border-[#D96C06]/50 transition-all shadow-xs"
              >
                <div className="h-5 w-5 rounded-md bg-[#053225] text-white flex items-center justify-center text-[10px] font-bold">
                  APK
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#053225]/60 font-semibold leading-none">Descarga directa</span>
                  <span className="text-xs font-bold text-[#053225] leading-tight">Android APK</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/90 border border-[#053225]/10 px-3 py-2 shadow-xs">
                <CheckCircle className="h-4 w-4 text-[#2292A4]" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#053225]/60 font-semibold leading-none">Compatible con</span>
                  <span className="text-xs font-bold text-[#053225] leading-tight">Android 8.0+</span>
                </div>
              </div>
            </div>

            {/* Social Proof Pill */}
            <div className="mt-8 pt-6 border-t border-[#053225]/10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-[#053225] border-2 border-[#F5EFED] flex items-center justify-center text-white text-xs font-bold">
                    🇳🇮
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#D96C06] border-2 border-[#F5EFED] flex items-center justify-center text-white text-xs font-bold">
                    👨‍🍳
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#2292A4] border-2 border-[#F5EFED] flex items-center justify-center text-white text-xs font-bold">
                    ⭐
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center text-[#D96C06]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-[#053225]">4.9 / 5.0</span>
                  </div>
                  <span className="text-[11px] text-[#053225]/70">
                    Comunidad activa de sibaritas nicas
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-4 border-l border-[#053225]/15">
                <CheckCircle className="h-5 w-5 text-[#053225]" />
                <span className="text-xs font-semibold text-[#053225]">
                  Comiderías y Fritangas 100% Locales
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup with Real App Details */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Floating Badge Left */}
            <div className="hidden sm:flex absolute -left-6 top-16 z-20 items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl border border-[#053225]/10 animate-float">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#053225] text-white">
                <MapPin className="h-5 w-5 text-[#BDBF09]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#053225]">Ruta del Vigorón</p>
                <p className="text-[10px] text-[#053225]/70">Granada & Masaya • 6 paradas</p>
              </div>
            </div>

            {/* Floating Badge Right */}
            <div className="hidden sm:flex absolute -right-6 bottom-20 z-20 items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl border border-[#053225]/10 animate-float-slow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D96C06] text-white">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#053225]">Insignia Desbloqueada</p>
                <p className="text-[10px] text-[#053225]/70">Maestro del Gallo Pinto</p>
              </div>
            </div>

            {/* Smartphone Frame */}
            <div className="relative w-[290px] sm:w-[320px] rounded-[48px] bg-[#053225] p-3.5 shadow-[0_25px_60px_-15px_rgba(5,50,37,0.4)] border-4 border-[#084333]">
              
              {/* Phone Speaker & Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#03231a] rounded-full z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-[#053225] rounded-full" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#053225] ml-2" />
              </div>

              {/* Screen Inner */}
              <div className="relative rounded-[38px] bg-[#F5EFED] overflow-hidden text-[#053225] border border-black/10 flex flex-col pt-9 pb-3">
                
                {/* Mobile App Header */}
                <div className="px-4 pb-3 flex items-center justify-between border-b border-[#053225]/10">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-[#053225] p-1 flex items-center justify-center">
                      <Image
                        src="/images/logo.png"
                        alt="Logo Xiri"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-black text-sm text-[#053225]">Xiri</span>
                  </div>
                  <Badge variant="orange" className="text-[10px] py-0 px-1.5 font-bold">
                    Nicaragua
                  </Badge>
                </div>

                {/* Welcome Card (Direct from xiri-frontend WelcomeBanner.tsx) */}
                <div className="m-3 bg-[#D96C06] rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-[11px] font-medium text-white/80 block">
                      Hola, Explorador 👋
                    </span>
                    <h3 className="text-base font-extrabold leading-tight mt-0.5">
                      ¿Qué vamos a saborear hoy?
                    </h3>
                  </div>
                  <div className="absolute -right-3 -bottom-3 opacity-25">
                    <Image
                      src="/images/logo.png"
                      alt="Watermark"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>

                {/* Quick Categories Bar */}
                <div className="px-3 py-1 flex gap-1.5 overflow-x-auto no-scrollbar text-[11px] font-semibold">
                  <span className="bg-[#053225] text-white px-2.5 py-1 rounded-full whitespace-nowrap">
                    Destacados
                  </span>
                  <span className="bg-white text-[#053225] px-2.5 py-1 rounded-full border border-[#053225]/10 whitespace-nowrap">
                    Fritangas
                  </span>
                  <span className="bg-white text-[#053225] px-2.5 py-1 rounded-full border border-[#053225]/10 whitespace-nowrap">
                    Rutas
                  </span>
                </div>

                {/* Mockup Featured Dish Card */}
                <div className="mx-3 mt-2 rounded-2xl bg-white border border-[#053225]/10 overflow-hidden shadow-sm">
                  <div className="relative h-28 w-full bg-slate-200">
                    <Image
                      src="/images/dishes/vigoron.jpg"
                      alt="Vigorón Granadino"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-[#053225]/80 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                      Granada
                    </div>
                    <div className="absolute bottom-2 right-2 bg-white/90 text-[#053225] text-[10px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                      <Star className="h-3 w-3 fill-[#D96C06] text-[#D96C06]" />
                      4.9
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-xs text-[#053225]">Vigorón Tradicional</h4>
                      <Badge variant="teal" className="text-[9px] py-0 px-1">Típico</Badge>
                    </div>
                    <p className="text-[10px] text-[#053225]/70 line-clamp-1 mt-0.5">
                      Yuca suave, chicharrón crujiente y ensalada de repollo fresca en hoja de plátano.
                    </p>
                    <div className="mt-2 flex items-center justify-between pt-2 border-t border-[#053225]/5 text-[10px]">
                      <span className="font-bold text-[#D96C06]">Fritanga Doña Tania</span>
                      <span className="text-[#2292A4] font-semibold underline">Ver ruta →</span>
                    </div>
                  </div>
                </div>

                {/* Second Mini Card */}
                <div className="mx-3 mt-2 rounded-2xl bg-white p-2.5 border border-[#053225]/10 flex items-center gap-2.5">
                  <div className="relative h-12 w-12 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src="/images/dishes/carne-asada.jpg"
                      alt="Carne Asada"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[11px] font-bold text-[#053225] truncate">Carne Asada con Tajadas</h5>
                    <p className="text-[9px] text-[#053225]/70">León • 5 locales disponibles</p>
                  </div>
                  <span className="h-6 w-6 rounded-full bg-[#BDBF09]/20 text-[#6f7004] flex items-center justify-center text-[10px] font-black">
                    +
                  </span>
                </div>

                {/* Mockup Bottom Navigation Bar */}
                <div className="mt-3 mx-2 pt-2 border-t border-[#053225]/10 bg-white/80 rounded-xl px-3 py-1.5 flex items-center justify-around text-[#053225]/70">
                  <div className="flex flex-col items-center text-[#D96C06]">
                    <Utensils className="h-4 w-4" />
                    <span className="text-[8px] font-bold mt-0.5">Inicio</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Compass className="h-4 w-4" />
                    <span className="text-[8px] font-medium mt-0.5">Rutas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="h-4 w-4" />
                    <span className="text-[8px] font-medium mt-0.5">Colección</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-[#053225] text-white flex items-center justify-center text-[8px] font-bold">
                      J
                    </div>
                    <span className="text-[8px] font-medium mt-0.5">Perfil</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
