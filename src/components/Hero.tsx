import { Check, ArrowRight, ShieldCheck } from 'lucide-react'
import { siteConfig } from '../config/siteData'
import { redirectTo } from '../utils/navigation'

export default function Hero() {
  const { hero } = siteConfig

  return (
    <section className="px-4 pb-10 pt-5 sm:pb-14 sm:pt-8">
      <div className="mx-auto max-w-3xl text-center">
        {/* Category Badge */}
        <p className="mx-auto w-fit rounded-full border border-sky-200 bg-[#e0f2fe] px-3.5 py-1 text-xs font-bold uppercase text-[#0369a1] shadow-2xs tracking-wide">
          {hero.categoryBadge}
        </p>

        {/* Headline com "+150" em destaque */}
        <h1 className="mx-auto mt-4 font-display text-xl sm:text-2xl md:text-3xl lg:text-[2.15rem] font-black leading-snug sm:leading-tight tracking-tight text-[#0f172a]">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0ea5e9] leading-none mb-1 drop-shadow-sm">
            {hero.headline.number}
          </span>
          {hero.headline.prefix}{' '}
          <span className="text-[#0284c7] inline-block">{hero.headline.highlightWord}</span>
        </h1>

        {/* ─── FOTO / MOCKUP DO HERO (card com borda) ─── */}
        <div className="mx-auto mt-6 max-w-md sm:max-w-lg px-2">
          <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl p-2 transition-transform hover:scale-[1.01]">
            <img
              src={hero.mockupImage}
              alt={hero.mockupAlt}
              className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              loading="eager"
            />
            <div className="absolute top-3.5 right-3.5 bg-[#0284c7]/95 text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full shadow-xs backdrop-blur-xs">
              Atualizado 2026
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {hero.subheadline}
        </p>

        {/* Bullets List */}
        <div className="mx-auto mt-7 max-w-xl rounded-xl border border-slate-200 bg-white p-4 sm:p-6 text-left shadow-2xs">
          <ul className="space-y-3">
            {hero.checklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="flex-shrink-0 mt-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão de Ação */}
        <div className="mt-7 flex flex-col items-center">
          <a
            href={hero.ctaLink}
            onClick={(e) => {
              e.preventDefault()
              redirectTo(hero.ctaLink)
            }}
            className="btn-direct-cta group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl px-7 py-4 text-base sm:text-lg font-black uppercase tracking-wide text-white transition-transform hover:scale-[1.01] active:scale-[0.98] animate-pulse-cta cursor-pointer"
          >
            <span>{hero.ctaButton}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>

          <p className="mt-2.5 text-xs text-slate-500 font-medium">
            {hero.deliverySubtext}
          </p>

          <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5 text-sky-700" />
            <span>{hero.trustSeal}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
