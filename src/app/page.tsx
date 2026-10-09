import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { DishesShowcase } from "@/components/dishes-showcase";
import { RoutesSection } from "@/components/routes-section";
import { BusinessSection } from "@/components/business-section";
import { DownloadSection } from "@/components/download-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { DownloadProvider } from "@/components/download-provider";
import { getLandingData } from "@/lib/api";

export default async function LandingPage() {
  const { foods, routes } = await getLandingData();

  return (
    <DownloadProvider>
      <div className="relative min-h-screen flex flex-col bg-[#F5EFED]">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection />
          <div id="que-es">
            <FeaturesGrid />
          </div>
          <DishesShowcase foods={foods} />
          <RoutesSection routes={routes} />
          <BusinessSection />
          <DownloadSection />
          <FaqSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </DownloadProvider>
  );
}
