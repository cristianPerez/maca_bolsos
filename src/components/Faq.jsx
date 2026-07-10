import { useState } from "react";
import Reveal from "./Reveal.jsx";

const faqs = [
  {
    q: "¿El curso es en vivo o ya está grabado?",
    a: "El curso está 100% grabado en videos paso a paso, para que aprendas a tu ritmo, sin horarios y las veces que quieras.",
  },
  {
    q: "¿Necesito saber tejer o tener experiencia?",
    a: "No. El curso está diseñado desde cero, incluso si nunca has hecho un bolso antes.",
  },
  {
    q: "¿Incluye lista de materiales?",
    a: "Sí. Cada tutorial tiene los materiales necesarios y además un directorio de proveedores económicos para conseguir todo fácilmente.",
  },
  {
    q: "¿Voy a poder vender los bolsos que haga?",
    a: "Sí. Puedes crear tu propia colección y vender tus bolsos con acabados tipo boutique.",
  },
  {
    q: "¿El curso incluye los moldes o patrones?",
    a: "Sí. Incluye más de 50 patrones exclusivos listos para aplicar en tus diseños.",
  },
  {
    q: "¿Qué tipo de bolsos voy a aprender a hacer?",
    a: "Aprenderás bolsos en cuentas (perlas) y en malla plástica, con acabados elegantes y estilo de lujo.",
  },
  {
    q: "¿El acceso es limitado o es para siempre?",
    a: "El acceso es de por vida. Puedes entrar cuando quieras y repetir las clases las veces que necesites.",
  },
  {
    q: "¿Puedo ver el curso desde el celular?",
    a: "Sí. Puedes acceder desde celular, tablet o computador en cualquier momento.",
  },
  {
    q: "¿El curso incluye soporte o ayuda?",
    a: "Sí. Tendrás acceso a nuestra comunidad privada donde podrás resolver dudas y compartir tus avances.",
  },
  {
    q: "¿En qué idioma está el curso?",
    a: "Los videos son en español, pero muchos son visuales paso a paso, por lo que son fáciles de seguir incluso sin escuchar.",
  },
  {
    q: "¿Cuánto tiempo tarda en ver resultados?",
    a: "Desde las primeras clases podrás crear tus primeros bolsos. Muchas alumnas comienzan a vender en pocas semanas.",
  },
  {
    q: "¿Este curso es solo para hobby o también para negocio?",
    a: "Es para ambas. Puedes hacerlo como hobby o convertirlo en una fuente de ingresos desde casa.",
  },
  {
    q: "¿Qué incluye exactamente el curso?",
    a: "Incluye: ✦ Curso de bolsos en cuentas ✦ Curso de bolsos en malla plástica ✦ 50 patrones exclusivos ✦ Directorio de proveedores ✦ Plantilla de costos y precios ✦ Manual de marketing digital ✦ Comunidad privada.",
  },
  {
    q: "¿Cómo recibo el acceso después de pagar?",
    a: "Recibirás acceso inmediato en tu correo electrónico para ingresar a la plataforma.",
  },
  {
    q: "¿Esto es un curso o venden los bolsos físicos?",
    a: "Este es un curso digital. Aprenderás a crear tus propios bolsos paso a paso.",
  },
  {
    q: "¿Necesito comprar materiales antes de empezar?",
    a: "No necesitas materiales para empezar. Primero accedes al curso, exploras los diseños y eliges qué bolso quieres crear. Así compras solo lo necesario y evitas gastar dinero en materiales que no vas a usar.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-dorado/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-negro-cafe">{item.q}</span>
        <span
          className={`shrink-0 text-xl text-terracota transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-negro-cafe/75 sm:text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-crema px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-negro-cafe sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-negro-cafe/70">
            Todo lo que necesitas saber antes de comenzar.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div>
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
