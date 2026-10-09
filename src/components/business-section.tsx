import {
  Store,
  CheckCircle2,
  Users,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "./ui/badge";

export function BusinessSection() {
  return (
    <section id="negocios" className="py-20 lg:py-28 bg-[#F5EFED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[36px] bg-white border border-[#053225]/10 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle gradient highlights */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#D96C06]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#2292A4]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7">
              <Badge variant="orange" className="mb-4 uppercase tracking-wider text-xs">
                Para Dueños de Comiderías & Fritangas
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#053225] tracking-tight leading-tight">
                ¿Tenés un negocio de comida típica? Verificate en Xiri gratis.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#053225]/75 leading-relaxed">
                Queremos que los comensales encuentren tu sazón. En Xiri no cobramos comisiones por pedido ni intermediamos en tu relación con tus clientes. Unite al directorio verificado de la gastronomía nacional.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2292A4]/15 text-[#2292A4]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#053225]">Aparecé en Rutas Oficiales</h4>
                    <p className="text-xs text-[#053225]/70 mt-0.5">Turistas y locales pasarán directamente por tu mesa.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D96C06]/15 text-[#D96C06]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#053225]">Insignia de Negocio Verificado</h4>
                    <p className="text-xs text-[#053225]/70 mt-0.5">Mayor confianza ante comensales y turistas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#BDBF09]/20 text-[#6f7004]">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#053225]">Gestioná tu Menú en la App</h4>
                    <p className="text-xs text-[#053225]/70 mt-0.5">Actualizá precios, platillos y horarios desde tu móvil.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#053225]/10 text-[#053225]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#053225]">Reseñas de Clientes Reales</h4>
                    <p className="text-xs text-[#053225]/70 mt-0.5">Opiniones transparentes sin cobros ocultos.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#F5EFED] border border-[#053225]/10 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#053225] text-white">
                  <Store className="h-5 w-5" />
                </div>
                <span className="text-xs sm:text-sm text-[#053225]/75 font-medium">
                  La verificación de tu negocio se solicita desde la sección de perfil
                  dentro de la app móvil, de forma rápida y gratuita.
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#053225] text-white p-7 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#BDBF09]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Perfil de Comercio Verificado
                    </span>
                  </div>
                  <Badge variant="olive" className="text-[10px] bg-[#BDBF09]/20 text-[#d6d81e]">
                    Activo
                  </Badge>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-[#D96C06] text-white flex items-center justify-center font-black text-lg">
                      FT
                    </div>
                    <div>
                      <h4 className="font-black text-base text-white">Fritanga Doña Tania</h4>
                      <p className="text-xs text-white/70">Managua • Barrio Campo Bruce</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-3.5 space-y-2 text-xs">
                    <div className="flex justify-between text-white/80">
                      <span>Especialidad:</span>
                      <strong className="text-white">Carne Asada con Tajadas</strong>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Horario de atención:</span>
                      <strong className="text-white">5:00 PM - 11:30 PM</strong>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Calificación promedio:</span>
                      <strong className="text-[#BDBF09]">★ 4.9 (340 opiniones)</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#2292A4] bg-white/5 p-2.5 rounded-xl border border-white/10">
                    <Sparkles className="h-4 w-4 shrink-0" />
                    <span>Incluido en la "Ruta de la Fritanga Nocturna"</span>
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
