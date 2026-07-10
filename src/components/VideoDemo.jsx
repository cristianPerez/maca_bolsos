import { useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { VIDEO_URL } from "../constants.js";

const badges = [
  { icon: "★★★★★", label: "+1.200 alumnas" },
  { icon: "🛡", label: "Garantía 7 días" },
  { icon: "♾", label: "Acceso de por vida" },
];

export default function VideoDemo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
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
          <div className="relative mx-auto mt-10 aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-3xl border border-dorado/40 bg-negro-cafe shadow-2xl">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              controls={isPlaying}
              playsInline
              className="h-full w-full object-contain"
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <button
                type="button"
                aria-label="Reproducir video"
                onClick={handlePlay}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-negro-cafe/40 text-crema transition hover:bg-negro-cafe/50"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-terracota text-2xl transition hover:scale-105 hover:bg-terracota-oscuro sm:h-20 sm:w-20">
                  ▶
                </span>
                <span className="text-sm text-crema/80">Ver el curso por dentro</span>
              </button>
            )}
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
