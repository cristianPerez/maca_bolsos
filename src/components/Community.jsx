import Reveal from "./Reveal.jsx";

const perks = [
  "Resuelve tus dudas con acompañamiento directo.",
  "Comparte tus avances y recibe feedback de otras alumnas.",
  "Inspírate con nuevos diseños cada semana.",
  "Conecta con mujeres que también están emprendiendo.",
];

export default function Community() {
  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-verde-oliva/10 p-8 sm:grid-cols-2 sm:p-12">
          <Reveal>
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-2xl border border-verde-oliva/40">
              <img
                src="https://manoscreadoras.lovable.app/assets/community-icon-BSSpcx-y.jpg"
                alt="Comunidad privada de alumnas"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-verde-oliva">
              Comunidad
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
              Comunidad privada donde alumnas comparten avances y consiguen sus
              primeras clientas
            </h2>
            <p className="mt-4 text-negro-cafe/75">
              Serás parte de una comunidad privada donde mujeres de todo el
              mundo comparten sus creaciones, se apoyan y crecen juntas
              creando bolsos con estilo boutique.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="flex flex-col gap-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-negro-cafe/85">
                  <span className="mt-0.5 text-verde-oliva">●</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
