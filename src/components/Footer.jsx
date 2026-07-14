import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-negro-cafe px-4 py-12 text-crema/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div>
          <span className="font-serif text-2xl font-semibold text-crema">MACA</span>
          <p className="mt-1 text-xs uppercase tracking-widest text-dorado">
            {t("footer.tagline")}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#" className="hover:text-crema">{t("footer.terms")}</a>
          <a href="#" className="hover:text-crema">{t("footer.privacy")}</a>
          <a href="#" className="hover:text-crema">{t("footer.refund")}</a>
          <a href="#" className="hover:text-crema">{t("footer.contact")}</a>
        </nav>

        <p className="max-w-xl text-xs text-crema/50">
          {t("footer.disclaimer")}
        </p>

        <p className="text-xs text-crema/40">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
