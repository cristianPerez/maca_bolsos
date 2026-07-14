import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es.json";
import en from "./locales/en.json";

// Regla de idioma:
//   Navegador en español (es, es-MX, es-ES, …)  -> español
//   Cualquier otro                               -> inglés
// El detector primero respeta la elección guardada (localStorage) y, si no hay,
// usa el idioma del navegador. `load: "languageOnly"` mapea es-MX -> es, en-GB -> en.
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    supportedLngs: ["es", "en"],
    fallbackLng: "en",
    load: "languageOnly",
    nonExplicitSupportedLngs: true,
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "maca_lang",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

// Mantén <html lang> y el título del documento sincronizados con el idioma.
function syncDocumentLang(lng) {
  const base = (lng || "en").split("-")[0];
  document.documentElement.lang = base;
  const title = i18n.t("meta.title");
  if (title) document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", i18n.t("meta.description"));
}

syncDocumentLang(i18n.resolvedLanguage);
i18n.on("languageChanged", syncDocumentLang);

export default i18n;
