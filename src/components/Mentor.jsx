import Reveal from "./Reveal.jsx";
import { CHECKOUT_URL } from "../constants.js";

const badges = [
  { label: "Paso a paso", tag: "MÉTODO" },
  { label: "Boutique", tag: "ESTILO" },
  { label: "Desde cero", tag: "ACCESO" },
];

export default function Mentor() {
  return (
    <section className="bg-arena/40 px-4 py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-center">
        <Reveal className="w-full max-w-xs shrink-0 sm:w-72">
          <div className="aspect-square overflow-hidden rounded-full border-4 border-dorado/40 shadow-lg">
            <img
              src="/img/mentora-maca.jpg"
              alt="Mentora de MACA"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="text-center sm:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            Conoce a tu mentora
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            Maca Perez
          </h2>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-negro-cafe/60">
            Especialista en bolsos artesanales de lujo
          </p>
          <p className="mt-4 leading-relaxed text-negro-cafe/80">
            Desde hace más de 5 años acompaño a mujeres de diferentes países a
            aprender técnicas claras para crear bolsos en cuentas y malla
            plástica con acabados elegantes y estilo boutique.
          </p>
          <p className="mt-3 leading-relaxed text-negro-cafe/80">
            Mi metodología está diseñada para que puedas aprender paso a paso,
            desarrollar piezas sofisticadas y transformar tu creatividad en una
            colección con identidad propia.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 sm:justify-start">
            {badges.map((b) => (
              <div key={b.tag} className="text-center sm:text-left">
                <p className="font-serif text-lg font-semibold text-terracota-oscuro">
                  {b.label}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-negro-cafe/50">
                  {b.tag}
                </p>
              </div>
            ))}
          </div>

          <a
            href={CHECKOUT_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracota px-8 py-4 font-semibold uppercase tracking-wide text-crema shadow-lg shadow-terracota/30 transition hover:bg-terracota-oscuro"
          >
            Inscribirme ahora <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
