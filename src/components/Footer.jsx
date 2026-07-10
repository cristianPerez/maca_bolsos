export default function Footer() {
  return (
    <footer className="bg-negro-cafe px-4 py-12 text-crema/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div>
          <span className="font-serif text-2xl font-semibold text-crema">MACA</span>
          <p className="mt-1 text-xs uppercase tracking-widest text-dorado">
            hecho a mano · marca propia
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#" className="hover:text-crema">Términos y condiciones</a>
          <a href="#" className="hover:text-crema">Política de privacidad</a>
          <a href="#" className="hover:text-crema">Política de reembolso</a>
          <a href="#" className="hover:text-crema">Contacto</a>
        </nav>

        <p className="max-w-xl text-xs text-crema/50">
          Este sitio no forma parte ni está respaldado por Facebook™, Google™
          o Hotmart™. Los resultados varían según el esfuerzo y dedicación de
          cada alumna.
        </p>

        <p className="text-xs text-crema/40">
          © 2026 MACA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
