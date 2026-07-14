import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";

const BASE = "https://manoscreadoras.lovable.app/assets";

// Nombres de modelo (propios) e imágenes; la descripción viene de traducciones.
const models = [
  { name: "Rose Crystal", img: `${BASE}/bag-pink-crystal-Bfvk7sAM.png` },
  { name: "Pearl Bow", img: `${BASE}/bag-pearl-bow-BJNYOkqF.png` },
  { name: "Pearl Hobo", img: `${BASE}/bag-pearl-hobo-CnE8Gf-d.png` },
  { name: "Gold Crystal", img: `${BASE}/bag-gold-crystal-BEEnSFAn.png` },
  { name: "Pearl Coin", img: `${BASE}/bag-pearl-coin-boQNDBR1.png` },
  { name: "Champagne Facetado", img: `${BASE}/bag-champagne-facetado-i7fCs5gy.jpg` },
  { name: "Onix Cristal", img: `${BASE}/bag-onix-cristal-Q1dYU0VE.jpg` },
  { name: "Glacier Blue", img: `${BASE}/bag-glacier-blue--LWN4-v5.jpg` },
  { name: "Pearl Royale", img: `${BASE}/bag-pearl-royale-Cy5cVop9.jpg` },
];

export default function Gallery() {
  const { t } = useTranslation();
  const descs = t("gallery.descs", { returnObjects: true });

  return (
    <section className="bg-arena/40 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            {t("gallery.kicker")}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            {t("gallery.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-negro-cafe/75">
            {t("gallery.subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, i) => (
            <Reveal key={model.name} delay={i * 80}>
              <div className="group overflow-hidden rounded-2xl border border-dorado/30 bg-crema shadow-sm transition hover:shadow-xl">
                <div className="aspect-square overflow-hidden bg-arena">
                  <img
                    src={model.img}
                    alt={`${t("gallery.altPrefix")} ${model.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-left">
                  <h3 className="font-serif text-xl font-semibold text-negro-cafe">
                    {model.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-terracota-oscuro/70">
                    {descs[i]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
