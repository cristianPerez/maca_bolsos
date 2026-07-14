import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";

export default function Pains() {
  const { t } = useTranslation();
  const pains = t("pains.items", { returnObjects: true });

  return (
    <section className="bg-arena/40 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            {t("pains.heading")}
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 text-left">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 80}>
              <div className="flex items-start gap-3 rounded-xl bg-crema px-5 py-4 shadow-sm">
                <span className="mt-0.5 text-lg text-terracota">✦</span>
                <div>
                  <p className="font-semibold text-negro-cafe">{pain.title}</p>
                  <p className="mt-0.5 text-sm text-negro-cafe/70">{pain.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={pains.length * 80 + 100}>
          <p className="mt-10 font-serif text-2xl font-semibold text-terracota-oscuro sm:text-3xl">
            {t("pains.closing")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
