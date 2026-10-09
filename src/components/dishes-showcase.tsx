"use client";

import * as React from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  Check,
  Plus,
  Flame,
  Utensils,
  Sparkles,
  Info,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface DishesShowcaseProps {
  onOpenDownload: () => void;
}

interface DishItem {
  id: string;
  name: string;
  department: string;
  category: "fuertes" | "fritanga" | "maiz";
  description: string;
  image: string;
  rating: number;
  tags: string[];
  culturalNote: string;
}

const DISHES: DishItem[] = [
  {
    id: "vigoron",
    name: "Vigorón Tradicional",
    department: "Granada",
    category: "fuertes",
    description:
      "Platillo insignia granadino servido en hoja de plátano verde: yuca cocida tierna, chicharrón crocante y ensalada de repollo fresca con mimbro y tomate.",
    image: "/images/dishes/vigoron.jpg",
    rating: 4.9,
    tags: ["Patrimonio Culinario", "Hoja de Plátano", "Granada"],
    culturalNote: "Nacido en 1914 en Granada, creado por 'La Loca Antonica' durante juegos de béisbol.",
  },
  {
    id: "carne-asada",
    name: "Fritanga y Carne Asada",
    department: "León / Managua",
    category: "fritanga",
    description:
      "Carne de res marinada a la brasa al punto perfecto, acompañada de tajadas de plátano verde fritas, queso frito y ensalada de repollo con vinagre de guineo.",
    image: "/images/dishes/carne-asada.jpg",
    rating: 5.0,
    tags: ["Reina de la Noche", "Queso Frito", "Carbón"],
    culturalNote: "El epicentro de la vida social y nocturna nicaragüense al caer el sol.",
  },
  {
    id: "indio-viejo",
    name: "Indio Viejo Mestizo",
    department: "Carazo / Rivas",
    category: "fuertes",
    description:
      "Ancestral guiso a base de masa de maíz sazonada con achiote, cebolla, chiltoma, naranja agria y carne de res desmenuzada, aromatizado con yerbabuena fresca.",
    image: "/images/dishes/indio-viejo.jpeg",
    rating: 4.8,
    tags: ["Raíces Indígenas", "Yerbabuena", "Masa de Maíz"],
    culturalNote: "Uno de los platillos más antiguos de Nicaragua, con orígenes prehispánicos.",
  },
  {
    id: "guirila",
    name: "Güirila con Cuajada",
    department: "Matagalpa / Sébaco",
    category: "maiz",
    description:
      "Tortilla gruesa elaborada con granos de maíz tierno molido con un toque dulce, asada sobre comal y coronada con generosa cuajada de hacienda y crema fresca.",
    image: "/images/dishes/maiz-matagalpa.jpg",
    rating: 4.9,
    tags: ["Maíz Tierno", "Norte de Nicaragua", "Cuajada"],
    culturalNote: "Típica del norte montañoso nicaragüense, parada obligatoria en Sébaco y Matagalpa.",
  },
  {
    id: "enchiladas",
    name: "Enchiladitas Nicas",
    department: "Masaya",
    category: "fritanga",
    description:
      "Tortilla de maíz doblada rellena de arroz con carne picada y achiote, cubierta con masa de huevo y frita hasta lograr un dorado crocante irresistible.",
    image: "/images/dishes/enchiladas.jpg",
    rating: 4.7,
    tags: ["Fritanga Clásica", "Relleno de Arroz", "Crocante"],
    culturalNote: "Ícono popular de las fritangas de barrio y fiestas patronales de Masaya.",
  },
  {
    id: "atol",
    name: "Atol de Maíz Tierno",
    department: "Madriz / Jinotega",
    category: "maiz",
    description:
      "Bebida caliente y cremosa cocinada a fuego lento con maíz dulce recién desgranado, leche entera de campo, canela y una pizca de sal marina.",
    image: "/images/dishes/atol.jpg",
    rating: 4.8,
    tags: ["Aromático", "Postre Tradicional", "Canela"],
    culturalNote: "Bebida ceremonial campesina que celebra la fertilidad de las cosechas de maíz.",
  },
];

