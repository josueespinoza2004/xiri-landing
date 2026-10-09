import Image from "next/image";
import { MapPin, Info, Sparkles, UtensilsCrossed } from "lucide-react";
import { Badge } from "./ui/badge";
import type { Food } from "@/lib/api";

interface DishesShowcaseProps {
  foods: Food[];
}

export function DishesShowcase({ foods }: DishesShowcaseProps) {
  return (
    <section id="platillos" className="py-20 lg:py-28 bg-[#F5EFED] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-[#D96C06]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-[#2292A4]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <Badge variant="orange" className="mb-3 uppercase tracking-wider text-xs">
            Muestra Gastronómica
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#053225] tracking-tight">
            Sabor, herencia y tradición en cada plato
          </h2>
          <p className="mt-3 text-base text-[#053225]/75">
            Una muestra de las comidas típicas que vas a encontrar documentadas en Xiri,
            con su origen cultural y el departamento al que pertenecen.
          </p>
        </div>

        {/* Dishes Grid */}
        {foods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {foods.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-3xl bg-white border border-[#053225]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D96C06]/30 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  {dish.image ? (
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-[#053225]/20">
                      <UtensilsCrossed className="h-14 w-14" />
                    </div>
                  )}

                  {/* Department badge */}
                  {dish.department_name && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#053225]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <MapPin className="h-3 w-3 text-[#BDBF09]" />
                        {dish.department_name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-[#053225] group-hover:text-[#D96C06] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#053225]/75 leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Cultural note box */}
                  {dish.cultural_origin && (
                    <div className="mt-4 rounded-2xl bg-[#2292A4]/10 p-3 border border-[#2292A4]/20 flex items-start gap-2.5">
                      <Info className="h-4 w-4 text-[#2292A4] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-[#053225]/80 italic">
                        {dish.cultural_origin}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white border border-[#053225]/10 p-10 text-center text-[#053225]/60">
            <UtensilsCrossed className="h-10 w-10 mx-auto mb-3 text-[#053225]/30" />
            <p className="text-sm font-medium">
              No pudimos cargar los platillos en este momento. Descargá la app para ver el catálogo completo.
            </p>
          </div>
        )}

        {/* Bottom informational banner (sin acciones) */}
        <div className="mt-14 rounded-3xl bg-[#053225] text-white p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 shadow-xl">
          <div className="h-16 w-16 rounded-2xl bg-[#D96C06] flex items-center justify-center shrink-0 text-white shadow-lg">
            <Sparkles className="h-8 w-8" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Buscá platillos por ingredientes, departamento o cercanía
            </h4>
            <p className="text-sm text-white/80 mt-1 max-w-2xl">
              En la aplicación Xiri podés explorar el catálogo completo, ver el mapa de comiderías
              que los sirven y coleccionar tus experiencias gastronómicas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
