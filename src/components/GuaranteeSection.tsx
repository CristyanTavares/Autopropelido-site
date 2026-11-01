import { siteConfig } from '../config/siteData'

export default function GuaranteeSection() {
  const { guaranteeSection } = siteConfig

  return (
    <section className="bg-[#f1f5f9] px-4 py-14 sm:py-20 border-t border-slate-200">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] md:gap-14">
        {/* Medalha Geométrica com Faixa Recortada */}
        <div className="relative mx-auto flex h-48 w-full max-w-sm items-center justify-center sm:h-56">
          {/* Faixa traseira com pontas recortadas */}
          <div className="absolute h-20 w-full max-w-[18rem] bg-[#0f172a] [clip-path:polygon(0_18%,100%_18%,84%_50%,100%_82%,0_82%,16%_50%)] shadow-md" />
          
          {/* Círculo central com anéis duplos */}
          <div className="relative flex h-36 w-36 sm:h-44 sm:w-44 flex-col items-center justify-center rounded-full border-[0.4rem] border-[#fde68a] bg-[#0f172a] shadow-xl">
            <div className="absolute inset-2 rounded-full border border-[#fde68a]/50" />
            <span className="relative font-display text-5xl sm:text-6xl font-black leading-none text-[#fef3c7]">
              7
            </span>
            <span className="relative mt-0.5 font-display text-base sm:text-lg font-black uppercase tracking-wider text-[#fde68a]">
              dias
            </span>
          </div>
        </div>

        {/* Cópia da Garantia Incondicional */}
        <div className="text-left">
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight text-[#0f172a]">
            {guaranteeSection.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            {guaranteeSection.intro}
          </p>

          <ul className="mt-3.5 divide-y divide-slate-200 border-y border-slate-200">
            {guaranteeSection.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3 py-2.5 text-xs sm:text-sm text-slate-700">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0284c7]" />
                <span className="leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-sky-800">
              {guaranteeSection.actionText}
            </p>
            <p className="text-slate-500 font-semibold mt-0.5">
              {guaranteeSection.conditions}
            </p>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {guaranteeSection.closing}
          </p>
        </div>
      </div>
    </section>
  )
}
