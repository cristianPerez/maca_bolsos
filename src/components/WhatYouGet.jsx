import Reveal from "./Reveal.jsx";

const items = [
  { n: "01", title: "Bolsos en cuentas", desc: "Técnica boutique para tejer bolsos en cuentas: bases, tensión y acabados profesionales." },
  { n: "02", title: "Bolsos en malla plástica", desc: "Estructura, refuerzos y ensamblaje de bolsos en malla plástica con estilo de lujo." },
  { n: "03", title: "50 patrones exclusivos", desc: "Más de 50 diseños descargables listos para aplicar en tus propias creaciones." },
  { n: "04", title: "Directorio de proveedores", desc: "Dónde comprar cuentas, herrajes y materiales premium al mejor precio." },
  { n: "05", title: "Plantilla de costos y precios", desc: "Calcula el precio justo de tu bolso y deja de regalar tu trabajo." },
  { n: "06", title: "Manual de marketing digital", desc: "Cómo fotografiar, mostrar y vender tus bolsos por redes sociales." },
];

export default function WhatYouGet() {
  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            El programa
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            Todo lo que recibes · +50 tutoriales
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-dorado/30 shadow-lg">
            <img
              src="/img/stack-mockup.jpg"
              alt="Todo lo que recibes en el programa: curso de bolsos en cuentas, malla plástica, patrones, plantillas y bonos"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-dorado/30 bg-dorado/30 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={i * 70}>
              <div className="h-full bg-crema p-7 transition hover:bg-arena/40">
                <span className="font-serif text-3xl font-semibold text-terracota/50">
                  {item.n}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-negro-cafe">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-negro-cafe/70">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
