"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsBar } from "@/components/stats-bar";
import { FeaturesGrid } from "@/components/features-grid";
import { DishesShowcase } from "@/components/dishes-showcase";
import { RoutesSection } from "@/components/routes-section";
import { BusinessSection } from "@/components/business-section";
import { DownloadSection } from "@/components/download-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { DownloadModal } from "@/components/download-modal";

export default function LandingPage() {
  const [downloadModalOpen, setDownloadModalOpen] = React.useState(false);

  const openDownload = () => setDownloadModalOpen(true);
  const closeDownload = () => setDownloadModalOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F5EFED]">
      {/* Interactive Download Modal accessible anywhere */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={closeDownload}
      />

      {/* Navigation Header */}
      <Navbar onOpenDownload={openDownload} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenDownload={openDownload} />
        <StatsBar />
        <div id="que-es">
          <FeaturesGrid />
        </div>
        <DishesShowcase onOpenDownload={openDownload} />
        <RoutesSection onOpenDownload={openDownload} />
        <BusinessSection onOpenDownload={openDownload} />
        <DownloadSection onOpenDownload={openDownload} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenDownload={openDownload} />
    </div>
  );
}
