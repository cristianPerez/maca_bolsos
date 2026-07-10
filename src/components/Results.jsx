import Reveal from "./Reveal.jsx";

const BASE = "https://manoscreadoras.lovable.app/assets";

const screenshots = [
  { src: `${BASE}/whatsapp-2-CiCuDxsS.jpg`, alt: "Conversación de WhatsApp con alumna 1" },
  { src: `${BASE}/whatsapp-3-DcoGBSYB.jpg`, alt: "Conversación de WhatsApp con alumna 2" },
];

export default function Results() {
  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            Resultados reales
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            Más de 1.200 bolsos creados por alumnas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-negro-cafe/75">
            Mira lo que nuestras alumnas están creando con sus propias manos.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {screenshots.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 120}>
              <div className="overflow-hidden rounded-2xl border border-dorado/30 shadow-lg">
                <img
                  src={shot.src}
                  alt={shot.alt}
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
