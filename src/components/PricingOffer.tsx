import { Check, ArrowRight, Lock, Flame, Star } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function PricingOffer() {
  const { pricingOffer } = siteConfig

  return (
    <section id={pricingOffer.anchorId} className="bg-[#f1f5f9] px-4 py-12 sm:py-16 border-t border-slate-200">
      <div className="mx-auto max-w-4xl">
        {/* Urgency Badge */}
        <p className="mx-auto w-fit rounded-full bg-[#b91c1c] px-3.5 py-1 text-center text-xs font-bold uppercase text-white shadow-2xs flex items-center gap-1.5 mb-2.5">
          <Flame className="h-3.5 w-3.5" />
          {pricingOffer.urgencyBadge}
        </p>

        <h2 className="text-center font-display text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight text-[#0f172a]">
          Material completo + <span className="text-[#0284c7]">6 bônus</span> em um só lugar
        </h2>

        {/* Pricing Card */}
        <div className="mx-auto mt-7 max-w-lg rounded-2xl border border-slate-300 bg-white p-6 sm:p-8 shadow-xl">
          {/* Top Label */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="flex items-center gap-1 rounded-md bg-sky-50 border border-sky-200 px-2 py-0.5 text-xs font-bold text-sky-900">
              <Star className="h-3 w-3 fill-sky-500 text-sky-500" />
              Tudo incluso
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Pacote Único
            </span>
          </div>

          <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            {pricingOffer.description}
          </p>

          {/* Pricing Numbers */}
          <div className="mt-5 rounded-xl bg-[#f8fafc] p-4 text-center border border-slate-200">
            <p className="text-xs font-bold text-slate-400 line-through">
              {pricingOffer.oldPrice}
            </p>
            <div className="mt-0.5 flex items-baseline justify-center">
              <span className="text-xl font-bold text-slate-800 mr-1">R$</span>
              <span className="font-display text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
                {pricingOffer.priceInteger}
              </span>
              <span className="text-xl font-bold text-slate-800">
                {pricingOffer.priceDecimals}
              </span>
            </div>
            <p className="mt-0.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              {pricingOffer.billingType}
            </p>
            <div className="mt-2.5 inline-block rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-bold text-sky-800">
              🔥 {pricingOffer.socialProofCount}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <ul className="mt-5 space-y-2 text-left border-t border-slate-100 pt-5">
            {pricingOffer.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <span className="flex-shrink-0 mt-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
                </span>
                <span className={item.includes('BÔNUS') ? 'font-bold text-slate-900' : ''}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Botão de Ação */}
          <div className="mt-6">
            <a
              href={pricingOffer.checkoutUrl}
              className="btn-direct-cta group flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-base sm:text-lg font-black uppercase text-white shadow-md transition-transform hover:scale-[1.01] active:scale-[0.98] animate-pulse-cta"
            >
              <span>{pricingOffer.ctaText}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>

          {/* Security details */}
          <p className="mt-3.5 text-center text-[11px] font-medium text-slate-500 flex items-center justify-center gap-1.5">
            <Lock className="h-3 w-3 text-sky-700" />
            {pricingOffer.securityDetails}
          </p>
        </div>
      </div>
    </section>
  )
}
