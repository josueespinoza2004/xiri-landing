/**
 * Configuración central de descargas y enlaces externos de la landing.
 *
 * El APK se aloja en GitHub Releases bajo el tag "latest", por lo que esta
 * URL siempre apunta a la última versión publicada sin necesidad de editar
 * el código al sacar un build nuevo (solo se actualiza el asset del release).
 */
export const APK_DOWNLOAD_URL =
  "https://github.com/josueespinoza2004/xiri-frontend/releases/download/latest/Xiri.apk";

/** Nombre con el que se guardará el archivo al descargar. */
export const APK_FILE_NAME = "Xiri.apk";

/** Versión pública actual, mostrada en la UI de descarga. */
export const APP_VERSION = "1.0.0";

/**
 * Dispara la descarga del APK creando un enlace temporal. Mantener la lógica
 * aquí evita duplicarla entre la sección y el modal de descarga.
 */
export function downloadApk() {
  const link = document.createElement("a");
  link.href = APK_DOWNLOAD_URL;
  link.setAttribute("download", APK_FILE_NAME);
  link.setAttribute("rel", "noopener noreferrer");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
