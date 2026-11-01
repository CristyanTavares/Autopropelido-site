import { Clock, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/siteData'
import { redirectTo } from '../utils/navigation'

export default function StudySection() {
  const { studySection, hero } = siteConfig

  const doublePhotos = [...studySection.studyPhotos, ...studySection.studyPhotos]

  return (
    <section className="overflow-hidden bg-[#f1f5f9] py-12 sm:py-16 text-center border-y border-slate-200">
      <div className="mx-auto max-w-5xl">
        {/* ─── CARROSSEL DE FOTOS NA SEÇÃO 4 (STUDY-MARQUEE) ─── */}
        <div className="marquee-container mb-8" aria-label="Pessoas consultando o material e reparando autopropelidos">
          <div className="study-marquee-track">
            {doublePhotos.map((photo, idx) => (
              <div
                key={idx}
                className="flex-none w-56 sm:w-72 overflow-hidden rounded-xl border border-white shadow-sm relative group bg-slate-900"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-medium text-left drop-shadow-sm">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── HEADLINE DE DOR & URGÊNCIA ─── */}
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-snug text-[#0f172a]">
            Quanto tempo você ainda vai perder{' '}
            <span className="text-amber-500">parado na rua</span>{' '}
            ou gastando{' '}
            <span className="text-rose-500">fortuna em oficinas</span>?
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm font-bold text-[#dc2626] flex items-center justify-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {studySection.urgencyText}
          </p>

          <div className="mt-5">
            <a
              href={hero.ctaLink}
              onClick={(e) => {
                e.preventDefault()
                redirectTo(hero.ctaLink)
              }}
              className="btn-direct-cta inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-black uppercase text-white hover:scale-[1.01] transition-transform cursor-pointer"
            >
              <span>{studySection.ctaText}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
