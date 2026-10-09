import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiri.app"),
  title: "Xiri - Explorá la Gastronomía de Nicaragua",
  description:
    "Descubrí comidas típicas por departamento, seguí rutas gastronómicas con negocios locales verificados y coleccioná tus experiencias culinarias en tu móvil.",
  keywords: [
    "Xiri",
    "Gastronomía Nicaragua",
    "Comida típica nica",
    "Fritangas",
    "Vigorón",
    "Nacatamal",
    "Quesillos",
    "Rutas gastronómicas Nicaragua",
    "Comiderías",
    "App gastronómica",
  ],
  authors: [{ name: "Xiri Team" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/icon.png",
  },
  openGraph: {
    title: "Xiri - La Guía Gastronómica de Nicaragua",
    description:
      "Explorá comidas típicas, rutas con paradas recomendadas y comiderías tradicionales verificadas en Nicaragua.",
    images: ["/images/logo.png"],
    locale: "es_NI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#053225" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F5EFED] text-[#053225] antialiased selection:bg-[#D96C06] selection:text-white">
        {children}
      </body>
    </html>
  );
}
