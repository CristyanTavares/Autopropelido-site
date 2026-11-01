import { siteConfig } from '../config/siteData'

export default function TopBanner() {
  return (
    <div className={`py-2 px-4 text-center text-xs sm:text-sm font-extrabold uppercase tracking-wide ${siteConfig.topBanner.bgClass} border-b border-slate-800`}>
      <span className="inline-flex items-center justify-center gap-1.5 flex-wrap">
        <span>⚠️ AVISO: A OFERTA DE LANÇAMENTO COM</span>
        <span className="text-amber-400 font-black">6 BÔNUS EXCLUSIVOS</span>
        <span>TERMINA EM</span>
        <span className="text-sky-300 font-black underline decoration-sky-400 decoration-2 underline-offset-2">BREVE!</span>
      </span>
    </div>
  )
}
