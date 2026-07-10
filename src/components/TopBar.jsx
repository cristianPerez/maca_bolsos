import { useCountdown } from "../hooks/useCountdown.js";

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="min-w-[2.2em] rounded-md border border-dorado/50 bg-negro-cafe/60 px-2 py-1 text-center font-serif text-lg font-bold text-dorado shadow-[0_0_12px_rgba(201,162,75,0.35)] sm:text-2xl">
        {value}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-widest text-crema/60 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

export default function TopBar() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div className="sticky top-0 z-50 w-full border-b border-dorado/40 bg-gradient-to-r from-negro-cafe via-[#3a241a] to-negro-cafe px-4 py-3 text-crema shadow-[0_2px_20px_rgba(201,162,75,0.25)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-2 text-center text-xs font-medium sm:text-left sm:text-sm">
          <span className="animate-pulse text-base sm:text-lg">⚠️</span>
          <span>
            <span className="font-bold uppercase tracking-wide text-dorado">
              La oferta está finalizando
            </span>{" "}
            — cuando el contador llegue a cero, el precio vuelve a{" "}
            <span className="font-bold text-crema">$55</span>.
          </span>
        </p>
        <div className="flex items-center gap-2">
          <Unit value={hours} label="Hrs" />
          <span className="pb-4 font-serif text-xl text-dorado">:</span>
          <Unit value={minutes} label="Min" />
          <span className="pb-4 font-serif text-xl text-dorado">:</span>
          <Unit value={seconds} label="Seg" />
        </div>
      </div>
    </div>
  );
}
