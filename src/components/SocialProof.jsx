import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Compradoras que se muestran en el popup (nombre, clave de país, bandera).
// El nombre del país se traduce vía socialProof.countries.<key>.
const BUYERS = [
  { name: "Alejandra", countryKey: "mexico", flag: "🇲🇽" },
  { name: "Valentina", countryKey: "colombia", flag: "🇨🇴" },
  { name: "Sofía", countryKey: "argentina", flag: "🇦🇷" },
  { name: "Camila", countryKey: "chile", flag: "🇨🇱" },
  { name: "Isabella", countryKey: "peru", flag: "🇵🇪" },
  { name: "Mariana", countryKey: "spain", flag: "🇪🇸" },
  { name: "Daniela", countryKey: "ecuador", flag: "🇪🇨" },
  { name: "Gabriela", countryKey: "mexico", flag: "🇲🇽" },
  { name: "Lucía", countryKey: "uruguay", flag: "🇺🇾" },
  { name: "Fernanda", countryKey: "mexico", flag: "🇲🇽" },
];

const VISIBLE_MS = 27000; // tiempo visible
const GAP_MS = 3000; // pausa entre popups (visible + pausa = nuevo popup cada 30 s)
const FIRST_DELAY_MS = 4000; // espera inicial tras cargar la página

export default function SocialProof() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [minutes, setMinutes] = useState(7);

  useEffect(() => {
    let timers = [];

    const show = () => {
      setMinutes(Math.floor(Math.random() * 12) + 2); // "hace 2–13 min"
      setVisible(true);
      timers.push(
        setTimeout(() => {
          setVisible(false);
          timers.push(
            setTimeout(() => {
              setIndex((i) => (i + 1) % BUYERS.length);
              show();
            }, GAP_MS)
          );
        }, VISIBLE_MS)
      );
    };

    timers.push(setTimeout(show, FIRST_DELAY_MS));
    return () => timers.forEach(clearTimeout);
  }, []);

  const buyer = BUYERS[index];

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-dorado/40 bg-negro-cafe/95 px-4 py-3 shadow-2xl backdrop-blur-sm">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/40 text-2xl">
          {buyer.flag}
        </div>
        <div className="pr-1 leading-tight">
          <p className="text-[15px] text-crema">
            <span className="font-semibold">{buyer.name}</span> {t("socialProof.from")}{" "}
            {t(`socialProof.countries.${buyer.countryKey}`)}
          </p>
          <p className="text-sm text-arena/80">
            {t("socialProof.bought")} ·{" "}
            <span className="text-dorado">{t("socialProof.ago", { min: minutes })}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
