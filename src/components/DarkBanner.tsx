import { Check, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/siteData'
import { redirectTo } from '../utils/navigation'

export default function DarkBanner() {
  const { darkBanner, hero } = siteConfig

  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl rounded-2xl bg-[#0f172a] p-7 text-center text-white sm:p-10 shadow-2xl">
        <h2 className="font-display text-lg sm:text-2xl font-black uppercase leading-snug">
          Chega de depender de{' '}
          <span className="text-amber-400">mecânicos</span>{' '}
          e passar raiva no trânsito com seu{' '}
          <span className="bg-[#0284c7] px-2.5 py-0.5 text-white rounded">
            {darkBanner.highlightWord}
          </span>
        </h2>

        <ul className="mx-auto mt-6 max-w-lg space-y-2.5 text-left text-xs sm:text-sm text-slate-200">
          {darkBanner.points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-sky-600 text-white">
                <Check className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a
            href={hero.ctaLink}
            onClick={(e) => {
              e.preventDefault()
              redirectTo(hero.ctaLink)
            }}
            className="btn-direct-cta inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-black uppercase text-white hover:scale-[1.01] transition-transform cursor-pointer"
          >
            <span>{darkBanner.buttonText}</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
