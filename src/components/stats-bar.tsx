"use client";

import * as React from "react";
import { Map, UtensilsCrossed, Store, Award } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      icon: Map,
      value: "17",
      label: "Departamentos y Regiones",
      sublabel: "Desde el Pacífico hasta el Caribe",
      color: "text-[#2292A4]",
      bgColor: "bg-[#2292A4]/10",
    },
    {
      icon: UtensilsCrossed,
      value: "150+",
      label: "Comidas Típicas Documentadas",
      sublabel: "Historia, origen y preparación",
      color: "text-[#D96C06]",
      bgColor: "bg-[#D96C06]/10",
    },
    {
      icon: Store,
      value: "250+",
      label: "Fritangas y Locales Verificados",
      sublabel: "Comercio tradicional directo",
      color: "text-[#BDBF09]",
      bgColor: "bg-[#BDBF09]/15",
    },
    {
      icon: Award,
      value: "100%",
      label: "Pasaporte de Experiencias",
      sublabel: "Insignias y retos gastronómicos",
      color: "text-[#053225]",
      bgColor: "bg-[#053225]/10",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white border border-[#053225]/10 p-6 sm:p-8 shadow-xl shadow-[#053225]/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-[#F5EFED]/50 transition-colors"
              >
                <div
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${stat.bgColor} ${stat.color} mb-3`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#053225] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#053225] mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#053225]/60 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
