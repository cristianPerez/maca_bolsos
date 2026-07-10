import Reveal from "./Reveal.jsx";

const BASE = "https://manoscreadoras.lovable.app/assets";

const models = [
  { name: "Rose Crystal", img: `${BASE}/bag-pink-crystal-Bfvk7sAM.png`, desc: "CRISTAL ROSADO · CADENA DORADA" },
  { name: "Pearl Bow", img: `${BASE}/bag-pearl-bow-BJNYOkqF.png`, desc: "PERLAS MARFIL · LAZO DE SEDA" },
  { name: "Pearl Hobo", img: `${BASE}/bag-pearl-hobo-CnE8Gf-d.png`, desc: "PERLAS BLANCAS · ASA DE PERLAS XL" },
  { name: "Gold Crystal", img: `${BASE}/bag-gold-crystal-BEEnSFAn.png`, desc: "CRISTAL DORADO TORNASOL · CLUTCH" },
  { name: "Pearl Coin", img: `${BASE}/bag-pearl-coin-boQNDBR1.png`, desc: "MONEDERO DE PERLAS · CIERRE PLATEADO" },
  { name: "Champagne Facetado", img: `${BASE}/bag-champagne-facetado-i7fCs5gy.jpg`, desc: "CRISTAL CHAMPAGNE · CADENA DORADA" },
  { name: "Onix Cristal", img: `${BASE}/bag-onix-cristal-Q1dYU0VE.jpg`, desc: "CUENTAS NEGRAS BRILLANTES · ESTILO NOCHE" },
  { name: "Glacier Blue", img: `${BASE}/bag-glacier-blue--LWN4-v5.jpg`, desc: "CUENTAS AZUL HIELO · ASA RÍGIDA" },
  { name: "Pearl Royale", img: `${BASE}/bag-pearl-royale-Cy5cVop9.jpg`, desc: "PERLAS BLANCAS · BORDADO A MANO" },
];

export default function Gallery() {
  return (
    <section className="bg-arena/40 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracota-oscuro">
            Aprenderás a crearlos
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            Estos son algunos modelos que aprenderás en nuestro curso
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-negro-cafe/75">
            Diseños reales creados paso a paso con las técnicas del programa:
            bolsos en cuentas y malla plástica.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, i) => (
            <Reveal key={model.name} delay={i * 80}>
              <div className="group overflow-hidden rounded-2xl border border-dorado/30 bg-crema shadow-sm transition hover:shadow-xl">
                <div className="aspect-square overflow-hidden bg-arena">
                  <img
                    src={model.img}
                    alt={`Bolso ${model.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-left">
                  <h3 className="font-serif text-xl font-semibold text-negro-cafe">
                    {model.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-terracota-oscuro/70">
                    {model.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
