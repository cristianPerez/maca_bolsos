import Reveal from "./Reveal.jsx";

const pains = [
  { title: "No se ven profesionales", desc: "Los acabados quedan amateur por más empeño que pongas." },
  { title: "No sabes qué materiales usar", desc: "Cuentas, hilos, herrajes… te pierdes entre opciones y proveedores." },
  { title: "El tejido no queda firme", desc: "Tu bolso se deforma, pierde la forma o se sale el hilo." },
  { title: "No sabes cuánto cobrar", desc: "Regalas tu trabajo o asustas a las clientas con el precio." },
  { title: "Pierdes tiempo probando sin guía", desc: "Tutoriales sueltos de YouTube que saltan los pasos clave." },
];

export default function Pains() {
  return (
    <section className="bg-arena/40 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            Si ya intentaste hacer bolsos… pero no te quedaron como esperabas,
            no eres la única.
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
            La diferencia no es el talento. Es la técnica correcta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
