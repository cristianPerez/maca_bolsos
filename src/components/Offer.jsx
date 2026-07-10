import Reveal from "./Reveal.jsx";
import CountdownTimer from "./CountdownTimer.jsx";
import { CHECKOUT_URL } from "../constants.js";

const bonuses = [
  { label: "Curso de bolsos en cuentas + malla plástica", price: "€97" },
  { label: "50 patrones exclusivos descargables", price: "€45" },
  { label: "Directorio de proveedores premium", price: "€29" },
  { label: "Plantilla de costos y precios", price: "€19" },
  { label: "Método ventas boutique", price: "€39" },
  { label: "Comunidad privada de alumnas", price: "€25" },
];

export default function Offer() {
  return (
    <section id="oferta" className="bg-negro-cafe px-4 py-16 text-crema sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-dorado">
            Acceso digital inmediato · Garantía 7 días
          </span>
          <p className="mt-3 text-terracota">★★★★★ 4.9/5 · +1.200 alumnas activas</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            Programa Completo · Bolsos de Lujo desde Casa
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-crema/75">
            Más de 50 tutoriales paso a paso, patrones exclusivos y la
            metodología boutique para que crees y vendas tu primera colección.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-3xl border border-dorado/30 bg-negro-cafe/60 p-6 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-end gap-3">
                <span className="text-xl text-crema/50 line-through">$55</span>
                <span className="font-serif text-5xl font-bold text-terracota sm:text-6xl">
                  $25
                </span>
              </div>
              <span className="mt-2 inline-block rounded-full bg-terracota px-4 py-1 text-xs font-semibold uppercase tracking-widest">
                −55%
              </span>
              <p className="mt-3 text-sm text-crema/70">
                Pago único · Acceso de por vida
              </p>
            </div>

            <p className="mt-8 text-center text-sm font-semibold uppercase tracking-widest text-dorado">
              Compra hoy y obtén gratis:
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {bonuses.map((bonus) => (
                <div key={bonus.label} className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-dorado">✓</span>
                    <p className="text-sm text-crema/90 sm:text-base">{bonus.label}</p>
                  </div>
                  <p className="shrink-0 text-sm text-crema/70">
                    <span className="line-through">{bonus.price}</span>{" "}
                    <span className="font-semibold text-verde-oliva">GRATIS</span>
                  </p>
                </div>
              ))}
            </div>

            <a
              href={CHECKOUT_URL}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-terracota px-8 py-4 text-center font-semibold uppercase tracking-wide text-crema shadow-lg shadow-terracota/30 transition hover:bg-terracota-oscuro"
            >
              Quiero acceder ahora <span aria-hidden="true">→</span>
            </a>

            <div className="mt-5 flex flex-col items-center gap-2 text-center text-xs text-crema/60">
              <p>🔒 Pago seguro vía Hotmart · 12 personas están finalizando su compra…</p>
              <p>★ Garantía total: si en 7 días no es para ti, Hotmart te devuelve el 100% de tu inversión.</p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-2 border-t border-dorado/20 pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-dorado">
                ⏳ El descuento ya está finalizando
              </p>
              <CountdownTimer variant="dark" />
              <p className="mt-1 text-xs text-crema/60">
                Cuando el contador llegue a cero, el precio vuelve a $55.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
