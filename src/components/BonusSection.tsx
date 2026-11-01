import { Check } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function BonusSection() {
  const { bonusSection } = siteConfig

  return (
    <section className="px-4 py-12 sm:py-16 bg-[#f8fafc] border-t border-slate-200">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-center font-display text-lg sm:text-2xl md:text-3xl font-extrabold uppercase leading-snug text-[#0f172a] max-w-2xl mx-auto">
          E NÃO PARA POR AÍ... VOCÊ AINDA RECEBE{' '}
          <span className="text-amber-500">6 BÔNUS EXCLUSIVOS</span>{' '}
          PARA DOMINAR SEU{' '}
          <span className="text-[#0ea5e9]">AUTOPROPELIDO</span>!
        </h2>

        <div className="mt-8 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {bonusSection.bonuses.map((b) => (
            <article
              key={b.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-sky-300 transition-all duration-200"
            >
              <div>
                {/* ─── FOTO / MOCKUP DO BÔNUS ─── */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-100 flex items-center justify-center p-2">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`rounded-md bg-[#0f172a] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-xs ${b.tagColor || 'text-white'}`}>
                      {b.tag}
                    </span>
                  </div>
                </div>

                {/* Conteúdo textual do Bônus */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {b.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {b.description}
                  </p>

                  <ul className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3.5">
                    {b.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="h-3.5 w-3.5 text-sky-700 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price / Value Stacking */}
              <div className="px-4 sm:px-5 pb-5 pt-1">
                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="text-[11px] text-slate-400">
                    <span>Valor normal: </span>
                    <span className="line-through font-semibold text-rose-700/80">{b.originalPrice}</span>
                  </div>
                  <span className="rounded-md bg-[#0284c7] px-3 py-0.5 text-[11px] font-bold uppercase text-white shadow-2xs">
                    GRÁTIS
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
