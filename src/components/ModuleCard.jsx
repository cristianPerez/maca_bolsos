// Tarjeta maestra reutilizable del carrusel.
// Diseño fijo (badge, campana, subtítulo, pill, bordes, sombra, espaciado).
// Solo varían: imagen, título, subtítulo y la duración/tag cuando exista.
export default function ModuleCard({ image, title, subtitle, tag, duration, desc }) {
  const pill = tag || duration;
  return (
    <div className="mx-auto w-full overflow-hidden rounded-2xl border border-dorado/40 bg-crema shadow-xl">
      {/* Imagen + badge destacado */}
      <div className="relative aspect-[6/5] w-full overflow-hidden bg-negro-cafe">
        <img
          src={image}
          alt={title}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-4"
        />
        <span className="absolute left-1/2 top-3 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-terracota px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-crema shadow-md">
          <span className="text-dorado">✦</span>
          Módulo destacado
          <span className="text-dorado">✦</span>
        </span>
      </div>

      {/* Cuerpo */}
      <div className="px-5 pb-5 pt-4 text-center">
        {/* Icono campana */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="mx-auto h-6 w-6 text-terracota"
          aria-hidden="true"
        >
          <path
            d="M12 3a5 5 0 0 0-5 5c0 4-1.5 5.5-2 6.5h14c-.5-1-2-2.5-2-6.5a5 5 0 0 0-5-5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 18a2 2 0 0 0 4 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-negro-cafe">
          {title}
        </h3>

        {subtitle && (
          <div className="mt-1 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.15em] text-terracota-oscuro">
            <span className="h-px w-5 bg-dorado/60" />
            {subtitle}
            <span className="h-px w-5 bg-dorado/60" />
          </div>
        )}

        {/* Pie: pill (HTML o duración) + descripción */}
        <div className="mt-4 flex items-center justify-between gap-2">
          {pill && (
            <span className="rounded-full bg-negro-cafe px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-crema">
              {pill}
            </span>
          )}
          {desc && (
            <span className="truncate text-left text-[11px] text-negro-cafe/60">
              {desc}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
