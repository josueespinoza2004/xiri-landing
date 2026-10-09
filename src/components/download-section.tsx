"use client";

import * as React from "react";
import Image from "next/image";
import {
  Download,
  Smartphone,
  QrCode,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { downloadApk } from "@/lib/config";

interface DownloadSectionProps {
  onOpenDownload: () => void;
}

export function DownloadSection({ onOpenDownload }: DownloadSectionProps) {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  const handleDownload = (platform: string) => {
    if (platform === "apk") {
      downloadApk();
    }

    setDownloadSuccess(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#D96C06", "#2292A4", "#BDBF09", "#053225", "#F5EFED"],
    });

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 5000);
  };

  return (
    <section id="descargar" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[40px] bg-gradient-to-br from-[#053225] via-[#084333] to-[#03231a] p-8 sm:p-12 lg:p-20 text-white shadow-2xl overflow-hidden border border-white/10">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#D96C06]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#2292A4]/25 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge variant="orange" className="uppercase tracking-wider text-xs">
                  Descarga Gratuita Oficial
                </Badge>
                <span className="text-white/60 text-xs">• Versión 1.0.0</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Empezá a saborear Nicaragua hoy mismo
              </h2>

              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                Descargá la aplicación en tu celular y empezá a recorrer las fritangas y rutas gastronómicas más auténticas del país. Disponible gratis para todos los dispositivos móviles.
              </p>

              {/* Success Notification Banner */}
              {downloadSuccess && (
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#D96C06] p-4 text-white shadow-xl animate-in fade-in duration-300">
                  <Sparkles className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-bold">
                    ¡Comenzando descarga de Xiri APK! Guardá el archivo en tu dispositivo para instalarlo.
                  </p>
                </div>
              )}

              {/* Buttons Grid */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* APK Button */}
                <Button
                  variant="orange"
                  size="xl"
                  onClick={() => handleDownload("apk")}
                  className="w-full sm:w-auto shadow-2xl shadow-[#D96C06]/40 hover:shadow-[#D96C06]/60 text-base"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar APK Directo
                </Button>

                {/* Google Play Button */}
                <Button
                  variant="teal"
                  size="xl"
                  onClick={() => handleDownload("playstore")}
                  className="w-full sm:w-auto shadow-xl shadow-[#2292A4]/30 hover:shadow-[#2292A4]/50 text-base"
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  Google Play Store
                </Button>

                {/* Apple Store Button */}
                <Button
                  variant="glass"
                  size="xl"
                  onClick={() => handleDownload("appstore")}
                  className="w-full sm:w-auto text-[#053225] text-base"
                >
                  <Sparkles className="h-5 w-5 mr-2 text-[#D96C06]" />
                  App Store (iOS)
                </Button>
              </div>

              {/* Guarantees */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/70">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <ShieldCheck className="h-4 w-4 text-[#BDBF09] shrink-0" />
                  <span>Sin malware ni permisos invasivos</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Zap className="h-4 w-4 text-[#2292A4] shrink-0" />
                  <span>Descarga ligera (~38 MB)</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="h-4 w-4 text-[#D96C06] shrink-0" />
                  <span>100% gratuita y comunitaria</span>
                </div>
              </div>
            </div>

            {/* Right Content: Interactive QR Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl bg-white p-7 sm:p-8 text-[#053225] shadow-2xl max-w-sm w-full text-center border-4 border-white/20">
                
                {/* Brand Badge inside QR Card */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F5EFED] px-3 py-1 mb-4 border border-[#053225]/10">
                  <span className="h-2 w-2 rounded-full bg-[#D96C06]" />
                  <span className="text-xs font-bold text-[#053225]">Escaneá para instalar</span>
                </div>

                {/* QR Visual Canvas */}
                <div className="relative mx-auto my-2 p-4 bg-[#F5EFED] rounded-2xl border border-[#053225]/10 flex flex-col items-center justify-center">
                  <div className="relative h-44 w-44 flex items-center justify-center bg-white p-2 rounded-xl shadow-inner">
                    <QrCode className="h-36 w-36 text-[#053225]" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="h-10 w-10 rounded-xl bg-[#053225] p-1.5 shadow-md flex items-center justify-center">
                        <Image
                          src="/images/logo.png"
                          alt="Xiri Icon"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-black text-lg text-[#053225] mt-4">
                  Apuntá con tu cámara
                </h3>
                <p className="text-xs text-[#053225]/70 mt-1">
                  Tu teléfono detectará el enlace directo para descargar el paquete de instalación en segundos.
                </p>

                <div className="mt-4 pt-4 border-t border-[#053225]/10 flex items-center justify-around text-[11px] font-bold text-[#053225]/80">
                  <span className="text-[#2292A4]">Android 8.0+</span>
                  <span>•</span>
                  <span className="text-[#D96C06]">iOS 14.0+</span>
                  <span>•</span>
                  <span className="text-[#053225]">Sin registro previo</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
