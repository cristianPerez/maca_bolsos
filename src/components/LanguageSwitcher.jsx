import { useTranslation } from "react-i18next";

// Conmutador ES/EN. Guarda la elección en localStorage (vía detector) y
// actualiza toda la interfaz al instante.
export default function LanguageSwitcher({ className = "" }) {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || "en").split("-")[0];

  const langs = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ];

  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-full border border-dorado/50 text-xs font-semibold ${className}`}
      role="group"
      aria-label={t("switcher.label")}
    >
      {langs.map((lng) => {
        const active = current === lng.code;
        return (
          <button
            key={lng.code}
            type="button"
            onClick={() => i18n.changeLanguage(lng.code)}
            aria-pressed={active}
            className={`px-2.5 py-1 transition ${
              active
                ? "bg-dorado text-negro-cafe"
                : "text-crema/70 hover:text-crema"
            }`}
          >
            {lng.label}
          </button>
        );
      })}
    </div>
  );
}
