import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '../config/siteData'

export default function FAQ() {
  const { faq } = siteConfig
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="bg-[#f1f5f9] px-4 py-12 sm:py-16 border-t border-slate-200" id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight text-[#0f172a]">
          {faq.title}
        </h2>

        <div className="mt-8 space-y-3">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-sm sm:text-base font-bold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm text-slate-600 leading-relaxed font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
