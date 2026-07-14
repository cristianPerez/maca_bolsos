import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";

const BASE = "https://manoscreadoras.lovable.app/assets";

// TODO: reemplazar estas imágenes (capturas de WhatsApp de manoscreadoras.lovable.app)
// por las capturas/resultados reales definitivos alojados en nuestro propio dominio.
const screenshots = [
  { src: `${BASE}/whatsapp-2-CiCuDxsS.jpg`, altKey: "results.alt1" },
  { src: `${BASE}/whatsapp-3-DcoGBSYB.jpg`, altKey: "results.alt2" },
];

export default function Results() {
  const { t } = useTranslation();

  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            {t("results.kicker")}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            {t("results.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-negro-cafe/75">
            {t("results.subtitle")}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {screenshots.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 120}>
              <div className="overflow-hidden rounded-2xl border border-dorado/30 shadow-lg">
                <img
                  src={shot.src}
                  alt={t(shot.altKey)}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
