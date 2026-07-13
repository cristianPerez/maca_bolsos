import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import ModuleCard from "./ModuleCard.jsx";
import { CHECKOUT_URL } from "../constants.js";

const badges = [
  { icon: "★★★★★", label: "+1.200 alumnas" },
  { icon: "🛡", label: "Garantía 7 días" },
  { icon: "♾", label: "Acceso de por vida" },
];

// Imágenes reales de bolsos (mismas del sitio) para los tutoriales.
const BAG = "https://manoscreadoras.lovable.app/assets";

// Cada slide del carrusel usa la misma tarjeta maestra (ModuleCard).
// Solo cambia imagen, título, subtítulo y tag/duración — el diseño no cambia.
const slides = [
  { image: "/img/curso/cards/empieza.jpg", title: "Empieza Aquí", subtitle: "Start here", tag: "Inicio", desc: "Bienvenida y primeros pasos" },
  { image: "/img/curso/cards/comunidad.jpg", title: "Únete a la comunidad", subtitle: "Join our community", tag: "Comunidad", desc: "Comunidad privada de alumnas" },
  { image: `${BAG}/bag-pearl-hobo-CnE8Gf-d.png`, title: "Tutorial 1", subtitle: "Malla plástica y cuentas", duration: "24:18" },
  { image: `${BAG}/bag-glacier-blue--LWN4-v5.jpg`, title: "Tutorial 2", subtitle: "Cuentas azul hielo · asa rígida", duration: "38:52" },
  { image: `${BAG}/bag-pink-crystal-Bfvk7sAM.png`, title: "Tutorial 3", subtitle: "Cristal rosado · cadena dorada", duration: "45:07" },
  { image: `${BAG}/bag-pearl-bow-BJNYOkqF.png`, title: "Tutorial 4", subtitle: "Perlas marfil · lazo de seda", duration: "32:26" },
  { image: `${BAG}/bag-onix-cristal-Q1dYU0VE.jpg`, title: "Tutorial 5", subtitle: "Cuentas negras · estilo noche", duration: "29:33" },
  { image: `${BAG}/bag-gold-crystal-BEEnSFAn.png`, title: "Tutorial 6", subtitle: "Cristal dorado · clutch", duration: "51:20" },
  { image: `${BAG}/bag-pearl-royale-Cy5cVop9.jpg`, title: "Tutorial 7", subtitle: "Perlas blancas · bordado a mano", duration: "22:45" },
  { image: `${BAG}/bag-champagne-facetado-i7fCs5gy.jpg`, title: "Tutorial 8", subtitle: "Cristal champagne · cadena dorada", duration: "01:26:29" },
  { image: `${BAG}/bag-pearl-coin-boQNDBR1.png`, title: "Así colocas un herraje", subtitle: "Cierre y herraje profesional", duration: "35:37" },
  { image: "/img/curso/cards/patrones.jpg", title: "Patrones de bolsos", subtitle: "En cuentas · descargables", tag: "Descargable", desc: "+50 diseños listos para usar" },
];

export default function CourseCarousel() {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0); // desplazamiento en px durante el arrastre
  const [vw, setVw] = useState(0); // ancho del viewport del carrusel
  const containerRef = useRef(null);
  const pointer = useRef({ down: false, startX: 0, id: null });
  const moved = useRef(false); // true si hubo arrastre (para no navegar al soltar)

  const count = slides.length;
  const clamp = (i) => Math.max(0, Math.min(count - 1, i));
  const goTo = (i) => setIndex(clamp(i));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Mide el ancho del viewport (y lo mantiene actualizado al redimensionar).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setVw(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Layout tipo Instagram: tarjeta grande al centro + vistazo de las vecinas.
  const ratio = vw && vw < 640 ? 0.86 : 0.62;
  const cardWidth = vw ? Math.min(vw * ratio, 560) : 320;
  const centerOffset = vw ? (vw - cardWidth) / 2 : 0;

  const onPointerDown = (e) => {
    pointer.current = { down: true, startX: e.clientX, id: e.pointerId };
    moved.current = false;
    // Sin setPointerCapture: capturar el puntero en el contenedor hace que el
    // navegador reasigne el evento "click" al contenedor y nunca llegue al <a>,
    // por lo que en escritorio el enlace no navegaba. El arrastre sigue
    // funcionando (táctil por captura implícita; ratón mientras el cursor esté
    // dentro, y onPointerLeave cierra el arrastre si sale).
  };

  const onPointerMove = (e) => {
    if (!pointer.current.down) return;
    const delta = e.clientX - pointer.current.startX;
    if (Math.abs(delta) > 6) moved.current = true;
    setDrag(delta);
  };

  const endDrag = () => {
    if (!pointer.current.down) return;
    const threshold = Math.min(80, cardWidth * 0.18);
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

  const trackStyle = {
    transform: `translateX(${centerOffset - index * cardWidth + drag}px)`,
    transition: pointer.current.down
      ? "none"
      : "transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1)",
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
          <div className="mx-auto mt-10 w-full">
            {/* Ventana del carrusel: tarjeta central grande + vistazo de las vecinas, sin marco */}
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
              className="relative w-full cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
            >
              {/* Pista deslizable */}
              <div className="flex items-center" style={trackStyle}>
                {slides.map((slide, i) => (
                  <div
                    key={slide.image}
                    className={`flex-shrink-0 px-3 py-2 transition-opacity duration-300 ${
                      i === index ? "opacity-100" : "opacity-50"
                    }`}
                    style={{ width: cardWidth }}
                    aria-hidden={i !== index}
                  >
                    {/* Toda la tarjeta enlaza al pago; si hubo arrastre no navega.
                        draggable={false} evita que el navegador inicie su propio
                        arrastre nativo del enlace, que cancelaba el swipe. */}
                    <a
                      href={CHECKOUT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ir al curso — ${slide.title}`}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      onClick={(e) => {
                        if (moved.current) e.preventDefault();
                      }}
                      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-2"
                    >
                      <ModuleCard {...slide} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Flecha anterior */}
              {index > 0 && (
                <button
                  type="button"
                  aria-label="Imagen anterior"
                  onClick={prev}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-negro-cafe/60 text-xl text-crema shadow-lg backdrop-blur transition hover:bg-negro-cafe/80 sm:left-4"
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
                  onPointerDown={(e) => e.stopPropagation()}
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-negro-cafe/60 text-xl text-crema shadow-lg backdrop-blur transition hover:bg-negro-cafe/80 sm:right-4"
                >
                  ›
                </button>
              )}
            </div>

            {/* Puntos de navegación (debajo, estilo Instagram) */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.image}
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
