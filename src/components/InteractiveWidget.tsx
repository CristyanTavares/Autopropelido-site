import { useState } from 'react'
import { ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function InteractiveWidget() {
  const { interactiveWidget, hero } = siteConfig
  const [selectedId, setSelectedId] = useState(interactiveWidget.profiles[0].id)

  const activeProfile = interactiveWidget.profiles.find((p) => p.id === selectedId) || interactiveWidget.profiles[0]

  return (
    <section className="px-4 py-12 sm:py-16 bg-[#f8fafc]" id="simulador">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-sky-100 border border-sky-300 px-3 py-1 text-xs font-black uppercase tracking-wider text-sky-900 mb-3">
          {interactiveWidget.badge}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0f172a]">
          {interactiveWidget.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          {interactiveWidget.subtitle}
        </p>

        {/* Category Selector Tabs */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-3xl mx-auto">
          {interactiveWidget.profiles.map((p) => {
            const isSelected = p.id === selectedId
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-sky-600 bg-sky-50/80 shadow-sm ring-2 ring-sky-600/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm sm:text-base font-bold ${isSelected ? 'text-sky-950 font-extrabold' : 'text-slate-800'}`}>
                    {p.label}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Dynamic Result Card */}
        <div className="mt-6 max-w-3xl mx-auto rounded-2xl border-2 border-sky-500 bg-white p-6 sm:p-8 text-left shadow-md">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <div>
              <p className="text-xs uppercase font-extrabold text-sky-700">Categoria Detectada:</p>
              <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900">
                {activeProfile.category}
              </h3>
            </div>
            <div className="rounded-lg bg-sky-100 px-3 py-1.5 text-xs font-black text-sky-800 text-right">
              {activeProfile.codeSuggestion}
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>{activeProfile.details}</p>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
              <HelpCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span><strong>Atenção:</strong> {activeProfile.recommendation}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
              Quer ver o guia visual completo de fiação, peças e destravamentos para o seu veículo?
            </span>
            <a
              href={hero.ctaLink}
              className="btn-direct-cta inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black uppercase text-white hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <span>Acessar no Manual</span>
              <ArrowRight className="h-4 w-4" strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
