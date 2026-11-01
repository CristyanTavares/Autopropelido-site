import { siteConfig } from '../config/siteData'

export default function Footer() {
  const { footer } = siteConfig

  return (
    <footer className="bg-[#121927] px-4 py-10 text-slate-400 text-xs border-t border-slate-800">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <p className="font-display text-base font-bold text-white uppercase tracking-wider">
          {footer.title}
        </p>

        <p className="leading-relaxed text-slate-400 max-w-3xl mx-auto">
          {footer.disclaimer1}
        </p>

        <p className="leading-relaxed text-slate-500 max-w-2xl mx-auto">
          {footer.disclaimer2}
        </p>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500">
          <p>{footer.copyright}</p>
          <div className="flex gap-4">
            <a href="#oferta" className="hover:text-slate-300 transition-colors">Garantir Acesso</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Dúvidas Frequentes</a>
            <a href="#simulador" className="hover:text-slate-300 transition-colors">Simulador</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
