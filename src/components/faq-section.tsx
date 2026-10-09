"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Badge } from "./ui/badge";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "¿Qué es Xiri y cuál es su objetivo?",
    answer:
      "Xiri es una plataforma y aplicación móvil comunitaria diseñada para preservar, difundir y disfrutar la riqueza gastronómica tradicional de Nicaragua. Permite a locales y turistas descubrir platillos típicos por departamento, seguir rutas gastronómicas y encontrar comiderías tradicionales verificadas.",
  },
  {
    question: "¿La descarga y uso de la aplicación tienen algún costo?",
    answer:
      "No, Xiri es 100% gratuita tanto para los comensales y exploradores como para los pequeños negocios que desean registrarse y formar parte de la comunidad gastronómica.",
  },
  {
    question: "¿Cómo funciona el Pasaporte y Colección de experiencias?",
    answer:
      "Cada vez que probás un platillo típico tradicional (como el Vigorón, Baho, Nacatamal o Rondón), podés marcarlo en tu aplicación como probado. La app registra tu avance departamental, calcula tus estadísticas de degustación y te otorga medallas e insignias culturales.",
  },
  {
    question: "¿Tengo una comidería o fritanga, cómo puedo verificar mi negocio?",
    answer:
      "Es muy sencillo: descargá la aplicación, creá tu cuenta y dentro de tu perfil seleccioná la opción 'Solicitar verificación como comerciante'. Nuestro equipo revisará los datos básicos de tu negocio y te otorgará el sello verificado para que aparezcas en el mapa y rutas oficiales.",
  },
  {
    question: "¿Cómo instalo el archivo APK directo en Android?",
    answer:
      "Al presionar 'Descargar APK', tu navegador descargará el paquete instalador oficial. Abrí la descarga en tu celular; si el sistema te lo solicita, autorizá 'Instalar aplicaciones de fuentes desconocidas' para tu navegador y completá la instalación en menos de 1 minuto.",
  },
  {
    question: "¿La app cubre todos los departamentos de Nicaragua?",
    answer:
      "Sí, Xiri cuenta con catálogo y platos autóctonos documentados para los 15 departamentos y las 2 regiones autónomas (Costa Caribe Norte y Costa Caribe Sur).",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5EFED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="teal" className="mb-3 uppercase tracking-wider text-xs">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#053225] tracking-tight">
            Todo lo que querés saber sobre Xiri
          </h2>
          <p className="mt-3 text-base text-[#053225]/70">
            Respuestas claras para exploradores gastronómicos y dueños de comiderías.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-3xl border border-[#053225]/10 bg-white transition-all overflow-hidden shadow-xs hover:border-[#053225]/20"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-[#053225] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5EFED] text-[#053225] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#053225] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#053225]/75 leading-relaxed border-t border-[#053225]/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