export function DishesShowcase({ onOpenDownload }: DishesShowcaseProps) {
  const [selectedFilter, setSelectedFilter] = React.useState<"todos" | "fuertes" | "fritanga" | "maiz">("todos");
  const [collectedDishes, setCollectedDishes] = React.useState<Record<string, boolean>>({
    vigoron: true, // sample starting state
  });

  const toggleCollected = (id: string) => {
    setCollectedDishes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredDishes = DISHES.filter((dish) => {
    if (selectedFilter === "todos") return true;
    return dish.category === selectedFilter;
  });

  return (
    <section id="platillos" className="py-20 lg:py-28 bg-[#F5EFED] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-[#D96C06]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-[#2292A4]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Badge variant="orange" className="mb-3 uppercase tracking-wider text-xs">
              Muestra Gastronómica
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#053225] tracking-tight">
              Sabor, herencia y tradición en cada plato
            </h2>
            <p className="mt-3 text-base text-[#053225]/75">
              Probá la función de <strong className="text-[#053225]">Colección</strong> interactiva: marcá los platillos que ya has disfrutado o descubrí su origen histórico.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/80 p-1.5 rounded-2xl border border-[#053225]/10 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setSelectedFilter("todos")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedFilter === "todos"
                  ? "bg-[#053225] text-white shadow-xs"
                  : "text-[#053225]/70 hover:text-[#053225] hover:bg-[#F5EFED]"
              }`}
            >
              Todos los Platos
            </button>
            <button
              onClick={() => setSelectedFilter("fuertes")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedFilter === "fuertes"
                  ? "bg-[#053225] text-white shadow-xs"
                  : "text-[#053225]/70 hover:text-[#053225] hover:bg-[#F5EFED]"
              }`}
            >
              Platos Fuertes
            </button>
            <button
              onClick={() => setSelectedFilter("fritanga")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedFilter === "fritanga"
                  ? "bg-[#053225] text-white shadow-xs"
                  : "text-[#053225]/70 hover:text-[#053225] hover:bg-[#F5EFED]"
              }`}
            >
              Fritanga Tradicional
            </button>
            <button
              onClick={() => setSelectedFilter("maiz")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedFilter === "maiz"
                  ? "bg-[#053225] text-white shadow-xs"
                  : "text-[#053225]/70 hover:text-[#053225] hover:bg-[#F5EFED]"
              }`}
            >
              Hijos del Maíz
            </button>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDishes.map((dish) => {
            const isCollected = !!collectedDishes[dish.id];

            return (
              <div
                key={dish.id}
                className="group rounded-3xl bg-white border border-[#053225]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D96C06]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="bg-[#053225]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <MapPin className="h-3 w-3 text-[#BDBF09]" />
                        {dish.department}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-white/95 backdrop-blur-md text-[#053225] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Star className="h-3.5 w-3.5 fill-[#D96C06] text-[#D96C06]" />
                        {dish.rating}
                      </span>
                    </div>

                    {/* Collected indicator overlay tag */}
                    {isCollected && (
                      <div className="absolute bottom-3 left-3 bg-[#053225] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                        <Check className="h-3.5 w-3.5 text-[#BDBF09]" />
                        Coleccionado en tu pasaporte
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#F5EFED] text-[#053225]/80"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-black text-[#053225] group-hover:text-[#D96C06] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#053225]/75 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Cultural note box */}
                    <div className="mt-4 rounded-2xl bg-[#2292A4]/10 p-3 border border-[#2292A4]/20 flex items-start gap-2.5">
                      <Info className="h-4 w-4 text-[#2292A4] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-[#053225]/80 italic">
                        {dish.culturalNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-[#053225]/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleCollected(dish.id)}
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                      isCollected
                        ? "bg-[#053225] text-white shadow-sm"
                        : "bg-[#F5EFED] text-[#053225] hover:bg-[#eee4e1] border border-[#e3d5d1]"
                    }`}
                  >
                    {isCollected ? (
                      <>
                        <Check className="h-4 w-4 text-[#BDBF09]" />
                        <span>¡Ya lo probé!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 text-[#D96C06]" />
                        <span>Marcar como probado</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onOpenDownload}
                    className="h-10 w-10 rounded-2xl border border-[#053225]/15 flex items-center justify-center text-[#053225] hover:bg-[#053225] hover:text-white transition-colors"
                    title="Ver en app"
                  >
                    <Utensils className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside dishes section */}
        <div className="mt-14 rounded-3xl bg-[#053225] text-white p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="h-16 w-16 rounded-2xl bg-[#D96C06] flex items-center justify-center shrink-0 text-white shadow-lg">
              <Sparkles className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                ¿Buscás un plato específico de tu ciudad natal?
              </h4>
              <p className="text-sm text-white/80 mt-1 max-w-xl">
                En la aplicación Xiri podés buscar por ingredientes, departamento o ver el mapa en tiempo real de comiderías que lo sirven caliente hoy mismo.
              </p>
            </div>
          </div>

          <Button
            variant="orange"
            size="lg"
            onClick={onOpenDownload}
            className="shrink-0 w-full md:w-auto"
          >
            Descargar Xiri en tu Móvil
          </Button>
        </div>

      </div>
    </section>
  );
}
