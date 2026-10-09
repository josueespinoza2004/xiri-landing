"use client";

import * as React from "react";
import { DownloadModal } from "./download-modal";

interface DownloadContextValue {
  openDownload: () => void;
  closeDownload: () => void;
}

const DownloadContext = React.createContext<DownloadContextValue | null>(null);

/**
 * Provee el estado del modal de descarga a toda la landing. Al vivir en un
 * Client Component, permite que las secciones sean Server Components (que
 * hacen el fetch de datos) y que cualquier botón de descarga abra el modal
 * mediante el hook useDownload().
 */
export function DownloadProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const value = React.useMemo<DownloadContextValue>(
    () => ({
      openDownload: () => setIsOpen(true),
      closeDownload: () => setIsOpen(false),
    }),
    [],
  );

  return (
    <DownloadContext.Provider value={value}>
      {children}
      <DownloadModal isOpen={isOpen} onClose={value.closeDownload} />
    </DownloadContext.Provider>
  );
}

export function useDownload(): DownloadContextValue {
  const ctx = React.useContext(DownloadContext);
  if (!ctx) {
    throw new Error("useDownload debe usarse dentro de <DownloadProvider>");
  }
  return ctx;
}
