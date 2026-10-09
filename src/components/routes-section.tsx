import { MapPin, Compass, Route as RouteIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import type { GastronomicRoute } from "@/lib/api";

interface RoutesSectionProps {
  routes: GastronomicRoute[];
}

const ACCENTS = ["#D96C06", "#2292A4", "#BDBF09", "#F5EFED"];

export function RoutesSection({ routes }: RoutesSectionProps) {
  // Solo mostramos una muestra; el resto está en la app.
  const sample = routes.slice(0, 4);
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
            Itinerarios temáticos que conectan comidas típicas y negocios locales por
            distintas regiones del país. Explorá el recorrido completo dentro de la app.
          </p>
        </div>

        {/* Routes Grid */}
        {sample.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sample.map((route, idx) => {
              const accent = ACCENTS[idx % ACCENTS.length];
              return (
                <div
                  key={route.id}
                  className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-[#053225] font-black shadow-md"
                      style={{ backgroundColor: accent }}
                    >
                      <RouteIcon className="h-5 w-5" />
                    </div>
                    {route.department_name && (
                      <span className="text-white/80 text-xs flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-[#BDBF09]" />
                        {route.department_name}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-white leading-snug">
                    {route.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed flex-1">
                    {route.description}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl bg-white/10 border border-white/20 p-10 text-center text-white/70">
            <Compass className="h-10 w-10 mx-auto mb-3 text-white/40" />
            <p className="text-sm font-medium">
              No pudimos cargar las rutas en este momento. Descargá la app para verlas todas.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
