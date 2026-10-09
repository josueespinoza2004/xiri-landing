"use client";

import * as React from "react";
import {
  Download,
  Smartphone,
  QrCode,
  CheckCircle2,
  X,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "all" | "android" | "ios" | "qr";
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [activeTab, setActiveTab] = React.useState<"all" | "android" | "ios" | "qr">("all");
  const [downloadStarted, setDownloadStarted] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const triggerCelebration = () => {
    setDownloadStarted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#053225", "#D96C06", "#2292A4", "#BDBF09", "#F5EFED"],
    });
    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#053225]/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-xl rounded-3xl bg-[#F5EFED] p-6 sm:p-8 shadow-2xl border border-white/60 text-[#053225] animate-in zoom-in-95 duration-200 overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#D96C06]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#2292A4]/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-[#053225]/70 hover:bg-[#053225]/10 hover:text-[#053225] transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <Badge variant="orange" className="text-xs uppercase tracking-wider">
              Descarga Oficial v1.0.0
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#053225]">
            Instalá Xiri en tu Teléfono
          </h2>
          <p className="mt-1 text-sm text-[#053225]/70">
            Comenzá a explorar los mejores sabores, fritangas y rutas gastronómicas de Nicaragua.
          </p>
        </div>

        {/* Download notification banner if clicked */}
        {downloadStarted && (
          <div className="mb-4 flex items-center gap-3 rounded-2xl bg-[#053225] p-3.5 text-white animate-in slide-in-from-top-2 duration-300">
            <Sparkles className="h-5 w-5 text-[#BDBF09] shrink-0" />
            <p className="text-xs sm:text-sm font-medium">
              ¡Descarga en progreso! Revisá las notificaciones de tu navegador para instalar el archivo APK.
            </p>
          </div>
        )}

        {/* Quick Options Grid */}
        <div className="space-y-3.5">
          {/* Option 1: Android APK Direct (Instant Download) */}
          <div className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#053225]/10 bg-white p-4 sm:p-5 shadow-sm hover:border-[#D96C06]/40 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D96C06]/10 text-[#D96C06] group-hover:bg-[#D96C06] group-hover:text-white transition-colors">
                <Download className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[#053225] text-base">Android APK Directo</h3>
                  <Badge variant="orange" className="text-[10px] py-0 px-2">Recomendado</Badge>
                </div>
                <p className="text-xs text-[#053225]/70 mt-0.5">
                  Instalación instantánea sin intermediarios. Compatible con Android 8.0+.
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-[11px] text-[#053225]/60 font-medium">
                  <span>Tamaño: ~38 MB</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#053225]">
                    <ShieldCheck className="h-3 w-3 text-[#2292A4]" /> Verificado y seguro
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="orange"
              size="sm"
              onClick={triggerCelebration}
              className="sm:shrink-0 w-full sm:w-auto"
            >
              <Download className="h-4 w-4 mr-1.5" />
              Descargar APK
            </Button>
          </div>

          {/* Option 2: Google Play Store */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#053225]/10 bg-white p-4 sm:p-5 shadow-sm hover:border-[#2292A4]/40 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2292A4]/10 text-[#2292A4]">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#053225] text-base">Google Play Store</h3>
                <p className="text-xs text-[#053225]/70 mt-0.5">
                  Actualizaciones automáticas y sincronización segura con tu cuenta Google.
                </p>
                <span className="inline-block mt-1 text-[11px] text-[#2292A4] font-medium">
                  Próximamente disponible en tienda
                </span>
              </div>
            </div>
            <Button
              variant="teal"
              size="sm"
              onClick={triggerCelebration}
              className="sm:shrink-0 w-full sm:w-auto"
            >
              Google Play
              <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </div>

          {/* Option 3: iOS App Store / TestFlight */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#053225]/10 bg-white p-4 sm:p-5 shadow-sm hover:border-[#053225]/30 hover:shadow-md transition-all">
            <div className="flex items-start gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#053225]/10 text-[#053225]">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#053225] text-base">iOS / Apple App Store</h3>
                <p className="text-xs text-[#053225]/70 mt-0.5">
                  Disponible para iPhone y iPad con iOS 14.0 o superior.
                </p>
                <span className="inline-block mt-1 text-[11px] text-[#053225]/70 font-medium">
                  Versión beta TestFlight & App Store
                </span>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={triggerCelebration}
              className="sm:shrink-0 w-full sm:w-auto"
            >
              App Store
              <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* QR Code Quick Scan Footer */}
        <div className="mt-5 rounded-2xl bg-[#053225] p-4 text-[#F5EFED] flex flex-col sm:flex-row items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2 text-[#053225]">
            <QrCode className="h-12 w-12 text-[#053225]" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-xs font-semibold text-[#BDBF09] uppercase tracking-wider">
              ¿Estás en tu computadora?
            </p>
            <p className="text-xs text-white/80 mt-0.5">
              Escaneá el código QR con la cámara de tu celular para descargar Xiri de inmediato sin cables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
