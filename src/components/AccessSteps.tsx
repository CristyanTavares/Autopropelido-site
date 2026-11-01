import { siteConfig } from '../config/siteData'

export default function AccessSteps() {
  const { accessSteps } = siteConfig

  return (
    <section className="px-4 py-12 sm:py-16 bg-[#f8fafc] border-t border-slate-200">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-tight text-[#0f172a]">
          {accessSteps.title}
        </h2>
        <p className="mt-1 text-center font-display text-xs sm:text-sm font-extrabold text-sky-700 uppercase tracking-widest">
          {accessSteps.subtitle}
        </p>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* PASSO 1 */}
          <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xs hover:border-sky-300 transition-colors">
            <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" fill="none">
              <path d="M6 10h7l8 28h27" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 16h37l-5 17H20z" fill="#38bdf8" />
              <path d="M15 16h37l-2 7H17z" fill="#7dd3fc" />
              <circle cx="24" cy="50" r="4" fill="#0ea5e9" />
              <circle cx="43" cy="50" r="4" fill="#0ea5e9" />
              <circle cx="47" cy="17" r="11" fill="#22c55e" />
              <path d="M41.5 17.5l4 4 7.5-8" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="mt-3.5 font-display text-sm sm:text-base font-extrabold text-slate-900">
              {accessSteps.steps[0].title}
            </h3>
            <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
              {accessSteps.steps[0].desc}
            </p>
          </div>

          {/* PASSO 2 */}
          <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xs hover:border-sky-300 transition-colors">
            <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" fill="none">
              <rect x="8" y="22" width="48" height="32" rx="4" fill="#0284c7" />
              <rect x="8" y="22" width="48" height="8" rx="4" fill="#0369a1" />
              <circle cx="22" cy="41" r="7" fill="#fff" />
              <circle cx="22" cy="38.5" r="2.8" fill="#0284c7" />
              <path d="M17 46c1.2-2.6 3-3.8 5-3.8s3.8 1.2 5 3.8z" fill="#0284c7" />
              <rect x="34" y="36" width="16" height="4" rx="2" fill="#fff" />
              <rect x="34" y="44" width="16" height="4" rx="2" fill="#fff" />
              <path d="M32 4l4 7.5 8.5 1.3-6.2 6 1.5 8.4L32 23.2l-7.8 4 1.5-8.4-6.2-6 8.5-1.3z" fill="#fbbf24" />
              <path d="M14 10l3 4M50 10l-3 4M10 20h5M54 20h-5" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <h3 className="mt-3.5 font-display text-sm sm:text-base font-extrabold text-slate-900">
              {accessSteps.steps[1].title}
            </h3>
            <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
              {accessSteps.steps[1].desc}
            </p>
          </div>

          {/* PASSO 3 */}
          <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xs hover:border-sky-300 transition-colors">
            <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" fill="none">
              <path d="M6 14h18l5 6h29a3 3 0 013 3v27a3 3 0 01-3 3H6a3 3 0 01-3-3V17a3 3 0 013-3z" fill="#fbbf24" />
              <circle cx="46" cy="27" r="2" fill="#38bdf8" />
              <circle cx="53" cy="27" r="2" fill="#38bdf8" />
              <path d="M26 24h12v14h9L32 54 17 38h9z" fill="#0284c7" />
            </svg>
            <h3 className="mt-3.5 font-display text-sm sm:text-base font-extrabold text-slate-900">
              {accessSteps.steps[2].title}
            </h3>
            <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
              {accessSteps.steps[2].desc}
            </p>
          </div>

          {/* PASSO 4 */}
          <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xs hover:border-sky-300 transition-colors">
            <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" fill="none">
              <rect x="4" y="10" width="56" height="42" rx="4" fill="#93c5fd" />
              <rect x="9" y="15" width="46" height="26" rx="2" fill="#e0f2fe" />
              <path d="M9 41l12-12 8 8 7-7 19 12z" fill="#0284c7" />
              <circle cx="20" cy="23" r="4" fill="#fbbf24" />
              <rect x="9" y="43" width="46" height="6" fill="#bfdbfe" />
              <circle cx="16" cy="46" r="2" fill="#f97316" />
              <circle cx="24" cy="46" r="2" fill="#22c55e" />
              <circle cx="32" cy="46" r="2" fill="#ef4444" />
              <path d="M58 6L40 30l-4 9 9-4L63 11z" fill="#0ea5e9" />
              <path d="M36 39l4-9 4 4z" fill="#0284c7" />
            </svg>
            <h3 className="mt-3.5 font-display text-sm sm:text-base font-extrabold text-slate-900">
              {accessSteps.steps[3].title}
            </h3>
            <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
              {accessSteps.steps[3].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
