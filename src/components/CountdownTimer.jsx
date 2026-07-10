import { useCountdown } from "../hooks/useCountdown.js";

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="min-w-[2.4em] rounded-md bg-negro-cafe px-2 py-1 text-center font-serif text-lg font-semibold text-crema sm:text-xl">
        {value}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-negro-cafe/70">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer({ variant = "dark" }) {
  const { hours, minutes, seconds } = useCountdown();

  const separatorColor = variant === "dark" ? "text-crema" : "text-negro-cafe";

  return (
    <div className="flex items-center gap-2">
      <Unit value={hours} label="Hrs" />
      <span className={`pb-4 font-serif text-xl ${separatorColor}`}>:</span>
      <Unit value={minutes} label="Min" />
      <span className={`pb-4 font-serif text-xl ${separatorColor}`}>:</span>
      <Unit value={seconds} label="Seg" />
    </div>
  );
}
