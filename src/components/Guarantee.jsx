import Reveal from "./Reveal.jsx";
import { CHECKOUT_URL } from "../constants.js";

export default function Guarantee() {
  return (
    <section className="bg-arena/40 px-4 py-16 sm:py-24">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-dorado shadow-md">
          <img
            src="https://manoscreadoras.lovable.app/assets/guarantee-seal-C68Txbw_.jpg"
            alt="7 días de garantía total con Hotmart"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
          7 días de garantía total con Hotmart
        </h2>
        <p className="text-lg font-semibold uppercase tracking-wide text-terracota-oscuro">
          ¡No tienes nada que perder!
        </p>
        <p className="max-w-xl text-negro-cafe/80">
          Accede al programa, revisa cada módulo, explora todos los recursos y
          comprueba por ti misma si es lo que estabas buscando. Si el
          programa no supera tus expectativas, Hotmart te devuelve el 100% de
          tu inversión sin hacer ninguna pregunta.
        </p>
        <a
          href={CHECKOUT_URL}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-terracota px-8 py-4 font-semibold uppercase tracking-wide text-crema shadow-lg shadow-terracota/30 transition hover:bg-terracota-oscuro"
        >
          Acceder con garantía <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </section>
  );
}
