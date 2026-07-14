import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-dorado/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-negro-cafe">{item.q}</span>
        <span
          className={`shrink-0 text-xl text-terracota transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-negro-cafe/75 sm:text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            {t("faq.heading")}
          </h2>
          <p className="mt-4 text-negro-cafe/70">
            {t("faq.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div>
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
