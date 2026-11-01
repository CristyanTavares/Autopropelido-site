import { ArrowRight, LayoutDashboard, Sparkles, BookOpen, Clock } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function ClaritySection() {
  const { claritySection, hero } = siteConfig
  const icons = [LayoutDashboard, Sparkles, BookOpen, Clock]

  const doubleSlides = [...claritySection.slides, ...claritySection.slides]

  return (
    <section className="bg-[#f1f5f9] px-4 py-12 sm:py-16 border-y border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight text-[#0f172a]">
          Veja como manter e destravar seu autopropelido fica muito mais fácil quando tudo está{' '}
          <span className="text-[#0ea5e9]">organizado visualmente</span>
        </h2>
        <p className="mt-2 text-center text-xs sm:text-sm font-semibold text-slate-600">
          {claritySection.tagline}
        </p>

        {/* ─── 1. FOTO PRINCIPAL DA CAPA DO MATERIAL / BUNDLE ─── */}
        <div className="mt-7 flex justify-center">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl max-w-lg w-full">
            <img
              src={claritySection.coverImage}
              alt={claritySection.coverAlt}
              className="w-full h-auto max-h-[340px] object-contain rounded-xl"
              loading="lazy"
            />
            <div className="absolute bottom-3.5 left-3.5 bg-[#0f172a]/90 text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-md backdrop-blur-xs">
              Visualização Completa do Guia
            </div>
          </div>
        </div>

        {/* ─── 2. CARROSSEL INFINITO DE SLIDES / PÁGINAS VISUAIS ─── */}
        <div className="mt-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3.5">
            Prévia das páginas internas, mapas e tabelas:
          </p>

          <div className="marquee-container" aria-label="Carrossel de páginas visuais">
            <div className="slide-marquee-track">
              {doubleSlides.map((slide, idx) => (
                <div
                  key={`${slide.id}-${idx}`}
                  className="flex-none w-52 sm:w-60 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg bg-slate-50 relative border border-slate-100">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className={`absolute top-2 left-2 bg-[#0f172a] text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shadow-2xs ${slide.tagColor || 'text-white'}`}>
                      {slide.tag}
                    </span>
                  </div>
                  <div className="mt-2.5">
                    <h4 className="font-display text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                      {slide.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 3. CARDS DE BENEFÍCIOS ─── */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-3.5 sm:grid-cols-2">
          {claritySection.cards.map((card, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <div
                key={idx}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-sky-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-50 text-sky-800">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${card.tagColor || 'text-sky-800'}`}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* ─── 4. BOTÃO CTA NO FINAL DA SEÇÃO ─── */}
        <div className="mt-10 text-center">
          <a
            href={hero.ctaLink}
            className="btn-direct-cta inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-black uppercase text-white hover:scale-[1.01] transition-transform"
          >
            <span>{claritySection.ctaText}</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
