"use client";

import * as React from "react";
import {
  Compass,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Navigation,
  UtensilsCrossed,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface RoutesSectionProps {
  onOpenDownload: () => void;
}

const ROUTES = [
  {
    id: "ruta-quesillo",
    name: "Ruta del Quesillo y la Tradición",
    department: "León & Managua",
    distance: "3 paradas emblemáticas",
    time: "2 horas",
    badge: "Más Popular",
    badgeVariant: "orange" as const,
    description:
      "El viaje definitivo del quesillo: de Nagarote a La Paz Centro, saboreando el queso en trenza recién estirado con crema pura de campo.",
    stops: [
      { name: "Quesillos Gourmet La Paz", address: "Km 58 Carretera a León" },
      { name: "Quesillos Mi Bohío", address: "Entrada principal, Nagarote" },
      { name: "Quesillos Doña Tania", address: "Frente al parque central" },
    ],
  },
  {
    id: "ruta-colonial",
    name: "Ruta del Vigorón y Baho Colonial",
    department: "Granada & Masaya",
    distance: "4 paradas patrimoniales",
    time: "3.5 horas",
    badge: "Patrimonio",
    badgeVariant: "teal" as const,
    description:
      "Degustá el vigorón en hoja de plátano en los quioscos de Granada y rematá con un humeante baho cocinado al vapor en Masaya.",
    stops: [
      { name: "Quiosco El Granadino", address: "Parque Central de Granada" },
      { name: "Comidería La Abuela", address: "Calle Real Xalteva, Granada" },
      { name: "Baho Vilma", address: "Mercado de Artesanías, Masaya" },
    ],
  },
  {
    id: "ruta-fritanga",
    name: "Ruta de la Fritanga y Carbón",
    department: "Managua",
    distance: "5 puestos tradicionales",
    time: "Nocturna",
    badge: "100% Callejero",
    badgeVariant: "olive" as const,
    description:
      "El recorrido rey al caer la noche: carne asada con tajadas crocantes, gallo pinto frito, maduro con queso y enchiladas calientes.",
    stops: [
      { name: "Fritanga Doña Tania", address: "Barrio Campo Bruce, Managua" },
      { name: "Fritanga La Esquina", address: "Colonia Centroamérica" },
      { name: "Asados Don José", address: "Bello Horizonte, Rotonda" },
    ],
  },
  {
    id: "ruta-maiz",
    name: "Ruta Norteña del Maíz y Café",
    department: "Matagalpa & Jinotega",
    distance: "4 paradas de campo",
    time: "Día completo",
    badge: "Tierra Alta",
    badgeVariant: "dark" as const,
    description:
      "Güirilas con cuajada fresca en el valle de Sébaco, acompañadas de atol tierno y taza de café arábica de estricta altura.",
    stops: [
      { name: "Güirilas El Chagüite", address: "Empalme de Sébaco" },
      { name: "Café Selección Selva Negra", address: "Matagalpa carretera Jinotega" },
      { name: "Comedero Campesino", address: "Entrada a San Ramón" },
    ],
  },
];

export function RoutesSection({ onOpenDownload }: RoutesSectionProps) {
  const [activeRouteIndex, setActiveRouteIndex] = React.useState(0);
  const currentRoute = ROUTES[activeRouteIndex];

  return (
    <section id="rutas" className="py-20 lg:py-28 bg-[#053225] text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#D96C06]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#2292A4]/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="olive" className="mb-3 uppercase tracking-wider text-xs bg-[#BDBF09]/20 text-[#d6d81e]">
            Itinerarios Culinarios
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Recorré las Rutas Gastronómicas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Descubrí la secuencia recomendada de negocios, tiempos de viaje y platillos destacados en cada estación sin perderte por el camino.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {ROUTES.map((route, idx) => (
            <button
              key={route.id}
              onClick={() => setActiveRouteIndex(idx)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                activeRouteIndex === idx
                  ? "bg-white text-[#053225] border-white shadow-xl scale-[1.02]"
                  : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                    activeRouteIndex === idx
                      ? "bg-[#D96C06] text-white"
                      : "bg-white/15 text-white/90"
                  }`}
                >
                  {route.badge}
                </span>
                <span className="text-[11px] font-medium opacity-70">{route.time}</span>
              </div>
              <h4 className="font-bold text-sm line-clamp-1">{route.name}</h4>
              <p
                className={`text-[11px] mt-1 ${
                  activeRouteIndex === idx ? "text-[#053225]/70" : "text-white/60"
                }`}
              >
                📍 {route.department}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Route Spotlight Card */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Route Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-[#D96C06] text-white px-3 py-1 text-xs font-bold">
                  Ruta #{activeRouteIndex + 1}
                </span>
                <span className="text-white/80 text-xs flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#BDBF09]" />
                  {currentRoute.department}
                </span>
                <span className="text-white/80 text-xs flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#2292A4]" />
                  {currentRoute.time}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {currentRoute.name}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                {currentRoute.description}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#BDBF09] mb-3">
                  Paradas recomendadas en la App:
                </p>
                <div className="space-y-3">
                  {currentRoute.stops.map((stop, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-3 bg-white/5 rounded-2xl p-3 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2292A4] text-white font-black text-xs">
                        {sIdx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-white truncate">{stop.name}</p>
                        <p className="text-[11px] text-white/60 truncate">{stop.address}</p>
                      </div>
                      <div className="shrink-0 text-white/50 text-xs flex items-center gap-1">
                        <ShieldCheck className="h-4 w-4 text-[#BDBF09]" />
                        <span>Verificado</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive GPS / Map Preview Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-3xl bg-[#03231a] p-6 border border-white/15 shadow-inner">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-[#2292A4]" />
                    <span className="text-xs font-bold text-white">Modo Guía de Ruta</span>
                  </div>
                  <span className="text-[10px] bg-[#BDBF09]/20 text-[#d6d81e] px-2 py-0.5 rounded-full font-bold">
                    GPS & Mapa
                  </span>
                </div>

                <div className="my-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#D96C06] mt-1 shrink-0 animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-white">Punto de partida sugerido</p>
                      <p className="text-[11px] text-white/60">Abrí la app para trazar ruta desde tu ubicación actual</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-dashed border-white/20 ml-1.5 pl-4 py-1 space-y-3">
                    <p className="text-[11px] text-white/70">📍 Notificación al acercarte a cada comidería</p>
                    <p className="text-[11px] text-white/70">🍽️ Menú disponible sin necesidad de conexión</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#BDBF09] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Meta y Sello de Ruta</p>
                      <p className="text-[11px] text-white/60">Ganá la insignia de la ruta al visitar las paradas</p>
                    </div>
                  </div>
                </div>

                <Button
                  variant="orange"
                  size="default"
                  onClick={onOpenDownload}
                  className="w-full shadow-lg"
                >
                  <Compass className="h-4 w-4 mr-2" />
                  Abrir Ruta en Xiri
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
