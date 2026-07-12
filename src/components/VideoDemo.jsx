import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";

const badges = [
  { icon: "★★★★★", label: "+1.200 alumnas" },
  { icon: "🛡", label: "Garantía 7 días" },
  { icon: "♾", label: "Acceso de por vida" },
];

// Imágenes del carrusel, en el mismo orden en que fueron enviadas.
const slides = [
  { src: "/img/curso/1.jpeg", alt: "La estructura del bolso — módulo de inicio" },
  { src: "/img/curso/2.jpeg", alt: "Tutoriales 1 al 5 del curso de bolsos" },
  { src: "/img/curso/3.jpeg", alt: "Tutoriales 6 al 10 del curso de bolsos" },
];

export default function VideoDemo() {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0); // desplazamiento en px durante el arrastre
  const containerRef = useRef(null);
  const pointer = useRef({ down: false, startX: 0, id: null });

  const count = slides.length;
  const clamp = (i) => Math.max(0, Math.min(count - 1, i));
  const goTo = (i) => setIndex(clamp(i));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onPointerDown = (e) => {
    pointer.current = { down: true, startX: e.clientX, id: e.pointerId };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!pointer.current.down) return;
    setDrag(e.clientX - pointer.current.startX);
  };

  const endDrag = () => {
    if (!pointer.current.down) return;
    const width = containerRef.current?.offsetWidth || 1;
    const threshold = Math.min(80, width * 0.18);
    if (drag <= -threshold) goTo(index + 1);
    else if (drag >= threshold) goTo(index - 1);
    pointer.current.down = false;
    setDrag(0);
  };

  // Navegación con teclado cuando el carrusel tiene foco.
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // Corrige el índice si cambiara la cantidad de imágenes.
  useEffect(() => {
    setIndex((i) => clamp(i));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const width = containerRef.current?.offsetWidth || 1;
  const dragPercent = (drag / width) * 100;
  const trackStyle = {
    transform: `translateX(calc(${-index * 100}% + ${dragPercent}%))`,
    transition: pointer.current.down ? "none" : "transform 0.4s ease",
  };

  return (
    <section id="curso-por-dentro" className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            Así se ve nuestro curso por dentro
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-xl text-negro-cafe/75">
            Un vistazo rápido a las clases, los materiales y la comunidad que te
            acompañará en cada punto y cada nudo.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-10 w-full max-w-[420px]">
            {/* Ventana del carrusel: una imagen a la vez, sin recorte ni marco */}
            <div
              ref={containerRef}
              role="group"
              aria-roledescription="carrusel"
              aria-label="Vistazo al curso por dentro"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onPointerLeave={endDrag}
              className="relative aspect-[3/4] w-full cursor-grab touch-pan-y select-none overflow-hidden rounded-2xl active:cursor-grabbing"
            >
              {/* Pista deslizable */}
              <div className="flex h-full w-full" style={trackStyle}>
                {slides.map((slide) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    draggable={false}
                    className="h-full w-full flex-shrink-0 object-contain"
                  />
                ))}
              </div>

              {/* Flecha anterior */}
              {index > 0 && (
                <button
                  type="button"
                  aria-label="Imagen anterior"
                  onClick={prev}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-negro-cafe/55 text-lg text-crema backdrop-blur transition hover:bg-negro-cafe/75"
                >
                  ‹
                </button>
              )}

              {/* Flecha siguiente */}
              {index < count - 1 && (
                <button
                  type="button"
                  aria-label="Imagen siguiente"
                  onClick={next}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-negro-cafe/55 text-lg text-crema backdrop-blur transition hover:bg-negro-cafe/75"
                >
                  ›
                </button>
              )}
            </div>

            {/* Puntos de navegación (debajo, estilo Instagram) */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Ir a la imagen ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-terracota"
                      : "w-2 bg-negro-cafe/25 hover:bg-negro-cafe/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full bg-arena/60 px-4 py-2 text-sm font-medium text-terracota-oscuro"
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
