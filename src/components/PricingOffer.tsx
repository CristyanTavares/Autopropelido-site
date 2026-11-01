import { useState } from 'react'
import { Check, ArrowRight, Lock, Flame, Star, Gift } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function PricingOffer() {
  const { pricingOffer } = siteConfig
  const [bumpsActive, setBumpsActive] = useState<Record<string, boolean>>({})

  const toggleBump = (id: string) => {
    setBumpsActive((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Calcula preço total (base + bumps ativos)
  const totalPrice =
    pricingOffer.basePriceNum +
    (pricingOffer.orderBumps ?? []).reduce(
      (acc, bump) => acc + (bumpsActive[bump.id] ? bump.priceNum : 0),
      0
    )

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

          {/* ─── ORDER BUMPS ─── */}
          {pricingOffer.orderBumps && pricingOffer.orderBumps.length > 0 && (
            <div className="mt-6 space-y-4 border-t border-dashed border-amber-300 pt-6">
              <p className="text-center text-xs font-black uppercase tracking-wider text-amber-600 flex items-center justify-center gap-1.5">
                <Gift className="h-4 w-4" />
                Turbine seu pacote com extras exclusivos
              </p>

              {pricingOffer.orderBumps.map((bump) => {
                const isActive = bumpsActive[bump.id] ?? false
                return (
                  <div
                    key={bump.id}
                    className={`relative overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                      isActive
                        ? 'border-amber-400 bg-amber-50/50 shadow-md shadow-amber-100'
                        : 'border-dashed border-slate-300 bg-white hover:border-amber-300'
                    }`}
                  >
                    {/* Tag Badge */}
                    <div className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-center ${
                      isActive ? 'bg-amber-400 text-[#0f172a]' : 'bg-[#0f172a] text-amber-400'
                    }`}>
                      {bump.tag}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 p-4">
                      {/* Mockup Image */}
                      <div className="flex-shrink-0 mx-auto sm:mx-0 w-28 sm:w-32">
                        <img
                          src={bump.image}
                          alt={bump.title}
                          className="w-full h-auto object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-black text-slate-900 leading-snug">
                          {bump.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                          {bump.subtitle}
                        </p>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {bump.description}
                        </p>

                        {/* Price + Toggle */}
                        <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-baseline gap-2">
                            <span className="text-[11px] text-slate-400 line-through font-semibold">
                              {bump.originalPrice}
                            </span>
                            <span className="font-display text-lg font-black text-[#0f172a]">
                              R$ {bump.priceFormatted}
                            </span>
                          </div>

                          <button
                            onClick={() => toggleBump(bump.id)}
                            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                              isActive
                                ? 'bg-amber-400 text-[#0f172a] shadow-sm'
                                : 'bg-[#0f172a] text-amber-400 hover:bg-[#1e293b]'
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded border-2 transition-colors ${
                                isActive
                                  ? 'border-[#0f172a] bg-[#0f172a]'
                                  : 'border-amber-400'
                              }`}
                            >
                              {isActive && <Check className="h-3 w-3 text-amber-400" strokeWidth={3} />}
                            </span>
                            {isActive ? 'Adicionado ✓' : 'Sim, eu quero!'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Dynamic total (visual only) */}
              {Object.values(bumpsActive).some(Boolean) && (
                <div className="text-center rounded-lg bg-[#0f172a] p-3 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Valor total atualizado
                  </p>
                  <p className="font-display text-2xl font-black mt-0.5">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">pagamento único · acesso vitalício</p>
                </div>
              )}
            </div>
          )}

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
